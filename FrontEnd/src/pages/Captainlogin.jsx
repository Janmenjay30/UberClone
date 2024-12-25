import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Captainlogin() {
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('');
    const [userData,setUserData]=useState({});


    const submitHandler=(e)=>{
        console.log("hello");
        setUserData({
            email:email,
            password:password
        })

        setEmail('');
        setPassword('');
    }

    
    

return (
    <div className='p-7 h-screen flex flex-col justify-between items-center'>
            <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
        <form action="" className='p-2 m-2' onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e);
        }}>
            <h3 className='text-xl mb-2 font-semibold'>What's your Phone number and Email Id?</h3>
            <input type="email" 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-md'
            placeholder='youremail@gmail.com'
            value={email}
            onChange={(e)=>{
                    setEmail(e.target.value)
            }} />
            <h3 className='text-xl mb-2 font-semibold'>Password</h3>
            <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-md'
            type="password" required placeholder='Enter Your Password' value={password} 
            onChange={(e)=>{
                    setPassword(e.target.value)
            }}/>
        <button className='font-semibold w-full flex justify-center items-center bg-black text-white py-3 rounded-md mt-5'>
            Login as Captain
        </button>
        <p className='flex justify-center m-2 gap-2 font-semibold'>New Here?
        <Link 
        to='/captainsignup'
        className='text-blue-600 '>Become a Captain</Link>
        </p>

        </form>
            </div>
            <Link
            to='/login'
            className='m-3 w-11/12 h-11 rounded-md bg-gray-300 
            font-semibold flex justify-center items-center mt-5 text-black cursor-pointer'>
                    Sign in as User
            </Link>
    </div>
)
}

export default Captainlogin
