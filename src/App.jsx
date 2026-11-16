import { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
import RandomProduct from './components/random-product';  

const BASE_URL = 'https://fakestoreapi.com';

function App() {
	// fetch data using useEffect hook

	const [products, setProducts] = useState([]);

	useEffect(() => {
		// fetch from https://fakestoreapi.com/products
		// default behaviour of fetch is GET

		fetch(`${BASE_URL}/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			 
	}, []);

	return (
		<div className="min-h-screen p-5">
			<h1 className="text-3xl font-bold mb-6">All Products</h1>
			<div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
				{products.map((product) => (
					<ProductCard {...product} key={product.id} />
				))}
			</div>
			<RandomProduct /> 
		</div>
	);
}

export default App;
