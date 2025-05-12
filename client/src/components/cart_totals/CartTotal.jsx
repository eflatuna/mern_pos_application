import { Button } from "antd";
import {
	ClearOutlined,
	MinusCircleOutlined,
	PlusCircleOutlined,
} from "@ant-design/icons";

const cartData = [
	{ id: 1, name: "Apple", price: 2, quantity: 2 },
	{ id: 2, name: "Banana", price: 1.5, quantity: 1 },
	{ id: 3, name: "Orange", price: 3, quantity: 3 },
	{ id: 4, name: "Grapes", price: 4, quantity: 1 },
	{ id: 5, name: "Mango", price: 2.5, quantity: 2 },
];
const CartTotal = () => {
	return (
		<div className="cart h-full max-h-[calc(100vh-112px)] flex flex-col">
			<h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
				Items in Cart
			</h2>

			<ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
				{cartData.map((item) => (
					<li
						key={item.id}
						className="cart-item flex justify-between"
					>
						<div className="flex items-center">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyyRD7OkXlJDE9hgjrKwZ30rwLqwOaJbMiQ&s"
								alt={item.name}
								className="w-16 h-16 object-cover"
							/>
							<div className="flex flex-col ml-2">
								<b>{item.name}</b>
								<span>
									{item.price}€ * {item.quantity}
								</span>
							</div>
						</div>
						<div className="flex items-center gap-x-1">
							<Button
								type="primary"
								size="small"
								className="flex items-center justify-center !rounded-full"
								icon={<PlusCircleOutlined />}
							/>
							<span className="font-bold">{item.quantity}</span>
							<Button
								type="primary"
								danger
								size="small"
								className="flex items-center justify-center !rounded-full"
								icon={<MinusCircleOutlined />}
							/>
						</div>
					</li>
				))}
			</ul>
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
					<div className="py-4 px-2">
						<Button type="primary" size="large" className="w-full">
							Place Order
						</Button>
						<Button
							type="primary"
							danger
							size="large"
							className="w-full mt-2 flex items-center justify-center"
							icon={<ClearOutlined />}
						>
							Clear
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
