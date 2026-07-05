import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './component/sideBar/SideBar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import History from './component/History/History'
import Admin from './component/Admin/Admin'
import Login from './component/Login/Login'
import Footer from './component/Footer/Footer'
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy'
import About from './component/About/About'
import Contact from './component/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/history' element={<History />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
