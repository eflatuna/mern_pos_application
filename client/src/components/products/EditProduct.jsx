import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import React, { useEffect, useState } from "react";

const EditProduct = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [form] = Form.useForm();
	const [editingItem, setEditingItem] = useState({});
	const [messageApi, contextHolder] = message.useMessage();

	useEffect(() => {
		if (isEditModalOpen && editingItem) {
			form.setFieldsValue(editingItem);
		}
	}, [isEditModalOpen, editingItem, form]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await fetch(
					process.env.REACT_APP_SERVER_URL + "/api/products/get-all"
				);
				const data = await res.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await fetch(
					process.env.REACT_APP_SERVER_URL + "/api/categories/get-all"
				);
				const data = await res.json();
				data &&
					setCategories(
						data.map((item) => {
							return { ...item, value: item.title };
						})
					);
			} catch (error) {
				console.log(error);
			}
		};
		getCategories();
	}, []);

	const onFinish = (values) => {
		try {
			fetch(
				process.env.REACT_APP_SERVER_URL +
					"/api/products/update-product",
				{
					method: "PUT",
					body: JSON.stringify({
						...values,
						productId: editingItem._id,
					}),
					headers: {
						"Content-Type": "application/json; charset=UTF-8",
					},
				}
			);
			messageApi.success("Product has been updated");
			setProducts(
				products.map((item) => {
					if (item._id === editingItem._id) {
						return values;
					}
					return item;
				})
			);
		} catch (error) {
			console.error(error);
			messageApi.error("Failed to update product");
		}
	};

	const deleteCategory = (id) => {
		if (window.confirm("Are you sure you want to delete this product?")) {
			try {
				fetch(
					process.env.REACT_APP_SERVER_URL +
						"/api/products/delete-product",
					{
						method: "DELETE",
						body: JSON.stringify({
							productId: id,
						}),
						headers: {
							"Content-Type": "application/json; charset=UTF-8",
						},
					}
				);
				messageApi.success("Product has been deleted");
				setProducts(products.filter((item) => item._id !== id));
			} catch (error) {
				messageApi.error("Failed to delete product");
				console.log(error);
			}
		}
	};

	const columns = [
		{
			title: "Product Name",
			dataIndex: "title",
			width: "8%",
			render: (_, record) => {
				return <p>{record.title}</p>;
			},
		},
		{
			title: "Product Image",
			dataIndex: "img",
			width: "4%",
			render: (_, record) => {
				return (
					<img
						src={record.img}
						alt=""
						className=" w-full h-20 object-cover"
					/>
				);
			},
		},
		{ title: "Product Price", dataIndex: "price", width: "8%" },
		{ title: "Category", dataIndex: "category", width: "8%" },
		{
			title: "Action",
			dataIndex: "action",
			width: "8%",
			render: (_, record) => {
				return (
					<div>
						{" "}
						<Button
							type="link"
							className="pl-0"
							onClick={() => {
								setIsEditModalOpen(true);
								setEditingItem(record);
							}}
						>
							Edit
						</Button>
						<Button
							type="link"
							danger
							onClick={() => deleteCategory(record._id)}
						>
							Delete
						</Button>
					</div>
				);
			},
		},
	];
	return (
		<>
			{contextHolder}
			<Table
				bordered
				dataSource={products}
				columns={columns}
				rowKey={"_id"}
				scroll={{ x: 1000, y: 600 }}
			/>
			<Modal
				title="Add New Product"
				open={isEditModalOpen}
				onCancel={() => setIsEditModalOpen(false)}
				footer={false}
			>
				<Form
					layout="vertical"
					onFinish={onFinish}
					form={form}
					initialValues={editingItem}
				>
					<Form.Item
						name={"title"}
						label="Add Product Name"
						rules={[
							{
								required: true,
								message: "Product name cannot be empty!",
							},
						]}
					>
						<Input placeholder="Please enter the product name" />
					</Form.Item>
					<Form.Item
						name="img"
						label="Product Image"
						rules={[
							{
								required: true,
								message: "Product img cannot be empty!",
							},
						]}
					>
						<Input placeholder="Please enter the product image" />
					</Form.Item>
					<Form.Item
						name="price"
						label="Product Price"
						rules={[
							{
								required: true,
								message: "Product price cannot be empty!",
							},
						]}
					>
						<Input placeholder="Please enter the product price" />
					</Form.Item>
					<Form.Item
						name="category"
						label="Category"
						rules={[
							{
								required: true,
								message: "Category cannot be empty!",
							},
						]}
					>
						<Select
							placeholder="Search to Category"
							optionFilterProp="children"
							filterOption={(input, option) =>
								(option?.title ?? "").includes(input)
							}
							filterSort={(optionA, optionB) =>
								(optionA?.title ?? "")
									.toLowerCase()
									.localeCompare(
										(optionB?.title ?? "").toLowerCase()
									)
							}
							options={categories}
						/>
					</Form.Item>
					<Form.Item className="flex justify-end mb-0">
						<Button type="primary" htmlType="submit">
							Update
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default EditProduct;
