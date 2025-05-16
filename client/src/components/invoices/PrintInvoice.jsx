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
										<p className="font-bold text-slate-700 mt-2">
											Date of Issue
										</p>
										<p>2022-01-01</p>
									</div>
									<div className="text-md text-slate-500">
										<p className="font-bold text-slate-700">
											Terms:
										</p>
										<p>10 Days</p>
										<p className="font-bold text-slate-700 mt-2">
											Due
										</p>
										<p>22.01.2022</p>
									</div>
								</div>
							</div>
						</div>
						<div className="invoice-table-area mt-8">
							<table className="min-w-full divide-y divide-slate-500 overflow-hidden">
								<thead>
									<tr>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
										>
											Image
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
										>
											Title
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
										>
											Price
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
										>
											Quantity
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
										>
											Total
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="py-4 pl-4 pr-3">
											<img
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyyRD7OkXlJDE9hgjrKwZ30rwLqwOaJbMiQ&s"
												alt=""
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
				</div>
			</section>
		</Modal>
	);
};

export default PrintInvoice;
