import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/invoices" element={<InvoicePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
