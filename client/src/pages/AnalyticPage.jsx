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
					<h2 className="text-xl">
						Welcome
						<span className="text-light-green font-bold text-xl">
							Admin
						</span>
					</h2>
					<div className="analytic-cards grid grid-cols-4">
						<div className="card-item bg-gray-800">
							<div>
								<div>
									<img src="" alt="" />
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnalyticPage;
