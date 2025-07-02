import { Badge } from "antd";
import { Link } from "react-router-dom";
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

	return (
		<Link
			to={to}
			className={`menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-[2px] items-center ${responsiveClass}`}
		>
			{count ? (
				<Badge count={cart.cartItems.length} offset={[0, -4]}>
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
