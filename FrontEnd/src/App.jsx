import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import { UserDataContext } from './context/userContext'

const App = () => {
  const ans=useContext(UserDataContext);
  console.log(ans);
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Userlogin/>}/>
        <Route path='/signup' element={<Usersignup/>}/>
        <Route path='/captainlogin' element={<Captainlogin/>}/>
        <Route path='/captainsignup' element={<Captainsignup/>}/>

      </Routes>
    </div>
  )
}

export default App
