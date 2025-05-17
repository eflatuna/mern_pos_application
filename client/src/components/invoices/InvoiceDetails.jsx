const InvoiceDetails = ({ details }) => {
	return (
		<div className="grid sm:grid-cols-4 grid-cols-3 gap-12 text-md text-slate-500">
			{details.map((section, i) => (
				<div key={i} className={i === 3 ? "sm:block hidden" : ""}>
					<p className="font-bold text-slate-700">{section.title}</p>
					{section.lines.map((line, j) => (
						<p
							key={j}
							className={j % 2 === 0 ? "" : "mt-2 font-bold"}
						>
							{line}
						</p>
					))}
				</div>
			))}
		</div>
	);
};

export default InvoiceDetails;
