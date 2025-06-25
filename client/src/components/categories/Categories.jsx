import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
const Categories = () => {
	const categoryList = [
		"All",
		"Food",
		"Drinks",
		"Desserts",
		"Snacks",
		"Beverages",
		"Others",
	];

	return (
		<ul className="flex gap-4 md:flex-col text-center text-lg ">
			{categoryList.map((category, index) => (
				<li key={index} className="category-item">
					<span>{category}</span>
				</li>
			))}
			<li className="category-item">
				<PlusOutlined className="md:text-2xl" />
			</li>
		</ul>
	);
};

export default Categories;
