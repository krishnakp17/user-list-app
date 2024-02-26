import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Display from './components/Display';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/display' element={<Display/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
