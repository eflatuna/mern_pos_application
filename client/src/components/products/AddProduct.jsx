import { Button, Form, Input, message, Modal, Select } from "antd";

const AddProduct = ({
	isAddModalOpen,
	setIsAddModalOpen,
	categories,
	setCategories,
}) => {
	const onFinish = (values) => {
		try {
			fetch("http://localhost:5000/api/categories/add-category", {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			});
			message.success("Category has been created");
			form.resetFields();
			setCategories([
				...categories,
				{ _id: Math.random(), title: values.title },
			]);
		} catch (error) {
			console.log(error);
		}
	};
	const [form] = Form.useForm();

	return (
		<Modal
			title="Add New Product"
			open={isAddModalOpen}
			onCancel={() => setIsAddModalOpen(false)}
			footer={false}
		>
			<Form layout="vertical" onFinish={onFinish} form={form}>
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
						optionFilterProp="title"
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
						Create
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddProduct;
