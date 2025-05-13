import { Button, Form, Input, Modal, Select, Card } from "antd";
import React from "react";

const CreateInvoice = ({ setIsModalOpen, isModalOpen }) => {
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
				{formFields.map(
					(label, name, placeholder, message, component) => (
						<Form.Item
							key={name}
							label={label}
							name={name}
							rules={[
								{
									required: true,
									message,
								},
							]}
						>
							{component &&
								React.cloneElement(component, { placeholder })}
						</Form.Item>
					)
				)}
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
