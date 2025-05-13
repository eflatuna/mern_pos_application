import { Badge } from "antd";
import { Link } from "react-router-dom";

const MenuItem = ({
	to,
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
		<Link
			to={to}
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
		</Link>
	);
};

export default MenuItem;
