import { Outlet } from 'react-router-dom';
import Footer from '../layouts/footer';
import Navbar from '../layouts/navbar';

export default function MainLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			<div className="flex-1 p-5 flex flex-col">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
}
