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
		<div>
			<ul className="flex gap-4 flex-col text-center text-lg">
				{categoryList.map((category, index) => (
					<li
						key={index}
						className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all"
					>
						<span>{category}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
