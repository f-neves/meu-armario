import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Closet from './pages/Closet'
import Looks from './pages/Looks'
import AddItem from './pages/AddItem'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guarda-roupa" element={<Closet />} />
        <Route path="/adicionar-item" element={<AddItem />} />
        <Route path="/looks" element={<Looks />} />
      </Routes>
      <Footer />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Georama:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Georama:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
    </>
  )
}

export default App
