import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import VikasKame from './pages/vikaskame/VikasKame';
import Yojana from './pages/yojana/Yojana';
import Eoffice from './pages/eoffice/Eoffice';
import Blog from './pages/blog/Blog';
import AboutUs from './pages/aboutus/AboutUs';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/parichay" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vikaskame" element={<VikasKame />} />
          <Route path="/sarakariyojana" element={<Yojana />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/e-karyalay' element={<Eoffice />} />
          <Route path="/blog/:id" element={<Blog />} />

        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
