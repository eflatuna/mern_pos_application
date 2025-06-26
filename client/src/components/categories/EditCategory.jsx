import { Button, Form, Input, Modal, Table } from "antd";
import React, { useState } from "react";

const EditCategory = ({ isEditModalOpen, setIsEditModalOpen, categories }) => {
	const [editingRow, setEditingRow] = useState(null);
	console.log(editingRow);
	const columns = [
		{
			title: "Category",
			dataIndex: "title",
			render: (_, record) => {
				return (
					<Form.Item className="mb-0">
						{/* <Input /> */}
						{record.title}
					</Form.Item>
				);
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
			<Form>
				<Table bordered dataSource={categories} columns={columns} />
			</Form>
		</Modal>
	);
};

export default EditCategory;
