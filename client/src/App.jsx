import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";
import CustomerPage from "./pages/CustomerPage";
import AnalyticPage from "./pages/AnalyticPage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<RouteController>
							<HomePage />
						</RouteController>
					}
				/>
				<Route path="/cart" element={<CartPage />} />
				<Route path="/invoices" element={<InvoicePage />} />
				<Route path="/customers" element={<CustomerPage />} />
				<Route path="/analytics" element={<AnalyticPage />} />
				<Route path="/products" element={<ProductPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

export const RouteController = ({ children }) => {
	if (localStorage.getItem("posUser")) {
		return children;
	} else {
		return <Navigate to="/login" />;
	}
};
