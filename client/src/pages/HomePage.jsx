import { Header } from "antd/es/layout/layout";
import CartTotal from "../components/cart_totals/CartTotal";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";

const HomePage = () => {
	return (
		<>
			<Header />
			<div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-10">
				<div className="categories overflow-y-auto max-h-[calc(100vh-112px)] md:pb-10">
					<Categories />
				</div>
				<div className="products flex-[8] max-h-[calc(100vh-112px)] overflow-auto pb-10">
					<Products />
				</div>
				<div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
					<CartTotal />
				</div>
			</div>
		</>
	);
};

export default HomePage;
