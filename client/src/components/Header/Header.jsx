import { Input } from "antd";
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
import { Link } from "react-router-dom";

const Header = () => {
	return (
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
				<div className="menu-links flex justify-between items-center gap-7 fixed z-50 bottom-0 left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:border-t-0 border-t md:px-0 px-4 py-1">
					<MenuItem
						to="/home"
						icon={<HomeOutlined className="md:text-2xl text-xl" />}
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
						icon={<CopyOutlined className="md:text-2xl text-xl" />}
						label="Invoices"
					/>
					<MenuItem
						to="/customers"
						icon={<UserOutlined className="md:text-2xl text-xl" />}
						label="Customers"
					/>
					<MenuItem
						to="/analytics"
						icon={
							<BarChartOutlined className="md:text-2xl text-xl" />
						}
						label="Analytics"
					/>
					<MenuItem
						to="/logout"
						icon={
							<LogoutOutlined className="md:text-2xl text-xl" />
						}
						label="Logout"
					/>
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
	);
};

export default Header;
