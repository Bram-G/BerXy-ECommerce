import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer/>
    
    </BrowserRouter>

  );
}

export default App;
