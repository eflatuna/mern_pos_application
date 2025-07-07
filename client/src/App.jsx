import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";
import CustomerPage from "./pages/CustomerPage";
import AnalyticPage from "./pages/AnalyticPage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// ProtectedRoute artık children yerine Outlet kullanıyor
const PrivateRoute = () => {
	const isAuth = Boolean(localStorage.getItem("posUser"));
	return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/invoices" element={<InvoicePage />} />
					<Route path="/customers" element={<CustomerPage />} />
					<Route path="/analytics" element={<AnalyticPage />} />
					<Route path="/products" element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
