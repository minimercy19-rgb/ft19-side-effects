import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Users from './pages/users';
import MainLayout from './pages/main-layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* nested routes */}
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="users" element={<Users />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
