import { Button, Form, Input, Modal, Select, Card } from "antd";

const CreateInvoice = ({ setIsModalOpen, isModalOpen }) => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	return (
		<Modal
			title="Create an invoice"
			closable={{ "aria-label": "Custom Close Button" }}
			open={isModalOpen}
			footer={false}
			onCancel={() => setIsModalOpen(false)}
		>
			<Form layout="vertical" name="userForm" onFinish={onFinish}>
				<Form.Item
					label="Customer name"
					name="customerName"
					rules={[
						{
							required: true,
							message: "Enter customer's full name",
						},
					]}
				>
					<Input placeholder="Enter customer's full name" />
				</Form.Item>
				<Form.Item
					label="Phone number"
					name="phoneNumber"
					rules={[
						{
							required: true,
							message: "Enter customer's phone number",
						},
					]}
				>
					<Input
						placeholder="Enter customer's phone number"
						maxLength={11}
					/>
				</Form.Item>
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
							onClick={() => setIsModalOpen(true)}
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
