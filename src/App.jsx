import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>    

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
