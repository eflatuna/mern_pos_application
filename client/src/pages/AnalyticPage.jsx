import { useEffect, useState } from "react";
import AnalyticCard from "../components/analytics/AnalyticCard";
import Header from "../components/Header/Header";
import { Area, Pie } from "@ant-design/plots";

const AnalyticPage = () => {
	const [data, setData] = useState([]);
	const [products, setProducts] = useState([]);
	const user = JSON.parse(localStorage.getItem("posUser"));
	// console.log(user);

	useEffect(() => {
		asyncFetch();
	}, []);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await fetch(
					"http://localhost:5000/api/products/get-all"
				);
				const data = await res.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);
	const asyncFetch = () => {
		fetch("http://localhost:5000/api/invoices/get-all")
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.log(error));
	};
	// console.log(data);

	const totalAmount = () => {
		const amount = data.reduce(
			(total, item) => item.totalAmount + total,
			0
		);
		return `${amount.toFixed(2)}₺`;
	};

	const config = {
		data,
		xField: "customerName",
		yField: "subTotal",
		xAxis: {
			range: [0, 1],
		},
	};

	const config2 = {
		appendPadding: 10,
		data,
		angleField: "subTotal",
		colorField: "customerName",
		radius: 1,
		innerRadius: 0.6,
		label: {
			offset: "-50%",
			content: "value",
			style: {
				textAlign: "center",
				fontSize: 14,
			},
		},
		interactions: [
			{
				type: "element-selected",
			},
			{
				type: "element-active",
			},
		],
		statistic: {
			title: false,
			content: {
				style: {
					whiteSpace: "pre-wrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
				},
				content: "Total Revenue",
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
							{user.username}
						</span>
					</h2>
					<div className="analytic-cards grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-10 my-10">
						<AnalyticCard
							title={"Total Customers"}
							amount={data?.length}
							img={"images/user.png"}
						/>
						<AnalyticCard
							title={"Total Revenue"}
							amount={totalAmount()}
							img={"images/money.png"}
						/>
						<AnalyticCard
							title={"Total Sales"}
							amount={data?.length}
							img={"images/sale.png"}
						/>
						<AnalyticCard
							title={"Total Products"}
							amount={products?.length}
							img={"images/product.png"}
						/>
					</div>
					<div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
						<div className="lg:w-1/2 lg:h-80 h-72">
							<Area {...config} />
						</div>
						<div className="lg:w-1/2 lg:h-80 h-72">
							<Pie {...config2} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnalyticPage;
