// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter> 
    
      <Header/>
    
    <Routes>
        
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/start' element={<Parent/>}></Route>
          <Route path='/results' element={<Result/>}></Route>
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
