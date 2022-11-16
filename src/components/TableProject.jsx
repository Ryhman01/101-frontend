import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableProject = () => {
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
				<h1 className='text-white text-xl font-medium'>Project List</h1>
			</div>
			<div className='overflow-x-auto'>
				<table className='items-center w-full border-collapse'>
					<thead>
						<tr>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>No.</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project ID</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Name</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Type</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Deal Price</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Fee(%)</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Fee(Rp.)</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Project Tax(11%)</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Duration</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Worker</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Status</th>
							<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project, index) => (
							<tr key={project.id}>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{index + 1}.</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>PID-{project.id}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.project_name}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.project_type}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(project.deal_price)}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.fee_percentage}%</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(project.fee_nominal)}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(project.tax)}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.duration} month</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.worker} worker</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{project.status}</td>
								<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1'>
									<Link to={'/detail-project'} state={{
										id: project.id,
										project_name: project.project_name,
										project_type: project.project_type,
										deal_price: project.deal_price,
										tax: project.tax,
										fee_percentage: project.fee_percentage,
										fee_nominal: project.fee_nominal,
										net_profit: project.net_profit,
										cost_per_month: project.cost_per_month,
										cost_per_worker: project.cost_per_worker,
										duration: project.duration,
										worker: project.worker,
										status: project.status

									}} className='px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm'>Detail</Link>
									<button
										onClick={async () => {
											try {
												if (confirm('You want to delete this project?') == true) {
													await axios.delete(`http://localhost:5000/projects/${project.id}`);
													alert('Project has deleted!');
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

export default TableProject;
