import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home';
import Product from './pages/product/product';
import Cta from './components/cta/cta';
import Demo from './pages/demo/demo';
import About from './pages/about/about';
import Contact from './pages/contact/contact';


function App() {

  return (
    <BrowserRouter>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
                <Route exact path="/" element={<Navigate to="/home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/product" element={<Product />} />
                <Route exact path="/demo" element={<Demo />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Cta/>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
