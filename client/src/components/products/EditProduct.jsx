import { Button, Form, Input, message, Modal, Table } from "antd";
import { useEffect, useState } from "react";

const EditProduct = ({ categories, setCategories }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await fetch(
					"http://localhost:5000/api/products/get-all"
				);
				const data = await res.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);
	const onFinish = (values) => {
		try {
			fetch("http://localhost:5000/api/categories/update-category", {
				method: "PUT",
				body: JSON.stringify({
					...values,
					categoryId: 1,
				}),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			});
			message.success("Category has been updated");
			setCategories(
				categories.map((item) => {
					if (item._id) {
						return { ...item, title: values.title };
					}
					return item;
				})
			);
		} catch (error) {
			message.error("Failed to update category");
			console.log(error);
		}
	};

	const deleteCategory = (id) => {
		if (window.confirm("Are you sure you want to delete this category?")) {
			try {
				fetch("http://localhost:5000/api/categories/delete-category", {
					method: "DELETE",
					body: JSON.stringify({
						categoryId: id,
					}),
					headers: {
						"Content-Type": "application/json; charset=UTF-8",
					},
				});
				message.success("Category has been deleted");
				setCategories(categories.filter((item) => 1));
			} catch (error) {
				message.error("Failed to delete category");
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
						<Button type="link" className="pl-0">
							Edit
						</Button>
						<Button
							type="link"
							htmlType="submit"
							className="!text-gray-500"
						>
							Save
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
		<Form onFinish={onFinish}>
			<Table
				bordered
				dataSource={products}
				columns={columns}
				rowKey={"_id"}
				scroll={{ x: 1000, y: 600 }}
			/>
		</Form>
	);
};

export default EditProduct;
