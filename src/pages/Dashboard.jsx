import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdPaid } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import TableClient from '../components/TableCllient';
import TableDashboard from '../components/TableDashboard';

const Dashboard = () => {
	const [token, setToken] = useState('');
    const [expire, setExpire] = useState(0);
    const [users, setUsers] = useState([]);
	// let expire = '';
	// let token = '';
	const navigate = useNavigate();

    useEffect(() => {
		// console.log(localStorage.getItem('refreshToken'));
		refToken();
        getUsers();
	}, []);

	const refToken = async () => {
		try {
			await axios
				.post('http://localhost:5000/token', {
					refreshToken: localStorage.getItem('refreshToken'),
				})
				.then((response) => {
					setToken(response.data.accessToken);
                    console.log(token);
					const decoded = jwtDecode(response.data.accessToken);
					setExpire(decoded.exp)
                    console.log(expire);
				});
		} catch (error) {
			if (error.response) {
				navigate('/');
			}
		}
	};

    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            await axios.post('http://localhost:5000/token', {
                refreshToken: localStorage.getItem('refreshToken'),
            }).then((response) => {
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                setToken(response.data.accessToken);
                console.log(token);
                const decoded = jwtDecode(response.data.accessToken);
                setExpire(decoded.exp)
                console.log(expire);
            })
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        try {
            await axiosJWT.get('http://localhost:5000/users', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                setUsers(response.data);
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
					<div className='static card bg-blue-500 text-primary-content'>
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
					</div>

					<div className='static card w-full bg-red-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>Not Started Project</h1>
									<h2 className='card-title mb-3 text-3xl'>5 Project</h2>
									<span className='text-xs font-extralight text-white/70'>Increase 1 Project since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div>

					<div className='static card w-full bg-yellow-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>On Progress Project</h1>
									<h2 className='card-title mb-3 text-3xl'>5 Project</h2>
									<span className='text-xs font-extralight text-white/70'>Increase 0 Project since last month</span>
								</div>
								<MdPaid size={50} />
							</div>
						</div>
					</div>

					<div className='static card w-full bg-green-500 text-primary-content'>
						<div className='card-body'>
							<div className='flex justify-between'>
								<div className='w-full'>
									<h1 className='font-light'>Completed Project</h1>
									<h2 className='card-title mb-3 text-3xl'>5 Project</h2>
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
					<TableDashboard users={users}/>
				</div>
				<div className='md:col-start-4 md:col-end-6'>
					<TableClient />
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
