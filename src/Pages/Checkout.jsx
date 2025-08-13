import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function Checkout({ cartItems, total, clearCart }) {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });


    const handleCheckout = (e) => {
        e.preventDefault();
        setLoading(true);

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

        emailjs
            .send("service_ulzbtao", "template_1ypr89r", templateParams, "4VorpMdP2j_3nH7kp")
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
                    {loading ? (
                        <div className='animate-pulse'>Sending...</div>) : (
                       "Place Order"     
                    )}
                    
                </button>
            </form>
        </div>
    );
}
