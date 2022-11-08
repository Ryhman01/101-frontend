import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/forgotimage.png';
import ImageReact from '../assets/reactjs.png';
import ImageTailwind from '../assets/tailwindcss.png';

const ForgotPassword = () => {
	return (
		<section className='flex items-center justify-center'>
			<div className='absolute w-full h-full z-10 md:static md:w-1/2 backdrop-blur-sm bg-white/20 flex justify-center items-center px-16 sm:px-36 md:px-16 lg:px-32'>
				<div className='bg-white rounded-2xl p-5 w-full'>
					<h1 className='text-3xl font-semibold'>Forgot Password</h1>
					<p className='font-medium text-blue-500'>Lorem ipsum dolor sit amet.</p>
					<form action='' className='mt-10 flex flex-col gap-y-5'>
						<div className='flex flex-col'>
							<label htmlFor=''>User ID</label>
							<input type='text' placeholder='Type here . . .' className='w-full py-2 px-4 border border-blue-500 text-sm rounded-full outline-none' />
						</div>
						<div className='flex flex-col'>
							<label htmlFor=''>Username</label>
							<input type='text' placeholder='Type here . . .' className='w-full py-2 px-4 border border-blue-500 text-sm rounded-full outline-none' />
						</div>
						<Link to={'/resetpassword'}>
							<button className='w-full py-2 bg-blue-500 text-white font-medium rounded-full'>Find Account</button>
						</Link>
						<Link to={'/'}>
							<p className='text-center font-medium text-blue-500'>All ready have an account? Login</p>
						</Link>
					</form>
				</div>
			</div>
			<div className='w-full md:w-1/2 h-screen bg-blue-500 flex justify-center items-center py-10'>
				<div className='backdrop-blur-sm bg-white/30 shadow-sm text-white rounded-2xl relative flex flex-col h-full w-2/3'>
					<p className='text-2xl font-semibold mt-16 mx-10'>Let we for find your account if your</p>
					<p className='text-2xl font-semibold mx-10'>Forgot Password</p>
					<img src={Image} alt='image' className='absolute bottom-0 w-full h-3/4 object-cover self-center ' />
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

export default ForgotPassword;
