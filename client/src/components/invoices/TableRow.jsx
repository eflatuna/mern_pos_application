const TableRow = ({ item }) => {
	return (
		<tr className="border-y border-slate-200">
			<td className="py-4 sm:table-cell hidden">
				<img
					src={item.img}
					className="w-12 h-12 object-cover"
					alt={item.title}
				/>
			</td>
			<td className="py-4 sm:table-cell hidden">
				<div className="flex flex-col">
					<span className="font-medium">{item.title}</span>
					<span className="sm:hidden text-xs inline-block">
						1 unit at {item.price}€
					</span>
				</div>
			</td>
			<td className="py-4 sm:hidden text-left" colSpan={4}>
				<div className="flex flex-col">
					<span className="font-medium">{item.title}</span>
					<span className="sm:hidden text-xs inline-block">
						1 unit at {item.price}€
					</span>
				</div>
			</td>
			<td className="py-4 text-center sm:table-cell hidden">
				{item.price}€
			</td>
			<td className="py-4 text-right sm:table-cell hidden">
				{item.quantity}
			</td>
			<td className="py-4 text-end">{item.total}€</td>
		</tr>
	);
};

export default TableRow;
