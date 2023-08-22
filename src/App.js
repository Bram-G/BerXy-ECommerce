import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import WatchPage from './pages/WatchPage/WatchPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Collection from './pages/Collection/Collection';
import Cart from './pages/Cart/Cart';



function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/watch/:id" element={<WatchPage/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
