import { Button, Modal } from "antd";

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
								<div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
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
									<div className="text-md text-slate-500 sm:block hidden">
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
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden"
										>
											Image
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden "
										>
											Title
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-left font-normal text-sm text-slate-700 md:pl-0 sm:hidden"
											colSpan={4}
										>
											Title
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-center font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden"
										>
											Price
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4 text-right font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden"
										>
											Quantity
										</th>
										<th
											scope="col"
											className="py-3.5 pt-4font-normal text-sm text-slate-700 md:pl-0 text-end"
										>
											Total
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-t border-slate-200">
										<td className="py-4 sm:table-cell hidden">
											<img
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyyRD7OkXlJDE9hgjrKwZ30rwLqwOaJbMiQ&s"
												className="w-12 h-12 object-cover"
												alt=""
											/>
										</td>
										<td className="py-4 ">
											<div className="flex flex-col">
												<span className="font-medium ">
													Apple
												</span>
												<span className="sm:hidden inline-block text-xs">
													1 unit at 2€
												</span>
											</div>
										</td>
										<td className="py-4 text-center sm:table-cell hidden">
											<span>2€</span>
										</td>
										<td className="py-4 text-right sm:table-cell hidden">
											<span>50</span>
										</td>
										<td className="py-4 text-end ">
											<span>100€</span>
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<th
											className="text-right pt-4 sm:table-cell hidden"
											colSpan={4}
											scope="row"
										>
											<span className="font-normal text-slate-700">
												Subtotal
											</span>
										</th>
										<th
											className="text-left pt-4 sm:hidden"
											scope="row"
											colSpan={4}
										>
											<p className="font-normal text-slate-700">
												Subtotal
											</p>
										</th>
										<th
											className="text-right pt-4"
											scope="row"
										>
											100€
										</th>
									</tr>
									<tr>
										<th
											className="text-right pt-4 sm:table-cell hidden"
											colSpan={4}
											scope="row"
										>
											<span className="font-normal text-slate-700">
												Tax
											</span>
										</th>
										<th
											className="text-left pt-4 sm:hidden"
											colSpan={4}
											scope="row"
										>
											<span className="font-normal text-slate-700">
												Tax
											</span>
										</th>
										<th
											className="text-right pt-4 text-dark-red"
											scope="row"
										>
											+20€
										</th>
									</tr>
									<tr>
										<th
											className="text-right pt-4 sm:table-cell hidden"
											colSpan={4}
											scope="row"
										>
											<span className="font-normal text-slate-700">
												Total
											</span>
										</th>
										<th
											className="text-left pt-4 sm:hidden"
											colSpan={4}
											scope="row"
										>
											<span className="font-normal text-slate-700">
												Total
											</span>
										</th>
										<th
											className="text-right pt-4"
											scope="row"
										>
											120€
										</th>
									</tr>
								</tfoot>
							</table>
							<div className="py-9">
								<div className="border-t pt-9 text-slate-700">
									<p className="text-sm font-light text-slate-700">
										We accept payments via credit card, bank
										transfer, and cash where applicable. All
										product prices are listed in EUR (€) and
										include VAT unless otherwise stated.
										Full payment must be received before we
										can process and ship your order. For
										bank transfers, please ensure that you
										include your order number in the payment
										reference to avoid delays. Invoices are
										issued automatically once the payment is
										confirmed. In case of late or incomplete
										payments, your order may be delayed or
										cancelled without prior notice. If you
										require a different payment arrangement
										or have any questions regarding our
										payment process, feel free to contact
										our customer support team.
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
			<div className="flex justify-end mt-4">
				<Button type="primary" size="large">
					Print
				</Button>
			</div>
		</Modal>
	);
};

export default PrintInvoice;
