import React, { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import TableClient from '../components/TableCllient';
import TableProject from '../components/TableProject';

const Projects = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('refreshToken')) {
			navigate('/');
		}
	}, []);

	return (
		<main className='my-2 mt-20 mx-5'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-medium'>Project Page</h1>
				<CiSettings size={28} color={'blue'} className='animate-spin cursor-pointer' />
			</div>
			<p className='mt-5 text-gray-400 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias voluptas explicabo nisi reprehenderit. Commodi voluptate ducimus mollitia nemo hic!</p>
			<div className='mt-10'>
				<div>
					<label htmlFor='add-new-project' className='cursor-pointer px-5 py-2 mx-1 rounded-lg bg-blue-500 text-white font-medium'>
						Add New Project
					</label>
					<label htmlFor='add-new-role' className='cursor-pointer px-5 py-2 mx-1 rounded-lg bg-green-500 text-white font-medium'>
						Join Project
					</label>
				</div>
				<div className='flex items-center gap-3 w-full border rounded-full py-2 px-3 text-gray-500 mt-5'>
					<BsSearch size={20} />
					<input type='text' placeholder='Search...' className='w-full h-full outline-none font-light' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
					<div className='md:col-start-1 md:col-end-4'>
						<TableProject />
					</div>
					<div className='md:col-start-4 md:col-end-6'>
						<TableClient />
					</div>
				</div>
			</div>
			<input type='checkbox' id='add-new-project' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label htmlFor='add-new-project' className='btn btn-sm btn-circle absolute right-2 top-2'>
						X
					</label>
					<h1 className='text-lg font-bold'>Add New Project</h1>
					<form action=''>
						<div className='py-4'>
							<p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure rerum ipsa. Quasi ipsam labore, quibusdam cumque cupiditate dolores esse?</p>
							<div className='mt-5'>
								<div className='my-2'>
									<label htmlFor='new-project-name' className='text-sm font-medium text-gray-700'>
										Project Name
									</label>
									<input type='text' name='new-project-name' id='new-project-name' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>
								<div className='my-2'>
									<label htmlFor='new-project-price' className='text-sm font-medium text-gray-700'>
										Deal Price
									</label>
									<input type='text' name='new-project-price' id='new-project-price' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>
								<div className='my-2'>
									<label htmlFor='new-project-worker' className='text-sm font-medium text-gray-700'>
										Project Worker
									</label>
									<input type='number' name='new-project-worker' id='new-project-worker' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>
								<div className='my-2'>
									<label htmlFor='new-project-duration' className='text-sm font-medium text-gray-700'>
										Project Duration
									</label>
									<input type='number' name='new-project-duration' id='new-project-duration' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='flex justify-center items-center gap-5 mt-5'>
									<button className='px-5 py-2 bg-blue-500 rounded-lg text-white font-medium text-sm'>Add User</button>
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

export default Projects;
