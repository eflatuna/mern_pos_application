import { Button, Carousel, Form, Input } from "antd";
import { Link } from "react-router-dom";
const Register = () => {
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
						<div className="w-full">
							<Carousel className="!h-full">
								<div className="!flex flex-col items-center justify-center h-full mb-10 ">
									<img
										src="/images/responsive.svg"
										alt="responsive"
										className="w-[600px] h-[500px]"
									/>
									<h3 className="text-4xl text-center font-bold text-white">
										Responsive
									</h3>
									<p className="mt-5 text-xl text-center text-white">
										Compatible with all device sizes{" "}
									</p>
								</div>
								<div className="!flex flex-col items-center justify-center h-full mb-10">
									<img
										src="/images/responsive.svg"
										alt="responsive"
										className="w-[600px] h-[500px]"
									/>
									<h3 className="text-4xl text-center font-bold text-white">
										Responsive
									</h3>
									<p className="mt-5 text-xl text-center text-white">
										Compatible with all device sizes{" "}
									</p>
								</div>
								<div className="!flex flex-col items-center justify-center h-full mb-10">
									<img
										src="/images/responsive.svg"
										alt="responsive"
										className="w-[600px] h-[500px]"
									/>
									<h3 className="text-4xl text-center font-bold text-white">
										Responsive
									</h3>
									<p className="mt-5 text-xl text-center text-white">
										Compatible with all device sizes{" "}
									</p>
								</div>
								<div className="!flex flex-col items-center justify-center h-full mb-10">
									<img
										src="/images/responsive.svg"
										alt="responsive"
										className="w-[600px] h-[500px]"
									/>
									<h3 className="text-4xl text-center font-bold text-white">
										Responsive
									</h3>
									<p className="mt-5 text-xl text-center text-white">
										Compatible with all device sizes{" "}
									</p>
								</div>
								<div className="!flex flex-col items-center justify-center h-full mb-10">
									<img
										src="/images/responsive.svg"
										alt="responsive"
										className="w-[600px] h-[500px]"
									/>
									<h3 className="text-4xl text-center font-bold text-white">
										Responsive
									</h3>
									<p className="mt-5 text-xl text-center text-white">
										Compatible with all device sizes{" "}
									</p>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
