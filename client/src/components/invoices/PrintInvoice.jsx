import { Modal } from "antd";

const PrintInvoice = ({ setIsModalOpen, isModalOpen }) => {
	const closeModal = () => setIsModalOpen(false);

	return (
		<Modal
			title="Print Invoice"
			open={isModalOpen}
			footer={false}
			onCancel={closeModal}
		>
			<section className="py-20 bg-black">
				<div className="max-w-5xl mx-auto bg-white px-6">
					<article className="overflow-hidden">
						<div className="logo">
							<h2 className="text-4xl font-bold text text-slate-700">
								LOGO
							</h2>
							<div className="invoice-details">
								<div>
									<div className="text-md">
										<p className="font-bold">
											Invoice Details:
										</p>
										Unwrapped <p>Fake Street 123</p>
										<p>San Javier</p>
										<p>CA 12345</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
		</Modal>
	);
};

export default PrintInvoice;
