import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Navbar_2 from './components/Navbar_2';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Homepg from './Screen/Homepg';
import Vedios from './Screen/Vedios';
import News from './Screen/News'







function App() {
  return (
    <div >
      <Navbar  />
      <Navbar_2 />
     
     
    <Routes>
      <Route path='/' element={<Homepg/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/Vedios' element={<Vedios/>}/>
    </Routes>
    
      <Footer/>
    </div>

  );
}

export default App;


