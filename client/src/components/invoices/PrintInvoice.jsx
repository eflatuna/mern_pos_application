import { Modal } from "antd";

const PrintInvoice = ({ setIsModalOpen, isModalOpen }) => {
	const closeModal = () => setIsModalOpen(false);

	return (
		<Modal
			title="Print Invoice"
			open={isModalOpen}
			footer={false}
			onCancel={closeModal}
		></Modal>
	);
};

export default PrintInvoice;
