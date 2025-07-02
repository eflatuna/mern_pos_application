import { Button, Form, Input, Modal, Select, Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const CreateInvoice = ({ setIsModalOpen, isModalOpen }) => {
	const cart = useSelector((state) => state.cart);
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const closeModal = () => setIsModalOpen(false);

	const formFields = [
		{
			label: "Customer name",
			name: "customerName",
			placeholder: "Enter customer's full name",
			message: "Enter customer's full name",
			component: <Input />,
		},
		{
			label: "Phone number",
			name: "phoneNumber",
			placeholder: "Enter customer's phone number",
			message: "Enter customer's phone number",
			component: <Input />,
		},
	];
	return (
		<Modal
			title="Create an invoice"
			open={isModalOpen}
			footer={false}
			onCancel={closeModal}
		>
			<Form layout="vertical" name="userForm" onFinish={onFinish}>
				{formFields.map((field) => (
					<Form.Item
						key={field.name}
						label={field.label}
						name={field.name}
						rules={[
							{
								required: true,
								message: field.message,
							},
						]}
					>
						{field.component &&
							React.cloneElement(field.component, {
								placeholder: field.placeholder,
							})}
					</Form.Item>
				))}
				<Form.Item
					label="Payment method"
					name="paymentMethod"
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<Select placeholder="Select a payment method">
						<Select.Option value="Cash"></Select.Option>
						<Select.Option value="Credit Card"></Select.Option>
					</Select>
				</Form.Item>

				<Card>
					<div className="flex justify-between">
						<span>Subtotal</span>
						<span>
							{" "}
							{cart.total > 0 ? cart.total.toFixed(2) : 0}
						</span>
					</div>
					<div className="flex justify-between my-2">
						<span>Tax %{cart.tax}</span>
						<span className="text-dark-red">
							{" "}
							{(cart.total * cart.tax) / 100 > 0
								? `+${((cart.total * cart.tax) / 100).toFixed(
										2
								  )}`
								: 0}
							€
						</span>
					</div>
					<div className="flex justify-between">
						<b>Total</b>
						<b>
							{cart.total + (cart.total * cart.tax) / 100 > 0
								? (
										cart.total +
										(cart.total * cart.tax) / 100
								  ).toFixed(2)
								: 0}
							₺
						</b>
					</div>
					<div className="flex justify-end">
						<Button
							className="mt-4 !bg-light-blue"
							type="primary"
							htmlType="submit"
						>
							Create an order
						</Button>
					</div>
				</Card>
			</Form>
		</Modal>
	);
};

export default CreateInvoice;
