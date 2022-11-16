import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import TableClient from '../components/TableCllient';
import TableUser from '../components/TableUser';

const Users = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');
	const [role, setRole] = useState('');
	const [address, setAddress] = useState('');

	const newUser = async (e) => {
		e.preventDefault();
		try {
			if (confirm('You want to add new User?') == true) {
				await axios.post('http://localhost:5000/users', {
					name: name,
					username: username,
					email: email,
					password: password,
					confPassword: confPassword,
					role: role,
					address: address,
				});

				setName('');
				setUsername('');
				setEmail('');
				setPassword('');
				setConfPassword('');
				setAddress('');
				window.location.reload(false);
				alert('Add new user success!');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('refreshToken')) {
			navigate('/');
		}
		console.log(role);
	});

	return (
		<main className='my-2 mt-20 mx-5'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-medium'>Users Page</h1>
				<CiSettings size={28} color={'blue'} className='animate-spin cursor-pointer' />
			</div>
			<p className='mt-5 text-gray-400 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias voluptas explicabo nisi reprehenderit. Commodi voluptate ducimus mollitia nemo hic!</p>
			<div className='mt-10'>
				<div className=''>
					<label htmlFor='add-new-user' className='cursor-pointer px-5 py-2 mx-1 rounded-lg bg-blue-500 text-white font-medium'>
						Add New User
					</label>
					<label htmlFor='add-new-role' className='cursor-pointer px-5 py-2 mx-1 rounded-lg bg-green-500 text-white font-medium'>
						Add New Role
					</label>
				</div>
				<div className='flex items-center gap-3 w-full border rounded-full py-2 px-3 text-gray-500 mt-5'>
					<BsSearch size={20} />
					<input type='text' placeholder='Search...' className='w-full h-full outline-none font-light' />
				</div>
				<div className='grid grid-cols-1'>
					<TableUser />
				</div>
			</div>
			<input type='checkbox' id='add-new-user' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label htmlFor='add-new-user' className='btn btn-sm btn-circle absolute right-2 top-2'>
						X
					</label>
					<h1 className='text-lg font-bold'>Add New User</h1>
					<form onSubmit={newUser}>
						<div className='py-4'>
							<p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure rerum ipsa. Quasi ipsam labore, quibusdam cumque cupiditate dolores esse?</p>
							<div className='mt-5'>
								<div className='my-2'>
									<label htmlFor='new-username' className='text-sm font-medium text-gray-700'>
										Username
									</label>
									<input
										onChange={(e) => setUsername(e.target.value)}
										value={username}
										type='text'
										name='new-username'
										id='new-username'
										placeholder='Type here . . .'
										className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500'
									/>
								</div>

								<div className='my-2'>
									<label htmlFor='new-fullname' className='text-sm font-medium text-gray-700'>
										Full Name
									</label>
									<input onChange={(e) => setName(e.target.value)} value={name} type='text' name='new-fullname' id='new-fullname' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-email' className='text-sm font-medium text-gray-700'>
										Email
									</label>
									<input onChange={(e) => setEmail(e.target.value)} value={email} type='email' name='new-email' id='new-email' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-password' className='text-sm font-medium text-gray-700'>
										Password
									</label>
									<input
										onChange={(e) => setPassword(e.target.value)}
										value={password}
										type='password'
										name='new-password'
										id='new-password'
										placeholder='Type here . . .'
										className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500'
									/>
								</div>

								<div className='my-2'>
									<label htmlFor='new-confpassword' className='text-sm font-medium text-gray-700'>
										Confirm Password
									</label>
									<input
										onChange={(e) => setConfPassword(e.target.value)}
										value={confPassword}
										type='password'
										name='new-confpassword'
										id='new-confpassword'
										placeholder='Type here . . .'
										className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500'
									/>
								</div>

								<div className='my-2'>
									<label htmlFor='new-address' className='text-sm font-medium text-gray-700'>
										Address
									</label>
									<input onChange={(e) => setAddress(e.target.value)} value={address} type='text' name='new-address' id='new-address' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-role' className='text-sm font-medium text-gray-700'>
										Role
									</label>
									<select onChange={e => setRole(e.target.value)} name='new-role' id='new-role' className='block select select-bordered outline-none w-full'>
										<option selected disabled defaultValue='None'>Choose role</option>
										<option value='Admin'>Admin</option>
										<option value='Project Manager'>Project Manager</option>
										<option value='Marketing Manager'>Marketing Manager</option>
									</select>
								</div>

								<div className='flex justify-center items-center gap-5 mt-5'>
									<button type='submit' className='px-5 py-2 bg-blue-500 rounded-lg text-white font-medium text-sm'>
										Add User
									</button>
									<button
										onClick={() => {
											setName('');
											setUsername('');
											setEmail('');
											setPassword('');
											setConfPassword('');
											setAddress('');
										}}
										type='reset'
										className='px-5 py-2 bg-gray-500 rounded-lg text-white font-medium text-sm'>
										Reset Data
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Users;
