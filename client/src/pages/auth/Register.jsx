import { Form, Input } from "antd";
const Register = () => {
	return (
		<div className="h-screen">
			<div className="flex justify-between h-full">
				<div className="left">
					<div className="px-10 xl:px-20 flex flex-col h-full justify-center">
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
						</Form>
					</div>
				</div>
				<div className="right"></div>
			</div>
		</div>
	);
};

export default Register;
