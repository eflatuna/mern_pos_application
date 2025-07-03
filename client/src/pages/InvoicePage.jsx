import { Button, Card, Table } from "antd";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import PrintInvoice from "../components/invoices/PrintInvoice";

const InvoicePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [invoiceItems, setInvoiceItems] = useState([]);

	useEffect(() => {
		const getBills = async () => {
			try {
				const res = await fetch(
					"http://localhost:5000/api/invoices/get-all"
				);
				const data = await res.json();
				setInvoiceItems(data);
			} catch (error) {
				console.log(error);
			}
		};
		getBills();
	}, []);
	console.log(invoiceItems);

	const columns = [
		{
			title: "Customer Name",
			dataIndex: "customerName",
			key: "customerName",
		},
		{
			title: "Phone Number",
			dataIndex: "customerPhoneNumber",
			key: "customerPhoneNumber",
		},
		{
			title: "Invoice Date",
			dataIndex: "createdAt",
			key: "createdAt",
			render: (text) => {
				return <span>{text.substring(0, 10)}</span>;
			},
		},
		{
			title: "Payment Mode",
			dataIndex: "paymentMode",
			key: "paymentMode",
		},
		{
			title: "Total Amount",
			dataIndex: "totalAmount",
			key: "totalAmount",
			render: (text) => {
				return <span>{text}€</span>;
			},
		},
		{
			title: "Actions",
			dataIndex: "actions",
			key: "actions",
			render: () => {
				return (
					<Button
						type="link"
						className="pl-0"
						onClick={() => setIsModalOpen(true)}
					>
						Print
					</Button>
				);
			},
		},
	];

	return (
		<>
			<Header />
			<div className="px-6 ">
				<h1 className="text-4xl font-bold text-center mb-4">
					Invoices
				</h1>
				<Table
					dataSource={invoiceItems}
					columns={columns}
					bordered
					pagination={false}
				/>
				<PrintInvoice
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
			</div>
		</>
	);
};

export default InvoicePage;
