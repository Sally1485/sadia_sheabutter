



export default function CartPage() {
   const cartItems =[]




    return (
        <aside className="w-full md:w-[60%] mx-auto p-4">
            <div className="flex flex-col bg-white shadow-md rounded-lg justify-between">
                <div className='bg-Green p-4 rounded-t-lg text-white'>
                    <h1 className="text-lg font-semibold">Cart(0 items)</h1>
               </div>
                <div>You Cart is empty</div>
            </div>
            {cartItems === 0 ? (
                <div className="text-center py-8">
                    <p>Your Cart is Empty</p>
                </div>
            ) : (
                    <div>
                        {/* Cart items will be displayed here */}
                        {[].map((item) => {
                            <p>{ item.name}</p>
                        })}
                    </div>

            )}
     </aside>   
    )
}