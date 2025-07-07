import { createSlice } from "@reduxjs/toolkit";

let saved = {};
try {
	saved = JSON.parse(localStorage.getItem("cart")) || {};
} catch {
	saved = {};
}

const initialState = {
	cartItems: Array.isArray(saved.cartItems) ? saved.cartItems : [],
	total: typeof saved.total === "number" ? saved.total : 0,
	tax: 8,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const findCartItem = state.cartItems.find(
				(item) => item._id === action.payload._id
			);
			if (findCartItem) {
				findCartItem.quantity = findCartItem.quantity + 1;
			} else {
				state.cartItems.push(action.payload);
			}
			state.total += action.payload.price;
		},
		deleteCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item._id !== action.payload._id
			);
			state.total -= action.payload.price * action.payload.quantity;
		},
		incrementQuantity: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item._id === action.payload._id
			);
			cartItem.quantity += 1;
			state.total += action.payload.price;
		},
		decrementQuantity: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item._id === action.payload._id
			);
			cartItem.quantity -= 1;
			if (cartItem.quantity === 0) {
				state.cartItems = state.cartItems.filter(
					(item) => item._id !== action.payload._id
				);
			}
			state.total -= action.payload.price;
		},
		reset: (state) => {
			state.cartItems = [];
			state.total = 0;
		},
	},
});
export const {
	addProduct,
	deleteCart,
	incrementQuantity,
	decrementQuantity,
	reset,
} = cartSlice.actions;

export default cartSlice.reducer;
