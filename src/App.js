import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import HomeLoan from './Pages/HomeLoan/HomeLoan';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/homeloan' element={<HomeLoan />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
