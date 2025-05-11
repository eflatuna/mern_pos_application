import Categories from "../categories/Categories";
import Products from "../products/Products";
import CartTotal from "../cart_totals/CartTotal";

const Home = () => {
	return (
		<>
			<div className="home px-6 flex justify-between gap-10">
				<div className="categories flex-1 overflow-auto max-h-[calc(100vh-112px)] pb-10">
					<div>
						<Categories />
					</div>
				</div>
				<div className="products flex-[5]">
					<div>
						<Products />
					</div>
				</div>
				<div className="cart ">
					<div>
						<CartTotal />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
