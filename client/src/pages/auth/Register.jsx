import { Form, Input } from "antd";
const Register = () => {
	return (
		<div className="h-screen">
			<div className="flex justify-between h-full">
				<div className="left">
					<div className="flex flex-col h-full justify-center">
						<h1 className="text-center text-5xl font-bold mb-2">
							LOGO
						</h1>
						<Form>
							<Form.Item>
								<Input />
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
