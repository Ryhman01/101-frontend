import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const TableDashboard = () => {
	const [projects, setProjects] = useState([]);

	const axiosJWT = axios.create();
	axiosJWT.interceptors.request.use(
		async (config) => {
			const response = await axios.post('http://localhost:5000/token', { refreshToken: localStorage.getItem('refreshToken') });
			config.headers.Authorization = `Bearer ${response.data.accessToken}`;

			return config;
		},
		(error) => Promise.reject(error)
	);

	const getProjects = async () => {
		try {
			const response = await axiosJWT.get('http://localhost:5000/projects');
			setProjects(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<div className='w-full mt-10 mb-10 rounded-2xl bg-white px-7 pb-7 relative z-0 shadow-md'>
			<div className='bg-blue-600 rounded-2xl px-5 py-3 flex items-center justify-between relative -top-6 shadow-sm'>
				<h1 className='text-white text-xl font-medium'>Our Projects</h1>
				<button className='text-white'>See More</button>
			</div>
			<div className='overflow-x-auto'>
				<table className='items-center w-full border-collapse'>
					<thead>
						<tr>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>No.</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Name</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Deal Price</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Fee(%)</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Status</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project, index) => (
							<tr key={project.id}>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{index+1}.</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.project_name}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(project.deal_price)}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.fee}%</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableDashboard;
