import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '../assets/avatar.jpg';

const Profile = () => {

  const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('refreshToken')) {
			navigate('/');
		}
	}, []);


  return (
    <main className='my-2 mt-20 mx-5 h-screen'>
      <h1 className="text-2xl font-medium">Profile Page</h1>
      
    </main>
  )
}

export default Profile