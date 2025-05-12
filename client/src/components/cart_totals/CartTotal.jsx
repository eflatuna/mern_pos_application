const CartTotal = () => {
	return (
		<div className="cart  flex flex-col h-[calc(100vh-112px)]">
			<h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
				Items in Cart
			</h2>
			<div className="cart-items flex-1 overflow-hidden">
				<div className="cart-item">cart item</div>
			</div>
			<div className="cart-totals mt-auto">
				<div className="border-b border-t">
					<div className="flex justify-between p-2">
						<b>Subtotal</b>
						<span>100€</span>
					</div>
					<div className="flex justify-between p-2">
						<b>VAT 20%</b>
						<span className="text-red-700">+20€</span>
					</div>
				</div>
				<div className=" mt-4">
					<div className="flex justify-between p-2">
						<b className="text-xl text-green-500">Total</b>
						<span className="text-xl">120€</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
