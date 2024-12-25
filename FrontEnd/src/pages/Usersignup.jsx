import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Usersignup() {
    const [email, setEmail] = useState('');
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    
    
        const submitHandler=(e)=>{
            console.log("hello");
            setUserData({
                fullName:{
                    firstName:FirstName,
                    lastName:LastName
                }, 
                email:email,
                password:password
            })
            
            console.log(userData);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between items-center'>
            <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form action="" className='p-2 m-2' onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e);
        }}>
            <h3 className='text-xl mb-2 font-semibold'>Your Name</h3>
            <div className='flex gap-2 '>

            <input type="text" 
            required 
            className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-md'
            placeholder='FirstName'
            value={FirstName}
            onChange={(e)=>{
                    setFirstName(e.target.value)
                    // console.log(FirstName)
            }} />
             <input type="text" 
            required 
            className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-md'
            placeholder='LastName'
            value={LastName}
            onChange={(e)=>{
                    setLastName(e.target.value)
                    // console.log(LastName)
            }} />
            </div>

            <h3 className='text-xl mb-2 font-semibold'>Enter Your Email</h3>
            <input
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-md'
            type="text" required placeholder='Enter Your Email' value={email} 
            onChange={(e)=>{
                    setEmail(e.target.value)
                    // console.log(email)
            }}/>


            <h3 className='text-xl mb-2 font-semibold'>Password</h3>
            <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-md'
            type="text" required placeholder='Enter Your Password' value={password} 
            onChange={(e)=>{
                    setPassword(e.target.value)
                    // console.log(password)
            }}/>


        <button className='font-semibold w-full flex justify-center items-center bg-black text-white py-3 rounded-md mt-5'>
            Login as User
        </button>
        <p className='flex  m-2 gap-2 font-base'>Already have an account?
        <Link 
        to='/login'
        className='text-blue-600 '>Log In</Link>
        </p>

        </form>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, labore. Assumenda asperiores repudiandae et nesciunt?
            </p>
    </div>
    </div>
  )
}

export default Usersignup
