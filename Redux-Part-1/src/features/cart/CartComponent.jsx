import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const CartComponent = () => {
	const cart = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	return (
		<div className="p-8 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Your Cart</h1>
			{cart.length === 0 ? (
				<p className="text-center text-gray-500 border border-black p-2">
					Your Cart is empty.
				</p>
			) : (
				<ul className="space-y-4">
					{cart.map((item) => (
						<li
							key={item.id}
							className="flex justify-between items-center p-4 border rounded-lg shadow"
						>
							<span className="text-lg font-medium">{item.title}</span>
							<button
								className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
								onClick={() => dispatch(removeFromCart(item))}
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CartComponent;
