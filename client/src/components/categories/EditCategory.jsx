import { Form, Modal, Table } from "antd";
import React from "react";

const EditCategory = ({ isEditModalOpen, setIsEditModalOpen }) => {
	return (
		<Modal
			open={isEditModalOpen}
			title="Edit Category"
			footer={false}
			onCancel={() => setIsEditModalOpen(false)}
		>
			<Form>
				<Table bordered />
			</Form>
		</Modal>
	);
};

export default EditCategory;
