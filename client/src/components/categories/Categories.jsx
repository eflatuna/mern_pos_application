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
				<li
					key={index}
					className="bg-light-green px-6 py-10 text-white cursor-pointer hover:bg-light-yellow transition-all min-w-[145px]"
				>
					<span>{category}</span>
				</li>
			))}
		</ul>
	);
};

export default Categories;
