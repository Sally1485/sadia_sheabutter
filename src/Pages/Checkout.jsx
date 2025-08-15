import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    // loading state of button
    const [loading, setLoading] = useState(false);

    // useCart
    const { cartItems, clearCart } = useCart();
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const navigate = useNavigate();

    // state to store buyer's details for the checkout form
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    //  Handles form submission: prevents page reload, shows loading state
    const handleCheckout = (e) => {
        e.preventDefault();
        setLoading(true);

        // Handle order details
        const orderDetails = cartItems
            .map(item => `${item.name} (x${item.quantity}) - Gh₵ ${item.price * item.quantity}`)
            .join("\n");

        const templateParams = {
            buyer_name: buyer.name,
            buyer_email: buyer.email,
            buyer_phone: buyer.phone,
            buyer_address: buyer.address,
            order_list: orderDetails,
            order_total: `Gh₵ ${total}`,
        };



        // Sends order details via EmailJS, shows success/failure notification,
        // clears cart, resets buyer form, and redirects to shop after 1.5s.
        // Finally, stops loading state regardless of outcome.
        emailjs
            .send("service_g6lxcat", "template_1ypr89r", templateParams, "5GoqkQ3CwMvxTUoBk")
            .then(() => {
                toast.success('Order Sent Successfully')
                clearCart();
                setBuyer({ name: "", email: "", phone: "", address: "" });
                setTimeout(() => {
                    navigate("/shop");
                }, 1500);
            })
            .catch(() => {
                toast.error('Failed to send order. Please try again')
            })
            .finally(() => {
                setLoading(false)
            })

    };

    return (
        <div className="mt-20 flex flex-col items-center">
            {/* Form to handle checkout */}
            <form onSubmit={handleCheckout} className="flex flex-col space-y-4">
                <h1 className="text-lg md:text-3xl font-bold text-center">
                    Fill in your details to place your order (checkout)
                </h1>

                <input
                    type="text"
                    name="user_name"
                    id="name"
                    value={buyer.name}
                    onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                    required
                    placeholder="Full Name"
                    className="w-full border rounded p-2"
                />

                <input
                    type="email"
                    name="user_email"
                    value={buyer.email}
                    onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full border rounded p-2"
                />

                <input
                    type='tel'
                    name="number"
                    id="number"
                    value={buyer.phone}
                    onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
                    required
                    placeholder="Phone Number"
                    className="w-full border rounded p-2"
                />

                <textarea
                    name="message"
                    id="address"
                    value={buyer.address}
                    onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
                    required
                    placeholder="Address"
                    className="w-full border h-30 p-2 rounded"
                ></textarea>

                <button
                    type="submit"
                    className="w-full border rounded bg-Green hover:bg-green-400 text-white p-2"
                    disabled={loading}
                >
                    {/* state of loading */}
                    {loading ? (
                        <div className='animate-pulse'>Sending...</div>) : (
                        "Place Order"
                    )}

                </button>
            </form>
        </div>
    );
}
