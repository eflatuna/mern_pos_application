import AnalyticCard from "../components/analytics/AnalyticCard";
import Header from "../components/Header/Header";
import { Area, Pie } from "@ant-design/plots";

const AnalyticPage = () => {
	const config = {
		data: {
			type: "fetch",
			value: "https://assets.antv.antgroup.com/g2/aapl.json", // JSON veri URL'si
		},
		xField: (d) => new Date(d.date),
		yField: "close",
		smooth: true,
		tooltip: { showMarkers: false },
	};
	const config2 = {
		data: [
			{ type: "分类一", value: 27 },
			{ type: "分类二", value: 25 },
			{ type: "分类三", value: 18 },
			{ type: "分类四", value: 15 },
			{ type: "分类五", value: 10 },
			{ type: "其他", value: 5 },
		],
		angleField: "value",
		colorField: "type",
		label: {
			text: "value",
			style: {
				fontWeight: "bold",
			},
		},
		legend: {
			color: {
				title: false,
				position: "right",
				rowPadding: 5,
			},
		},
	};
	return (
		<>
			<Header />
			<div className="px-6 pb-20 md:pb-0">
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
					<div className="analytic-cards grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-10 my-10">
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
					<div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
						<div className="lg:w-1/2 lg:h-full h-72">
							<Area {...config} />
						</div>
						<div className="lg:w-1/2 lg:h-full h-72">
							<Pie {...config2} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnalyticPage;
