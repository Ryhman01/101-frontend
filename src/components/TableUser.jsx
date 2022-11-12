import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TableUser = () => {
	const [users, setUsers] = useState([]);

	const axiosJWT = axios.create();
	axiosJWT.interceptors.request.use(
		async (config) => {
			const response = await axios.post('http://localhost:5000/token', { refreshToken: localStorage.getItem('refreshToken') });
			config.headers.Authorization = `Bearer ${response.data.accessToken}`;

			return config;
		},
		(error) => Promise.reject(error)
	);

	const getUsers = async () => {
		try {
			const response = await axiosJWT.get('http://localhost:5000/users');
			setUsers(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className='w-full mt-10 mb-10 rounded-2xl bg-white px-7 pb-7 relative z-0 shadow-md'>
			<div className='bg-blue-600 rounded-2xl px-5 py-3 flex items-center justify-between relative -top-6 shadow-sm'>
				<h1 className='text-white text-xl font-medium'>User List</h1>
			</div>
			<div className='overflow-x-auto'>
				<table className='items-center w-full border-collapse'>
					<thead>
						<tr>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>No.</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>User ID</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Username</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Full Name</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Role</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Address</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user.id}>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{index + 1}.</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>UID-{user.id}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{user.username}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{user.name}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{user.role}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{user.address}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1'>
									<Link to={'/detail-user'} state={{ 
										id: user.id,
										fullName: user.name,
										username: user.username,
										email: user.email,
										role: user.role,
										address: user.address
									 }} className='px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm'>
										Detail
									</Link>
									<button
										onClick={async () => {
											try {
												if (confirm('You want delete this user?') == true) {
													await axios.delete(`http://localhost:5000/users/${user.id}`);
													alert('User has deleted.');
													window.location.reload(false);
												}
											} catch (error) {
												console.log(error);
											}
										}}
										className='px-3 py-1 rounded-full text-white font-medium block bg-red-500 text-sm'>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableUser;
