import { Target } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Products',
		path: '/products',
	},
	{
		title: 'Users',
		path: '/users',
	},
];

export default function Navbar() {
	return (
		<header className="w-full flex items-center justify-center  top-0 sticky h-fit  py-2 z-10">
			<div className="flex items-center justify-between min-w-xl border border-black/8 px-5 py-4 rounded-xl bg-white shadow-lg shadow-gray-800/5">
				<Link to={'/'}>
					<Target className="text-blue-500" />
				</Link>
				<nav className="flex gap-3 items-center ">
					{navLinks.map((navlink) => (
						<NavLink
							to={navlink.path}
							key={navlink.path}
							className={({ isActive }) =>
								isActive
									? 'bg-blue-100 text-blue-500 px-2 py-1 font-medium rounded-lg'
									: 'text-gray-500 px-2 py-1 font-medium'
							}
						>
							{navlink.title}
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
}
