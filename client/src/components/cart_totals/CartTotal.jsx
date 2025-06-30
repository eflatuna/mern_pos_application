import { Button } from "antd";
import {
	ClearOutlined,
	MinusCircleOutlined,
	PlusCircleOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const CartTotal = () => {
	const { cartItems } = useSelector((state) => state.cart);
	return (
		<div className="cart h-full max-h-[calc(100vh-112px)] flex flex-col ">
			<h2 className="bg-light-blue text-center py-4 text-white font-bold tracking-wide">
				Items in Cart
			</h2>

			<ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
				{cartItems.map((item) => (
					<li
						key={item.id}
						className="cart-item flex justify-between"
					>
						<div className="flex items-center">
							<img
								src={item.img}
								alt={item.title}
								className="w-16 h-16 object-cover cursor-pointer"
							/>
							<div className="flex flex-col ml-2">
								<b>{item.title}</b>
								<span>
									{item.price}€ * {item.quantity}
								</span>
							</div>
						</div>
						<div className="flex items-center ">
							<Button
								type="primary"
								size="small"
								className="w-full flex items-center justify-center !rounded-full !bg-light-blue"
								icon={<PlusCircleOutlined />}
							/>
							<span className="font-bold w-6 inline-block text-center">
								{item.quantity}
							</span>
							<Button
								type="primary"
								size="small"
								className="w-full flex items-center justify-center !rounded-full !bg-danger-dark"
								icon={<MinusCircleOutlined />}
							/>
						</div>
					</li>
				))}
			</ul>
			<div className="cart-totals mt-auto">
				<div className="border-t border-b">
					<div className="flex justify-between p-2">
						<b>Subtotal</b>
						<span>100€</span>
					</div>
					<div className="flex justify-between p-2">
						<b>Tax 20%</b>
						<span className="text-red-700">+20€</span>
					</div>
				</div>
				<div className="border-b mt-4">
					<div className="flex justify-between p-2">
						<b className="text-xl text-dark-green">Total</b>
						<span className="text-xl">120€</span>
					</div>
				</div>
				<div className="pt-4 px-2">
					<Button
						type="primary"
						size="large"
						className="w-full !bg-light-blue"
					>
						Place Order
					</Button>
					<Button
						type="primary"
						size="large"
						className="w-full mt-2 flex items-center justify-center !bg-danger-dark"
						icon={<ClearOutlined />}
					>
						Clear
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
