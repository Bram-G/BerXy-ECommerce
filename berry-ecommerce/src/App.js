import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import WatchPage from './pages/WatchPage/WatchPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path={`/watch/:id`} element={<WatchPage/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>

  );
}

export default App;
