import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signin from './components/Signin'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
