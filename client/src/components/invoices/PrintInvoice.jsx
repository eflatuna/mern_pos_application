import { Button, Form, Input, Modal, Select, Card } from "antd";
import React from "react";

const PrintInvoice = ({ setIsModalOpen, isModalOpen }) => {
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
			title="Print Invoice"
			open={isModalOpen}
			footer={false}
			onCancel={closeModal}
		></Modal>
	);
};

export default PrintInvoice;
