import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";

import AddCategory from "./AddCategory";
const Categories = ({ categories, setCategories }) => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	return (
		<ul className="flex gap-4 md:flex-col text-center text-lg ">
			{categories.map((item) => (
				<li className="category-item" key={item._id}>
					<span>{item.title}</span>
				</li>
			))}
			<li className="category-item !bg-purple-800 hover:opacity-90">
				<PlusOutlined
					className="md:text-2xl"
					onClick={() => setIsAddModalOpen(true)}
				/>
			</li>
			<AddCategory
				isAddModalOpen={isAddModalOpen}
				setIsAddModalOpen={setIsAddModalOpen}
				setCategories={setCategories}
				categories={categories}
			/>
		</ul>
	);
};

export default Categories;
