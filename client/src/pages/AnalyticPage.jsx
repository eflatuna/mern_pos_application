import Header from "../components/Header/Header";

const AnalyticPage = () => {
	return (
		<>
			<Header />
			<div className="px-6">
				<h1 className="text-4xl font-bold text-center mb-4">
					Analytics
				</h1>
				<div className="analytic-section">
					<h2 className="text-lg">
						Welcome{" "}
						<span className="text-light-green font-bold text-xl">
							Admin
						</span>
					</h2>
					<div className="analytic-cards grid grid-cols-4">
						<div className="card-item bg-gray-800 p-8 rounded-lg">
							<div className="flex gap-x-2">
								<div className="rounded-full bg-white w-16 h-16 p-3">
									<img src="images/user.png" alt="" />
								</div>
								<div className="text-white">
									<p className="mb-2 text-lg font-medium text-gray-400">
										Total Customers
									</p>
									<p className="text-xl font-semibold text-gray-200">
										125
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnalyticPage;
