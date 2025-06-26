import { Button, Form, Input, message, Modal, Select } from "antd";

const AddProduct = ({
	isAddModalOpen,
	setIsAddModalOpen,
	categories,
	products,
	setProducts,
}) => {
	const onFinish = async (values) => {
		// console.log(values);
		try {
			await fetch("http://localhost:5000/api/products/add-product", {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			});
			message.success("Category has been created");
			form.resetFields();
			setIsAddModalOpen(false);
			setProducts([
				...products,
				{ ...values, _id: Math.random(), price: Number(values.price) },
			]);
		} catch (error) {
			console.log(error);
			message.error("Failed to create product. Please try again.");
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
