import Categories from "../categories/Categories";
import Products from "../products/Products";
import CartTotal from "../cart_totals/CartTotal";

const Home = () => {
	return (
		<>
			<div className="home px-6 flex flex-col md:flex-row justify-between gap-10  min-h-screen overflow-y-auto md:pb-0 pb-24">
				<div className="categories overflow-auto max-h-[calc(100vh-112px)] md:pb-64 ">
					<Categories />
				</div>
				<div className="products flex-[5] max-h-[calc(100vh-112px)] overflow-y-auto pb-10">
					<Products />
				</div>
				<div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
					<CartTotal />
				</div>
			</div>
		</>
	);
};

export default Home;
