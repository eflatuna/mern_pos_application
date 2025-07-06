import { Input, message } from "antd";
import {
	BarChartOutlined,
	CopyOutlined,
	HomeOutlined,
	LogoutOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	UserOutlined,
} from "@ant-design/icons";
import MenuItem from "./MenuItem.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";

const Header = () => {
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	const logOut = () => {
		if (window.confirm("Are you sure you want to log out?")) {
			localStorage.removeItem("posUser");
			navigate("/login");
			messageApi.success("Logout successful");
		}
	};
	return (
		<>
			{contextHolder}
			<div className="border-b mb-6">
				<header className="py-4 px-6 flex justify-between items-center gap-10">
					<div className="logo">
						<Link to="/">
							<h2
								className="text-2xl font-bold
            md:text-4xl"
							>
								LOGO
							</h2>
						</Link>
					</div>
					<div className="header-search flex-1 flex justify-center">
						<Input
							size="large"
							placeholder="Search products..."
							prefix={<SearchOutlined />}
							className="rounded-full w-full min-w-[150px] md:max-w-[800px]"
						/>
					</div>
					<div className="menu-links">
						<MenuItem
							to="/"
							icon={
								<HomeOutlined className="md:text-2xl text-xl" />
							}
							label="Home"
						/>
						<MenuItem
							to="/cart"
							icon={
								<ShoppingCartOutlined className="md:text-2xl text-xl" />
							}
							label="Cart"
							count={5}
							showOnMobile={false}
							showOnDesktop={true}
						/>
						<MenuItem
							to="/invoices"
							icon={
								<CopyOutlined className="md:text-2xl text-xl" />
							}
							label="Invoices"
						/>
						<MenuItem
							to="/customers"
							icon={
								<UserOutlined className="md:text-2xl text-xl" />
							}
							label="Customers"
						/>
						<MenuItem
							to="/analytics"
							icon={
								<BarChartOutlined className="md:text-2xl text-xl" />
							}
							label="Analytics"
						/>
						<div onClick={logOut}>
							<MenuItem
								icon={
									<LogoutOutlined className="md:text-2xl text-xl" />
								}
								label="Logout"
							/>
						</div>
					</div>
					<MenuItem
						to="/cart"
						icon={<ShoppingCartOutlined className=" text-xl" />}
						label="Cart"
						count={5}
						showOnMobile={true}
						showOnDesktop={false}
					/>
				</header>
			</div>
		</>
	);
};

export default Header;
