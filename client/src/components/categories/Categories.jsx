import { useEffect, useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import "./style.css";

const Categories = ({ categories, setCategories, setFiltered, products }) => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [categoryTitle, setCategoryTitle] = useState("All");

	useEffect(() => {
		if (categoryTitle === "All") {
			setFiltered(products);
		} else
			setFiltered(
				products.filter((item) => item.category === categoryTitle)
			);
	}, [products, setFiltered, categoryTitle]);
	// console.log(categoryTitle);
	return (
		<ul className="flex gap-4 md:flex-col text-center text-lg ">
			{categories.map((item) => (
				<li
					className="category-item"
					key={item._id}
					onClick={() => setCategoryTitle(item.title)}
				>
					<span>{item.title}</span>
				</li>
			))}
			<li className="category-item !bg-purple-800 hover:opacity-90">
				<PlusOutlined
					className="md:text-2xl"
					onClick={() => setIsAddModalOpen(true)}
				/>
			</li>
			<li className="category-item !bg-orange-800 hover:opacity-90">
				<EditOutlined
					className="md:text-2xl"
					onClick={() => setIsEditModalOpen(true)}
				/>
			</li>
			<AddCategory
				isAddModalOpen={isAddModalOpen}
				setIsAddModalOpen={setIsAddModalOpen}
				categories={categories}
				setCategories={setCategories}
			/>
			<EditCategory
				isEditModalOpen={isEditModalOpen}
				setIsEditModalOpen={setIsEditModalOpen}
				categories={categories}
				setCategories={setCategories}
			/>
		</ul>
	);
};

export default Categories;
