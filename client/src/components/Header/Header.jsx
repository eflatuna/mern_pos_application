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
const Header = () => {
	return (
		<div className="border-b mb-6">
			<header className="py-4 px-6 flex justify-between items-center gap-10">
				<div className="logo">
					<a href="/">
						<h2
							className="text-2xl font-bold
            md:text-4xl"
						>
							LOGO
						</h2>
					</a>
				</div>
				<div className="header-search flex-1 ">
					<Input
						size="large"
						placeholder="Search products..."
						prefix={<SearchOutlined />}
						className="rounded-full max-w-[800px]"
					/>
				</div>
				<div className="menu-links flex justify-between items-center gap-8">
					<a href="/" className="flex flex-col items-center">
						<HomeOutlined className="md:text-2xl text-xl " />
						<span className="md:text-[10px] text-xs">Home</span>
					</a>
					<a href="/" className="flex flex-col items-center">
						<ShoppingCartOutlined className="md:text-2xl text-xl " />
						<span className="md:text-[10px] text-xs">
							Shopping Cart
						</span>
					</a>
					<a href="/" className="flex flex-col items-center">
						<CopyOutlined className="md:text-2xl text-xl " />
						<span className="md:text-[10px] text-xs">Invoices</span>
					</a>
					<a href="/" className="flex flex-col items-center">
						<UserOutlined className="md:text-2xl text-xl " />
						<span className="md:text-[10px] text-xs">
							Customers
						</span>
					</a>
					<a href="/" className="flex flex-col items-center">
						<BarChartOutlined className="md:text-2xl text-xl " />
						<span className="md:text-[10px] text-xs">
							Analytics
						</span>
					</a>
					<a href="/" className="flex flex-col items-center">
						<LogoutOutlined className="md:text-2xl text-xl " />
						<span className="md:text-[10px] text-xs">Logout</span>
					</a>
				</div>
			</header>
		</div>
	);
};

export default Header;
