import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Router>
        <div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen" style={{ backgroundImage: 'url(/bg-2.jpg)' }}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element = {<Dashboard/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
