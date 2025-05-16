import { Modal } from "antd";

const PrintInvoice = ({ setIsModalOpen, isModalOpen }) => {
	const closeModal = () => setIsModalOpen(false);

	return (
		<Modal
			title="Print Invoice"
			open={isModalOpen}
			footer={false}
			onCancel={closeModal}
			width={800}
		>
			<section className="py-20 bg-black">
				<div className="max-w-4xl bg-white px-6">
					<article className="overflow-hidden">
						<div className="logo my-6">
							<h2 className="text-4xl font-bold text-slate-700">
								LOGO
							</h2>
							<div className="invoice-details">
								<div className="grid grid-cols-4 gap-12">
									<div className="text-md text-slate-500">
										<p className="font-bold text-slate-700">
											Invoice Details
										</p>
										<p> Unwrapped </p>
										<p>Fake Street 123</p>
										<p>San Javier</p>
										<p>CA 12345</p>
									</div>
									<div className="text-md text-slate-500">
										<p className="font-bold text-slate-700">
											Invoice
										</p>
										<p> The Boring Company</p>
										<p>Tesla Street 123</p>
										<p>Frisco</p>
										<p>CA 1200</p>
									</div>
									<div className="text-md text-slate-500">
										<p className="font-bold text-slate-700">
											Invoice Nummer
										</p>
										<p>00041</p>
										<p className="font-bold text-slate-700">
											Date of Issue
										</p>
										<p>2022-01-01</p>
									</div>
									<div className="text-md text-slate-500">
										<p className="font-bold text-slate-700">
											Terms:
										</p>
										<p>0 Day</p>
										<p className="font-bold text-slate-700">
											Due
										</p>
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
