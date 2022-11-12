import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdPaid } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import TableClient from '../components/TableCllient';
import TableDashboard from '../components/TableDashboard';

const Dashboard = () => {

	const [notStarted, setNotStarted] = useState(0);
	const [onProgress, setOnProgress] = useState(0);
	const [hasFinished, setHasFinished] = useState(0);
	const [hasPending, setHasPending] = useState(0)

	useEffect(() => {
		getCount1();
		getCount2();
		getCount3();
		getCount4();
	}, [])

	const axiosJWT = axios.create();
	axiosJWT.interceptors.request.use(
		async (config) => {
			const response = await axios.post('http://localhost:5000/token', { refreshToken: localStorage.getItem('refreshToken') });
			config.headers.Authorization = `Bearer ${response.data.accessToken}`;

			return config;
		},
		(error) => Promise.reject(error)
	);

	const getCount1 = async() => {
		try {
			await axiosJWT.post('http://localhost:5000/project-status', {
				status: "Not Started"
			}).then(response => {
				setNotStarted(response.data.count)
			})
		} catch (error) {
			console.log(error);
		}
	}

	const getCount2 = async() => {
		try {
			await axiosJWT.post('http://localhost:5000/project-status', {
				status: "On Progress"
			}).then(response => {
				setOnProgress(response.data.count)
			})
		} catch (error) {
			console.log(error);
		}
	}

	const getCount3 = async() => {
		try {
			await axiosJWT.post('http://localhost:5000/project-status', {
				status: "Has Finished"
			}).then(response => {
				setHasFinished(response.data.count)
			})
		} catch (error) {
			console.log(error);
		}
	}

	const getCount4 = async() => {
		try {
			await axiosJWT.post('http://localhost:5000/project-status', {
				status: "Has Pending"
			}).then(response => {
				setHasPending(response.data.count)
			})
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main className='mb-2 mt-20 mx-5'>
			<h1 className='text-2xl font-medium'>Dashboard Page</h1>
			<div className='my-10'>
				<div className='flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
					{/* <div className='static card bg-blue-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>Income</h1>
									<h2 className='card-title mb-3 text-3xl sm:text-xl'>Rp.123.000K</h2>
									<span className='text-xs font-extralight text-white/70'>Increase Rp.12.000.000 since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div> */}

					<div className='static card w-full bg-red-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>Not Started Project</h1>
									<h2 className='card-title mb-3 text-3xl'>{notStarted} Project</h2>
									<span className='text-xs font-extralight text-white/70'>Increase 1 Project since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div>

					<div className='static card w-full bg-red-700 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>Pending Project</h1>
									<h2 className='card-title mb-3 text-3xl'>{hasPending} Project</h2>
									<span className='text-xs font-extralight text-white/70'>Increase 1 Project since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div>

					<div className='static card w-full bg-green-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>On Progress Project</h1>
									<h2 className='card-title mb-3 text-3xl'>{onProgress} Project</h2>
									<span className='text-xs font-extralight text-white/70'>Increase 0 Project since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div>

					<div className='static card w-full bg-blue-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>Completed Project</h1>
									<h2 className='card-title mb-3 text-3xl'>{hasFinished} Project</h2>
									<span className='text-xs font-extralight text-white/70'>Increase 2 since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
				<div className='md:col-start-1 md:col-end-4'>
					<TableDashboard/>
				</div>
				<div className='md:col-start-4 md:col-end-6'>
					<TableClient />
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
