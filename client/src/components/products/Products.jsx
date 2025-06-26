import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";

const Products = ({ categories, setCategories }) => {
	const [products, setProducts] = useState([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
			{products.map((item) => (
				<ProductItem key={item._id} item={item} />
			))}
			<div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex items-center justify-center hover:opacity-90">
				<PlusOutlined
					className="text-white md:text-2xl"
					onClick={() => setIsAddModalOpen(true)}
				/>
			</div>
			<div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex items-center justify-center hover:opacity-90">
				<EditOutlined className="text-white md:text-2xl" />
			</div>
			<AddProduct
				isAddModalOpen={isAddModalOpen}
				setIsAddModalOpen={setIsAddModalOpen}
				categories={categories}
				setCategories={setCategories}
			/>
		</div>
	);
};

export default Products;
