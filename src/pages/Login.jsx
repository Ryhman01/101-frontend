import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../assets/login-image.png';
import ImageReact from '../assets/reactjs.png';
import ImageTailwind from '../assets/tailwindcss.png';

const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const Login = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/login',{
				username: username,
				password: password
			});
			localStorage.setItem('refreshToken', response.data.refreshToken);
			navigate('/dashboard');
		} catch (error) {
			if(error.response) setMessage(error.response)
		}
	}

	return (
		<section className='flex items-center justify-center'>
			<div className='absolute w-full h-full z-10 md:static md:w-1/2 backdrop-blur-sm bg-white/20 flex justify-center items-center px-16 sm:px-36 md:px-16 lg:px-32'>
				<div className='bg-white rounded-2xl p-5 w-full'>
					<h1 className='text-3xl font-semibold'>Login</h1>
					<p className='font-medium text-blue-500'>Lorem ipsum dolor sit amet.</p>
					<form onSubmit={Login} className='mt-10 flex flex-col gap-y-5'>
						
						<div className='flex flex-col'>
							<label htmlFor=''>Username</label>
							<input onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder='Type here . . .' className='w-full py-2 px-4 border border-blue-500 text-sm rounded-full outline-none' />
						</div>
						<div className='flex flex-col'>
							<label htmlFor=''>Password</label>
							<input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Type here . . .' className='w-full py-2 px-4 border border-blue-500 text-sm rounded-full outline-none' />
						</div>
						<button type='submit' className='w-full py-2 bg-blue-500 text-white font-medium rounded-full'>
							Login
						</button>
						<Link to={'/forgotpassword'}>
							<p className='text-center font-medium text-blue-500'>Forgot password?</p>
						</Link>
					</form>
				</div>
			</div>
			<div className='w-full md:w-1/2 h-screen bg-blue-500 flex justify-center items-center py-10'>
				<div className='backdrop-blur-sm bg-white/30 shadow-sm text-white rounded-2xl relative flex flex-col h-full w-2/3'>
					<p className='text-2xl font-semibold mt-16 mx-10'>Very good works are working for you.</p>
					<p className='text-2xl font-semibold mx-10'>Login Now</p>
					<img src={Image} alt='image' className='h-full w-auto object-cover self-center' />
					<div className='w-16 h-16 p-3 rounded-full bg-white absolute top-52 -right-7 shadow-sm'>
						<img src={ImageReact} alt='react' />
					</div>
					<div className='w-16 h-16 p-3 rounded-full bg-white absolute bottom-24 -left-7 shadow-sm'>
						<img src={ImageTailwind} alt='tailwind' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
