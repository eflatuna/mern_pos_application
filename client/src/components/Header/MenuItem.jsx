import { Badge } from "antd";

const MenuItem = ({
	href,
	icon,
	label,
	count,
	showOnMobile = true,
	showOnDesktop = true,
}) => {
	const responsiveClass = `
		${showOnMobile ? "flex" : "hidden"} 
		${showOnDesktop ? "md:flex" : "md:hidden"}
	`;
	return (
		<a
			href={href}
			className={`menu-link flex flex-col hover:text-[#40a9ff] transition-all ${responsiveClass}`}
		>
			{count ? (
				<Badge count={count} offset={[0, -4]}>
					{icon}
				</Badge>
			) : (
				icon
			)}
			<span className="md:text-xs text-[10px]">{label}</span>
		</a>
	);
};

export default MenuItem;
