export default function CartPage() {
  const cartItems = []; // Replace with actual cart data

  const itemCount = cartItems.length;

  return (
    <aside className="fixed top-20 right-4 z-40 bg-white shadow-lg rounded-md w-80 max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-Green p-4 rounded-t-lg text-white">
        <h1 className="text-lg font-semibold">Cart ({itemCount} item{itemCount !== 1 ? "s" : ""})</h1>
      </div>

      {/* Body */}
      <div className="p-4">
        {itemCount === 0 ? (
          <div className="text-center py-8 text-gray-600">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="border p-2 rounded shadow-sm">
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-sm text-gray-600">Price: {item.price}</p>
              
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
