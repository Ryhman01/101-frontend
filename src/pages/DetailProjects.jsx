import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetailProjects = () => {

    const location = useLocation();
    const [projectName, setProjectName] = useState(location.state?.project_name);
    const [projectType, setProjectType] = useState(location.state?.project_type);
    const [dealPrice, setDealPrice] = useState(location.state?.deal_price);
    const [tax, setTax] = useState(location.state?.tax);
    const [feePercentage, setFeePercentage] = useState(location.state?.fee_percentage);
    const [feeNominal, setFeeNominal] = useState(location.state?.fee_nominal);
    const [netProfit, setNetProfit] = useState(location.state?.net_profit);
    const [costPerMonth, setCostPerMonth] = useState(location.state?.cost_per_month);
    const [costPerWorker, setCostPerWorker] = useState(location.state?.cost_per_worker);
    const [duration, setDuration] = useState(location.state?.duration);
    const [worker, setWorker] = useState(location.state?.worker);
    const [status, setStatus] = useState(location.state?.status);




	return (
		<div className='w-full'>
			<div className='w-full h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-14 px-5 flex justify-center items-center'>
				<p className='text-4xl italic text-white'>Project {status}</p>
			</div>
            <div className='mx-3 mt-2 flex gap-x-2'>
                <button onClick={async() => {
                    try {
                        await axios.put(`http://localhost:5000/projects/${location.state?.id}`,{
                            status: 'On Progress'
                        });
                        setStatus('On Progress');
                    } catch (error) {
                        console.log(error);
                    }
                }} className='bg-blue-600 border-none btn capitalize'>Start the project</button>
                <button onClick={async() => {
                    try {
                        await axios.put(`http://localhost:5000/projects/${location.state?.id}`,{
                            status: 'Has Pending'
                        });
                        setStatus('Has Pending');
                    } catch (error) {
                        console.log(error);
                    }
                }} className='bg-red-600 border-none btn capitalize'>Pending the project</button>
                <button onClick={async() => {
                    try {
                        await axios.put(`http://localhost:5000/projects/${location.state?.id}`,{
                            status: 'On Progress'
                        });
                        setStatus('On Progress');
                    } catch (error) {
                        console.log(error);
                    }
                }} className='bg-green-600 border-none btn capitalize'>Resume the project</button>
                <button onClick={async() => {
                    try {
                        await axios.put(`http://localhost:5000/projects/${location.state?.id}`,{
                            status: 'Has Finished'
                        });
                        setStatus('Has Finished');
                    } catch (error) {
                        console.log(error);
                    }
                }} className='bg-blue-900 border-none btn capitalize'>Finish the project</button>
            </div>
            <div className='ml-20 mt-10'>
				<div className='flex mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Project Name</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{projectName}</p>
				</div>
				<div className='flex mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Project Type</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{projectType}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Project Duration</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{duration} month</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Project Worker</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{worker} Worker</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Deal Price</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(dealPrice)}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Tax (11%)</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(tax)}</p>
				</div>
				<div className='flex'>
					<p className='italic font-regular w-48 text-2xl'>Fee (Percentage)</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{feePercentage}% from deal price</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Fee (Nominal)</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(feeNominal)}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Net Profit</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(netProfit)}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Cost/Month</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(costPerMonth)}</p>
				</div>
				<div className='flex  mb-2'>
					<p className='italic font-regular w-48 text-2xl'>Cost/Worker</p>
					<p className='mx-2 text-2xl'>:</p>
					<p className='font-medium text-2xl'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(costPerWorker)}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailProjects;
