import React from "react";
import ProductList from "./features/products/ProductList";
import CartComponent from "./features/cart/CartComponent";
import "./index.css";

const App = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<h1 className="text-4xl text-center font-bold p-6 bg-blue-500 text-white">
				My E-Commerce Store
			</h1>
			<CartComponent />
			<ProductList />
		</div>
	);
};

export default App;
