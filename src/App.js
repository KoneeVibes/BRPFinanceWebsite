import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import HomeLoan from './Pages/HomeLoan/HomeLoan';
// import News from './Pages/News/News';
// import NewsPiece from './Pages/News/NewsPiece.js';
import ScrollToTop from './Utils/ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/homeloan' element={<HomeLoan />}></Route>
            {/* <Route path='/news' element={<News />}></Route>
            <Route path='/news/:id' element={<NewsPiece />}></Route> */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;