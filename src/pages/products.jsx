import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card';
import { STORE_BASE_URL } from '../lib/utils';

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		fetch(`${STORE_BASE_URL}/products`, {
			signal: controller.signal,
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Fetching Failed');
				}

				return res.json();
			})
			.then((data) => setProducts(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="min-h-screen p-5 flex flex-col gap-5">
			<h1 className="text-4xl font-barlow font-bold">All Products</h1>

			<div className="grid grid-cols-4 gap-5">
				{products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
}
