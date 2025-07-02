import { Button, Card, Table, message } from "antd";
import Header from "../components/Header/Header";
import { useState } from "react";
import CreateInvoice from "../components/cart_totals/CreateInvoice";
import { useSelector } from "react-redux";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
	incrementQuantity,
	decrementQuantity,
	deleteCart,
} from "../redux/cartSlice";

const CartPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();

	const columns = [
		{
			title: "Product Image",
			dataIndex: "img",
			key: "img",
			width: "125px",
			render: (text) => {
				return (
					<img
						src={text}
						alt=""
						className=" w-full h-20 object-cover"
					/>
				);
			},
		},
		{
			title: "Product Name",
			dataIndex: "category",
			key: "category",
		},
		{
			title: "Product Price",
			dataIndex: "price",
			key: "price",
			render: (text) => {
				return <span>{text.toFixed(2)}€</span>;
			},
		},
		{
			title: "Product Quantity",
			dataIndex: "quantity",
			key: "quantity",
			render: (text) => {
				return (
					<div className="flex items-center ">
						{contextHolder}
						<Button
							type="primary"
							size="small"
							className="w-full flex items-center justify-center !rounded-full !bg-light-blue"
							icon={<PlusCircleOutlined />}
							onClick={() => dispatch(incrementQuantity(text))}
						/>
						<span className="font-bold w-6 inline-block text-center">
							{text.quantity}
						</span>
						<Button
							type="primary"
							size="small"
							className="w-full flex items-center justify-center !rounded-full !bg-danger-dark"
							icon={<MinusCircleOutlined />}
							onClick={() => {
								if (text.quantity === 1) {
									if (
										window.confirm(
											"Are you sure you want to delete this item?"
										)
									) {
										dispatch(deleteCart(text));
										messageApi.success("Item deleted");
									}
								}
								if (text.quantity > 1) {
									dispatch(decrementQuantity(text));
								}
							}}
						/>
					</div>
				);
			},
		},
	];

	return (
		<>
			<Header />
			<div className="px-6 ">
				<Table
					dataSource={cart.cartItems}
					columns={columns}
					bordered
					pagination={false}
				/>
				<div className="cart-total flex justify-end mt-4">
					<Card className="w-72">
						<div className="flex justify-between">
							<span>Subtotal</span>
							<span>100€</span>
						</div>
						<div className="flex justify-between my-2">
							<span>VAT 20%</span>
							<span className="text-dark-red">20€</span>
						</div>
						<div className="flex justify-between">
							<b>Total</b>
							<b>120€</b>
						</div>
						<Button
							className="mt-4 w-full !bg-light-blue"
							type="primary"
							size="large"
							onClick={() => setIsModalOpen(true)}
						>
							Create an order
						</Button>
					</Card>
				</div>
				<CreateInvoice
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
			</div>
		</>
	);
};

export default CartPage;
