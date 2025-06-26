import { Button, Form, Input, Modal, Table } from "antd";
import React, { useState } from "react";

const EditCategory = ({ isEditModalOpen, setIsEditModalOpen, categories }) => {
	const [editingRow, setEditingRow] = useState(null);
	const onFinish = (values) => {
		try {
			fetch("http://localhost:5000/api/categories/update-category", {
				method: "PUT",
				body: JSON.stringify({
					...values,
					categoryId: editingRow._id,
				}),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
	const columns = [
		{
			title: "Category",
			dataIndex: "title",
			render: (_, record) => {
				if (record._id === editingRow?._id) {
					return (
						<Form.Item className="mb-0">
							<Input defaultValue={record.title} />
						</Form.Item>
					);
				} else {
					return <p>{record.title}</p>;
				}
			},
		},
		{
			title: "Action",
			dataIndex: "action",
			render: (text, record) => {
				return (
					<div>
						{" "}
						<Button
							type="link"
							onClick={() => setEditingRow(record)}
						>
							Edit
						</Button>
						<Button type="text">Save</Button>
						<Button type="text" danger>
							Delete
						</Button>
					</div>
				);
			},
		},
	];
	return (
		<Modal
			open={isEditModalOpen}
			title="Edit Category"
			footer={false}
			onCancel={() => setIsEditModalOpen(false)}
		>
			<Form onFinish={onFinish}>
				<Table
					bordered
					dataSource={categories}
					columns={columns}
					rowKey={"_id"}
				/>
			</Form>
		</Modal>
	);
};

export default EditCategory;
