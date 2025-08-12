import { useCart } from "../context/CartContext";


export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } = useCart();

  // Calculate totals
  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
    0
  );

  // Handle quantity changes safely
  const handleQuantityChange = (id, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
      updateCartItemQuantity(id, parsedQuantity);
    }
  };

  return (
    <aside className="fixed top-20 right-4 z-40 bg-white shadow-lg rounded-md w-80 max-h-[80vh] overflow-y-auto font-poppins">
      {/* Header */}
      <div className="bg-green p-4 rounded-t-lg text-white">
        <h1 className="text-lg font-semibold">
          Cart ({itemCount} item{itemCount !== 1 ? "s" : ""})
        </h1>
      </div>

      {/* Body */}
      <div className="p-4">
        {itemCount === 0 ? (
          <div className="text-center py-8 text-gray-600">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border p-2 rounded shadow-sm flex gap-3">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    Price: Gh₵{item.price ? item.price.toFixed(2) : "0.00"}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="p-1 w-8 h-8 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-12 text-center border rounded"
                      min="1"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="p-1 w-8 h-8 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Link */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {itemCount > 0 && (
        <div className="p-4 border-t text-right">
          <p className="text-lg font-bold">
            Total: Gh₵ {totalAmount.toFixed(2)}
          </p>
          <button
            onClick={clearCart}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear Cart
          </button>
        </div>
      )}
    </aside>
  );
}
