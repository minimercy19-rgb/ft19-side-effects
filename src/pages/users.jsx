import { useState, useEffect } from 'react';
import { BASE_URL } from '../lib/utils';
import UserForm from '../components/user/user-form';
import UserCard from '../components/user/user-card';

export default function Users() {
	const [users, setUsers] = useState([]);

	function fetchAllUsers() {
		fetch(`${BASE_URL}/users`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Fetching users failed');
				}

				return response.json();
			})
			.then((data) => setUsers(data))
			.catch((error) => console.error(error));
	}

	useEffect(() => {
		fetchAllUsers();
	}, []);

	return (
		<div>
			<div className="grid grid-cols-5 gap-5">
				<div className="col-span-2">
					<UserForm onUserAdded={fetchAllUsers} />
				</div>
				<div className="col-span-3 flex flex-col gap-5">
					<div className="grid grid-cols-3 gap-5">
						{users.map((user) => (
							<UserCard key={user.id} {...user} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
