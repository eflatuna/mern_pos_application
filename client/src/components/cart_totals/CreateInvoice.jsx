import { Modal } from "antd";

const CreateInvoice = ({ setIsModalOpen, isModalOpen }) => {
	return (
		<Modal
			title="Create an invoice"
			closable={{ "aria-label": "Custom Close Button" }}
			open={isModalOpen}
			footer={false}
			onCancel={() => setIsModalOpen(false)}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	);
};

export default CreateInvoice;
