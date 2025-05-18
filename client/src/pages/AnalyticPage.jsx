import AnalyticCard from "../components/analytics/AnalyticCard";
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
					<div className="analytic-cards grid grid-cols-4 my-10 gap-10">
						<AnalyticCard
							title={"Total Customers"}
							amount={125}
							img={"images/user.png"}
						/>
						<AnalyticCard
							title={"Total Revenue"}
							amount={"125.00 €"}
							img={"images/money.png"}
						/>
						<AnalyticCard
							title={"Total Sales"}
							amount={125}
							img={"images/sale.png"}
						/>
						<AnalyticCard
							title={"Total Products"}
							amount={12500}
							img={"images/product.png"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnalyticPage;
