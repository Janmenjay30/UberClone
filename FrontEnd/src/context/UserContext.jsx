import React, { useState } from 'react'
import { createContext } from 'react';

export const UserDataContext=createContext();

function UserContext({children}) {
    const [user,setUser]=useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })
    

  return (
    <div>
        <UserDataContext.Provider value={[user,setUser]}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
