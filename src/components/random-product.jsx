import { useEffect, useState } from "react";
import ProductCard from "./product-card";

export default function RandomProduct() {
	const [productId, setProductId] = useState(1);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [productId]);

	function randomize() {
		const randomId = Math.floor(Math.random() * 20) + 1;
		setProductId(randomId);
	}

	return (
		<div className="p-5 flex flex-col items-center gap-6">
			 
			<p className="text-xl font-bold">
				Current Product ID: <span className="text-green-600">{productId}</span>
			</p>

			<button
				onClick={randomize}
				className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
			>
				Show Random Product
			</button>

			{product && (
				<div className="max-w-sm w-full">
					<ProductCard {...product} />
				</div>
			)}
		</div>
	);
}
