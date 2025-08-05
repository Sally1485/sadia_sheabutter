

export default function CartPage({ cartItems = [], updateQuantity, removeItem }) {
  // Calculate item count and total price safely
  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
    0
  );

  return (
    <aside className="fixed top-20 right-4 z-40 bg-white shadow-lg rounded-md w-80 max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-green-500 p-4 rounded-t-lg text-white">
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
              <div key={item.id} className="border p-2 rounded shadow-sm">
                <h2 className="font-medium">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">
                  Price: ${item.price ? item.price.toFixed(2) : "0.00"}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.id, item.quantity - 1);
                      } else {
                        removeItem(item.id);
                      }
                    }}
                    className="p-1 w-8 h-8 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-12 text-center border rounded"
                    min="1"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 w-8 h-8 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto text-red-500 hover:text-red-700"
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
        <div className="border-t p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Total:</h3>
          <p className="text-lg font-bold">${totalAmount.toFixed(2)}</p>
        </div>
      )}
    </aside>
  );
}
