import { Calendar, Mail, Phone } from 'lucide-react';

export default function UserCard({ onEdit, onDelete, ...user }) {
	const { id, firstName, lastName, email, phone, dob } = user;
	return (
		<div className="rounded-2xl border  shadow-lg overflow-clip shadow-slate-200  border-gray-800/10">
			<div className="pl-5 pr-3 py-5">
				<div className="overflow-hidden rounded-xl size-12">
					<img
						src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random`}
						alt="Name avatar"
					/>
				</div>

				<div className="flex flex-col gap-2 font-sans mt-4">
					<h2 className="text-xl font-sans tracking-tight font-bold">{`${firstName} ${lastName}`}</h2>

					<div className="flex items-center gap-2">
						<Mail className="size-4 text-gray-500" />
						<p className="text-gray-500 text-xs">{email}</p>
					</div>
					<div className="flex items-center gap-2">
						<Phone className="size-4 text-gray-500" />
						<p className="text-gray-500 text-xs">{phone}</p>
					</div>
					<div className="flex items-center gap-2">
						<Calendar className="size-4 text-gray-500" />
						<p className="text-gray-500 text-xs">{dob}</p>
					</div>
				</div>
			</div>
			<div className=" bg-gray-100 border-gray-300 px-5 py-3">
				<div className="flex items-center gap-2 justify-end">
					<button
						className="text-xs bg-white px-3 py-1 rounded-md text-amber-500 font-medium border border-gray-200 font-sans cursor-pointer"
						onClick={() => onEdit(user)}
					>
						Edit
					</button>
					<button
						className="text-xs bg-white px-3 py-1 rounded-md text-red-500 font-medium border border-gray-200 font-sans cursor-pointer"
						onClick={() => onDelete(id)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
