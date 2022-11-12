import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const TablePrice = () => {
	const [prices, setPrices] = useState([]);
	const [priceId, setPriceId] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [percentage, setPercentage] = useState('');

	const axiosJWT = axios.create();
	axiosJWT.interceptors.request.use(
		async (config) => {
			const response = await axios.post('http://localhost:5000/token', { refreshToken: localStorage.getItem('refreshToken') });
			config.headers.Authorization = `Bearer ${response.data.accessToken}`;

			return config;
		},
		(error) => Promise.reject(error)
	);

	const getPrices = async () => {
		try {
			const response = await axiosJWT.get('http://localhost:5000/prices');
			setPrices(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const updatePrice = async (e) => {
		e.preventDefault();
		try {
			if(confirm('You want to change this price?') == true){
				await axios.put(`http://localhost:5000/prices/${priceId}`,{
					min_price: minPrice,
					max_price: maxPrice,
					percentage: percentage
				})
				alert('This price has changed')
				window.location.reload(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getPrices();
	}, []);

	return (
		<>
			<div className='w-full mt-10 mb-10 rounded-2xl bg-white px-7 pb-7 relative z-0 shadow-md'>
				<div className='bg-blue-600 rounded-2xl px-5 py-3 flex items-center justify-between relative -top-6 shadow-sm'>
					<h1 className='text-white text-xl font-medium'>Price List</h1>
				</div>
				<div className='overflow-x-auto'>
					<table className='items-center w-full border-collapse'>
						<thead>
							<tr>
								<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>No.</th>
								<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Price ID</th>
								<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Price Range</th>
								<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Percentage</th>
								<th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>Action</th>
							</tr>
						</thead>
						<tbody>
							{prices.map((price, index) => (
								<tr key={price.id}>
									<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{index + 1}.</td>
									<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>PRID-{price.id}</td>
									<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
										Rp.{price.min_price} - Rp.{price.max_price}
									</td>
									<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>{price.percentage}%</td>
									<td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1'>
										<label htmlFor='edit-price' onClick={ async() => {
											try {
												await axiosJWT.get(`http://localhost:5000/prices/${price.id}`)
												.then(response => {
													setPriceId(response.data.id);
													setMinPrice(response.data.min_price);
													setMaxPrice(response.data.max_price);
													setPercentage(response.data.percentage);
												})
											} catch (error) {
												console.log(error);
											}
										}} className='cursor-pointer px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm'>
											Edit
										</label>
										<button
											onClick={async () => {
												try {
													if (confirm('You want delete this price?') == true) {
														await axios.delete(`http://localhost:5000/prices/${price.id}`,);
														alert('Price has deleted.');
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
			<input type='checkbox' id='edit-price' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label htmlFor='edit-price' className='btn btn-sm btn-circle absolute right-2 top-2'>
						X
					</label>
					<h1 className='text-lg font-bold'>Edit Price</h1>
					<form onSubmit={updatePrice}>
						<div className='py-4'>
							<p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure rerum ipsa. Quasi ipsam labore, quibusdam cumque cupiditate dolores esse?</p>
							<div className='mt-5'>
								<div className='my-2'>
									<label htmlFor='new-min-price' className='text-sm font-medium text-gray-700'>
										Min Price
									</label>
									<input onChange={e => setMinPrice(e.target.value)} value={minPrice} type='text' name='new-min-price' id='new-min-price' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>
								<div className='my-2'>
									<label htmlFor='new-max-price' className='text-sm font-medium text-gray-700'>
										Max Price
									</label>
									<input onChange={e => setMaxPrice(e.target.value)} value={maxPrice} type='text' name='new-max-price' id='new-max-price' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>
								<div className='my-2'>
									<label htmlFor='new-percentage' className='text-sm font-medium text-gray-700'>
										Percentage
									</label>
									<input onChange={e => setPercentage(e.target.value)} value={percentage} type='text' name='new-percentage' id='new-percentage' placeholder='Type here . . .' className='w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500' />
								</div>

								<div className='flex justify-center items-center gap-5 mt-5'>
									<button type='submit' className='px-5 py-2 bg-blue-500 rounded-lg text-white font-medium text-sm'>
										Change Price
									</button>
									<label htmlFor='edit-price' className='px-5 py-2 bg-gray-500 rounded-lg text-white font-medium text-sm'>
										Cancel
									</label>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default TablePrice;
