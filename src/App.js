import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import HomeLoan from './Pages/HomeLoan/HomeLoan';
import News from './Pages/News/News';
import NewsI from './Pages/News/NewsI.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/homeloan' element={<HomeLoan />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/news/pawleena church proving popular with buyers' element={<NewsI />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;