import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";

const Products = ({ categories, filtered, products, setProducts }) => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const navigate = useNavigate("/products");

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

	return (
		<div className="products-wrapper grid grid-cols-card gap-4 ">
			{filtered.map((item) => (
				<ProductItem key={item._id} item={item} />
			))}
			<div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex items-center justify-center hover:opacity-90 min-h-[180px]">
				<PlusOutlined
					className="text-white md:text-2xl"
					onClick={() => setIsAddModalOpen(true)}
				/>
			</div>
			<div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex items-center justify-center hover:opacity-90 min-h-[180px]">
				<EditOutlined
					className="text-white md:text-2xl"
					onClick={() => navigate("/products")}
				/>
			</div>
			<AddProduct
				isAddModalOpen={isAddModalOpen}
				setIsAddModalOpen={setIsAddModalOpen}
				categories={categories}
				products={products}
				setProducts={setProducts}
			/>
		</div>
	);
};

export default Products;
