import { Button, Form, Input, message, Modal } from "antd";

const AddCategory = ({
	isAddModalOpen,
	setIsAddModalOpen,
	categories,
	setCategories,
}) => {
	const [messageApi, contextHolder] = message.useMessage();
	const onFinish = (values) => {
		try {
			fetch("http://localhost:5000/api/categories/add-category", {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			});
			messageApi.success("Category has been created");
			form.resetFields();
			setCategories([
				...categories,
				{ _id: Math.random(), title: values.title },
			]);
		} catch (error) {
			messageApi.error("Error creating category");
			console.log(error);
		}
	};
	const [form] = Form.useForm();

	return (
		<>
			{contextHolder}

			<Modal
				title="Add New Category"
				closable={{ "aria-label": "Custom Close Button" }}
				open={isAddModalOpen}
				onCancel={() => setIsAddModalOpen(false)}
				footer={false}
			>
				<Form layout="vertical" onFinish={onFinish} form={form}>
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
		</>
	);
};

export default AddCategory;
