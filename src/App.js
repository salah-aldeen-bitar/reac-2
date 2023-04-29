import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Slide from './componets/slider';
import Footer from './componets/footer';
import Navbar1 from './componets/navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Index from './componets/index';

function App() {
  return (
    
    <BrowserRouter>
      <div className='app'>
        <Navbar1/>
          
          <Routes>
              <Route path='/'element={<Index/>} />
              <Route path='/slide' element={<Slide/>}/>
              <Route path='/footer' element={<Footer/>}/>
          </Routes>
          
        
    
        
        <Footer/>
        </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
