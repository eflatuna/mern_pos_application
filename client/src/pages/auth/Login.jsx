import { Button, Carousel, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
const Login = () => {
	const slides = [
		{
			img: "images/responsive.svg",
			title: "Fully Responsive Design",
			desc: "Looks perfect on desktops, tablets, and mobile devices.",
		},
		{
			img: "images/analytic.svg",
			title: "Data-Driven Insights",
			desc: "Track performance and make better decisions with advanced analytics.",
		},
		{
			img: "images/customerSatisfaction.svg",
			title: "Customer Satisfaction",
			desc: "We prioritize user experience to keep our customers happy.",
		},
		{
			img: "images/adminPanel.svg",
			title: "Powerful Admin Panel",
			desc: "Manage your platform easily with a clean and intuitive dashboard.",
		},
		{
			img: "images/customer.svg",
			title: "Dedicated Support Team",
			desc: "Get help anytime from our 24/7 customer support experts.",
		},
	];

	return (
		<div className="h-screen">
			<div className="flex justify-between h-full">
				<div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
					<h1 className="text-center text-5xl font-bold mb-2">
						LOGO
					</h1>
					<Form layout="vertical">
						<Form.Item
							label="Username"
							name={"username"}
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Email"
							name={"email"}
							rules={[
								{
									required: true,
									message: "Please input your Email!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Password"
							name={"password"}
							rules={[
								{
									required: true,
									message: "Please input your Password!",
								},
							]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="Confirm Password"
							name={"confirmPassword"}
							rules={[
								{
									required: true,
									message:
										"Please re-enter your password to confirm!",
								},
							]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="w-full"
								size="large"
							>
								Create an account
							</Button>
						</Form.Item>
					</Form>
					<div className="flex justify-center absolute left-0 bottom-10 w-full">
						Already have an account?&nbsp;
						<Link to="/login" className="text-[#40a9ff]">
							Login
						</Link>
					</div>
				</div>
				<div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden  bg-[#6c63ff]">
					<div className="w-full h-full flex items-center">
						<div className="w-full ">
							<Carousel className="!h-full px-6" autoplay>
								{slides.map((slide, index) => {
									return (
										<AuthCarousel
											key={index}
											img={slide.img}
											title={slide.title}
											desc={slide.desc}
										/>
									);
								})}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
