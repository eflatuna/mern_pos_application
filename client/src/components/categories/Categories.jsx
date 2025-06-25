import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
const Categories = () => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const onFinish = (values) => {
		try {
		} catch (error) {}
	};

	const categoryList = [
		"All",
		"Food",
		"Drinks",
		"Desserts",
		"Snacks",
		"Beverages",
		"Others",
	];

	return (
		<ul className="flex gap-4 md:flex-col text-center text-lg ">
			{categoryList.map((category, index) => (
				<li key={index} className="category-item">
					<span>{category}</span>
				</li>
			))}
			<li className="category-item !bg-purple-800 hover:opacity-90">
				<PlusOutlined
					className="md:text-2xl"
					onClick={() => setIsAddModalOpen(true)}
				/>
			</li>
			<Modal
				title="Add New Category"
				closable={{ "aria-label": "Custom Close Button" }}
				open={isAddModalOpen}
				onCancel={() => setIsAddModalOpen(false)}
				footer={false}
			>
				<Form layout="vertical" onFinish={onFinish}>
					<Form.Item
						name={"title"}
						label="Add Category"
						rules={[
							{
								required: true,
								message: "Category cannot be empty!",
							},
						]}
					>
						<Input placeholder="Add Category" />
					</Form.Item>
					<Form.Item className="flex justify-end mb-0">
						<Button type="primary" htmlType="submit">
							Create
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</ul>
	);
};

export default Categories;
