import { useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";

const Products = ({ categories, filtered, products, setProducts, search }) => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const navigate = useNavigate("/products");

	return (
		<div className="products-wrapper grid grid-cols-card gap-4 ">
			{filtered
				.filter((product) =>
					product.title.toLowerCase().startsWith(search)
				)
				.map((item) => (
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
