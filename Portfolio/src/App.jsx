import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signin from './components/Signin'
import ErrorPage from './components/ErrorPage'
import { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import Footer from './components/Footer'

function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (Cookies.get("token")) {
      setToken(true);
    }
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar setToken={setToken} token={token}/>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/profile' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/login' element={<Login setToken={setToken}/>}/>
        <Route exact path='/signin' element={<Signin setToken={setToken}/>}/>
        <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
