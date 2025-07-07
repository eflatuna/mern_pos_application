import { Badge } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
	const cart = useSelector((state) => state.cart);
	const { pathname } = useLocation();
	const isActive = pathname === to;

	return (
		<Link
			to={to}
			className={`
    menu-link flex flex-col transition-all gap-y-[2px] items-center ${responsiveClass}
    ${isActive ? "text-[#40a9ff]" : "hover:text-[#40a9ff] text-gray-600"}
  `}
		>
			{count > 0 ? (
				<Badge
					count={cart.cartItems.length}
					offset={[0, -4]}
					className={
						isActive
							? "text-[#40a9ff]"
							: "text-gray-600 group-hover:text-[#40a9ff]"
					}
				>
					{icon}
				</Badge>
			) : (
				<span
					className={
						isActive
							? "text-[#40a9ff]"
							: "text-gray-600 hover:text-[#40a9ff]"
					}
				>
					{icon}
				</span>
			)}
			<span
				className={`md:text-xs text-[10px] ${
					isActive
						? "text-[#40a9ff]"
						: "text-gray-600 hover:text-[#40a9ff]"
				}`}
			>
				{label}
			</span>
		</Link>
	);
};

export default MenuItem;
