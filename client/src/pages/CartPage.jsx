import { Button, Card, Table } from "antd";
import Header from "../components/Header/Header";
import { useState } from "react";
import CreateInvoice from "../components/cart_totals/CreateInvoice";

const CartPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
	];

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
	];

	return (
		<>
			<Header />
			<div className="px-6 ">
				<Table
					dataSource={dataSource}
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
