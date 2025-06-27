import Header from "../components/Header/Header";
import EditProduct from "../components/products/EditProduct";

const ProductPage = () => {
	return (
		<>
			<Header />
			<div className="px-6">
				<h1 className="text-4xl font-bold text-center">Products</h1>
				<EditProduct />
			</div>
		</>
	);
};

export default ProductPage;
