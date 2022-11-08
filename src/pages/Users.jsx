import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import TableClient from '../components/TableCllient';
import TableUser from '../components/TableUser';

const Users = () => {
    // // set data
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [role, setRole] = useState('Admin');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const [addrType, setAddrType] = useState(['Admin', 'Project Manager', 'Marketing Manager']);
    const Add = addrType.map((Add) => Add);
    const selectHandler = (e) => {
        setRole(addrType[e.target.value]);
    };

    const navigate = useNavigate();


    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', {
                name: name,
                email: email,
                username: username,
                password: password,
                confPassword: confPassword,
                role: role,
                address: address,
            });
            alert('Add User Success.');

            setName('');
            setEmail('');
            setUsername('');
            setPassword('');
            setConfPassword('');
            setRole('Admin');
            setAddress('');
            setMessage('');
            
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    };

    useEffect(()=>{
        if(!localStorage.getItem('refreshToken')){
            navigate('/');
        }
    },[])

    return (
        <main className='my-2 mt-20 mx-5'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-medium'>Users Page</h1>
                <CiSettings size={28} color={'blue'} className='animate-spin cursor-pointer' />
            </div>
            <p className='mt-5 text-gray-400 text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias voluptas explicabo nisi reprehenderit. Commodi voluptate
                ducimus mollitia nemo hic!
            </p>
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
                <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                    <div className='md:col-start-1 md:col-end-4'>
                        <TableUser />
                    </div>
                    <div className='md:col-start-4 md:col-end-6'>
                        <TableClient />
                    </div>
                </div>
            </div>
            <input type='checkbox' id='add-new-user' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <label htmlFor='add-new-user' className='btn btn-sm btn-circle absolute right-2 top-2'>
                        X
                    </label>
                    <h1 className='text-lg font-bold'>Add New User</h1>
                    <form onSubmit={Register}>
                        {message.length ? (
                            <div className='alert alert-warning shadow-lg mt-3'>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='stroke-current flex-shrink-0 h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                                        />
                                    </svg>
                                    <span>{message}</span>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                        <div className='py-4'>
                            <p className='text-sm text-gray-400'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure rerum ipsa. Quasi ipsam labore, quibusdam cumque
                                cupiditate dolores esse?
                            </p>
                            <div className='mt-5'>
                                <div className='my-2'>
                                    <label htmlFor='new-username' className='text-sm font-medium text-gray-700'>
                                        Username
                                    </label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
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
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        name='new-fullname'
                                        id='new-fullname'
                                        placeholder='Type here . . .'
                                        className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500'
                                    />
                                </div>

                                <div className='my-2'>
                                    <label htmlFor='new-email' className='text-sm font-medium text-gray-700'>
                                        Email
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='new-email'
                                        id='new-email'
                                        placeholder='Type here . . .'
                                        className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500'
                                    />
                                </div>

                                <div className='my-2'>
                                    <label htmlFor='new-password' className='text-sm font-medium text-gray-700'>
                                        Password
                                    </label>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                        value={confPassword}
                                        onChange={(e) => setConfPassword(e.target.value)}
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
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        type='text'
                                        name='new-address'
                                        id='new-address'
                                        placeholder='Type here . . .'
                                        className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500'
                                    />
                                </div>

                                <div className='my-2'>
                                    <label htmlFor='new-role' className='text-sm font-medium text-gray-700'>
                                        Role
                                    </label>
                                    <select
                                        name='new-role'
                                        id='new-role'
                                        className='block select select-bordered outline-none w-full'
                                        onChange={(e) => selectHandler(e)}>
                                        {Add.map((address, key) => (
                                            <option key={key} value={address}>
                                                {address}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex justify-center items-center gap-5 mt-5'>
                                    <button type='submit' className='px-5 py-2 bg-blue-500 rounded-lg text-white font-medium text-sm'>
                                        Add User
                                    </button>
                                    <button type='reset' className='px-5 py-2 bg-gray-500 rounded-lg text-white font-medium text-sm'>
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
