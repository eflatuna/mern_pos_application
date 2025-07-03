import { Button, Form, Input, Modal, Select, Card, message } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CreateInvoice = ({ setIsModalOpen, isModalOpen }) => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	const onFinish = async (values) => {
		const payload = {
			...values,
			subTotal: Number(cart.total),
			tax: Number(((cart.total * cart.tax) / 100).toFixed(2)),
			totalAmount: Number(
				(cart.total + (cart.total * cart.tax) / 100).toFixed(2)
			),
			cartItems: cart.cartItems,
		};
		console.log("➡️ Sending invoice payload:", payload);
		try {
			const res = await fetch(
				"http://localhost:5000/api/invoices/add-invoice",
				{
					method: "POST",
					body: JSON.stringify(payload),
					headers: {
						"Content-Type": "application/json;charset=UTF-8",
					},
				}
			);
			if (res.status === 200) {
				messageApi.success("Invoice has been created");
				dispatch(reset());
				navigate("/invoices");
			}
		} catch (error) {
			messageApi.error("Error creating invoice");
			console.log(error);
		}
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
			name: "customerPhoneNumber",
			placeholder: "Enter customer's phone number",
			message: "Enter customer's phone number",
			component: <Input />,
		},
	];
	return (
		<>
			{contextHolder}
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
						label="Payment mode"
						name="paymentMode"
						rules={[
							{
								required: true,
								message: "Please select a payment method!",
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
									? `+${(
											(cart.total * cart.tax) /
											100
									  ).toFixed(2)}`
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
								€
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
		</>
	);
};

export default CreateInvoice;
