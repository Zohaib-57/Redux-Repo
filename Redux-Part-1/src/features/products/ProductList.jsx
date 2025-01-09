import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import { addToCart } from "../cart/cartSlice"; // Relative path

const ProductList = () => {
	const dispatch = useDispatch();
	const { items, status } = useSelector((state) => state.products);
	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (status === "loading") return <p>Loading...</p>;
	if (status === "failed") return <p>Failed to load products.</p>;

	return (
		<div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{items.map((product) => (
				<div
					key={product.id}
					className="border rounded-lg shadow-lg overflow-hidden"
				>
					<img
						src={product.image}
						alt={product.title}
						className="w-full h-48 object-cover"
					/>
					<div className="p-4">
						<h2 className="text-lg font-semibold">{product.title}</h2>
						<p className="text-gray-600">
							{product.description.substring(0, 100)}...
						</p>
						<button
							className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
							onClick={() => handleAddToCart(product)}
						>
							Add to Cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList;
