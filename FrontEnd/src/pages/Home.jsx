import React from 'react'
import img from '../../assets/simple home page design for Uber clone app on phone.png';
import { Link } from 'react-router-dom';

function Home() {
return (
    <div>
        <div className='bg-cover bg-center h-screen pt-8 w-full flex flex-col justify-between' style={{ backgroundImage: `url(${img})` }}>
            <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4'>
                    <h2 className='text-3xl font-bold'>
                            Get Started with Uber
                    </h2>
                    <Link 
                    to='/login'
                    className=' flex justify-center items-centerw-full bg-black text-white py-3 rounded-md mt-5'>
                            Continue
                    </Link>
            </div>
        </div>
    </div>
)
}

export default Home
