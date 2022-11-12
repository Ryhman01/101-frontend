import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from '../assets/avatar.jpg';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';

const DetailUser = ({userId}) => {

    const location = useLocation();
    const [name, setName] = useState(location.state?.fullName);
    const [username, setUsername] = useState(location.state?.username);
    const [email, setEmail] = useState(location.state?.email);
    const [role, setRole] = useState(location.state?.role);
    const [address, setAddress] = useState(location.state?.address);

    const updateUser = async(e) => {
        e.preventDefault();
        try {
            if(confirm("You want to update this user?") == true){
                await axios.put(`http://localhost:5000/users/${location.state?.id}`, {
                    name: name,
					username: username,
					email: email,
                    role: role,
					address: address,
                });
                alert('This user has updated.')
            }
        } catch (error) {
            console.log(error);
        }
    }

	return (
		<main className='my-2 h-screen'>
			<div className='w-full h-60 bg-blue-600 pt-14 px-5 flex justify-between'>
				<h1 className='text-md font-medium text-2xl text-white'>Detail User Page</h1>
				<div className='tooltip tooltip-left w-fit h-fit' data-tip='edit profile'>
					<label htmlFor='edit-profile'>
						<BiEdit size={30} className='text-white cursor-pointer' />
					</label>
				</div>
			</div>
			<div className='text-center mt-16'>
				<h1 className='text-2xl font-medium'>{name}</h1>
				<p className='italic'>{username}</p>
			</div>

			<div className='ml-32 mt-10'>
				<div className='flex mb-2'>
					<p className='italic font-regular w-48 text-xl'>Full Name</p>
					<p className='mx-2 text-xl'>:</p>
					<p className='font-medium text-xl'>{name}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-xl'>Username</p>
					<p className='mx-2 text-xl'>:</p>
					<p className='font-medium text-xl'>{username}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-xl'>Email</p>
					<p className='mx-2 text-xl'>:</p>
					<p className='font-medium text-xl'>{email}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-xl'>Role</p>
					<p className='mx-2 text-xl'>:</p>
					<p className='font-medium text-xl'>{role}</p>
				</div>
				<div className='flex'>
					<p className='italic font-regular w-48 text-xl'>Address</p>
					<p className='mx-2 text-xl'>:</p>
					<p className='font-medium text-xl'>{address}</p>
				</div>
			</div>

			<div className='absolute top-[170px] flex justify-center w-full'>
				<div className='p-2 w-fit h-fit rounded-full bg-white '>
					<img src={Avatar} alt='avatar' className='w-32 h-32 object-cover rounded-full' />
				</div>
			</div>

			<input type='checkbox' id='edit-profile' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label htmlFor='edit-profile' className='btn btn-sm btn-circle absolute right-2 top-2'>
						X
					</label>
					<h1 className='text-lg font-bold'>Edit Profile</h1>
					<form onSubmit={updateUser}>
						<div className='py-4'>
							<p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure rerum ipsa. Quasi ipsam labore, quibusdam cumque cupiditate dolores esse?</p>
							<div className='mt-5'>
								<div className='my-2'>
									<label htmlFor='new-fullname' className='text-sm font-medium text-gray-700'>
										Full Name
									</label>
									<input onChange={e => setName(e.target.value)} value={name} type='text' name='new-fullname' id='new-fullname' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-username' className='text-sm font-medium text-gray-700'>
										Username
									</label>
									<input onChange={e => setUsername(e.target.value)} value={username} disabled type='text' name='new-username' id='new-username' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-email' className='text-sm font-medium text-gray-700'>
										Email
									</label>
									<input onChange={e => setEmail(e.target.value)} value={email} type='email' name='new-email' id='new-email' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-address' className='text-sm font-medium text-gray-700'>
										Address
									</label>
									<input onChange={e => setAddress(e.target.value)} value={address} type='text' name='new-address' id='new-address' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='my-2'>
									<label htmlFor='new-role' className='text-sm font-medium text-gray-700'>
										Role
									</label>
									<select name='new-role' id='new-role' disabled className='block select select-bordered outline-none w-full'>
										<option value=''>Admin</option>
										<option value=''>Project Manager</option>
										<option value=''>Marketing Manager</option>
									</select>
								</div>

								<div className='flex justify-center items-center gap-5 mt-5'>
									<button type='submit' className='px-5 py-2 bg-blue-500 rounded-lg text-white font-medium text-sm'>
										Add User
									</button>
									<label htmlFor='edit-profile' className='cursor-pointer px-5 py-2 bg-gray-500 rounded-lg text-white font-medium text-sm'>
										Cancel
									</label>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default DetailUser;
