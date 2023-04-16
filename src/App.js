import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import HomeLoan from './Pages/HomeLoan/HomeLoan';
import News from './Pages/News/News';
import NewsI from './Pages/News/NewsI.js';
import Becoming from './Pages/Tips & Guide/Becoming a Buyer/Becoming';
import LetsBuyTogether from './Pages/Tips & Guide/Lets Buy Together/LetsBuyTogether';
import Research from './Pages/Tips & Guide/Research/Research';
import Refinancing from './Pages/Tips & Guide/Refinancing/Refinancing';
import Checklist from './Pages/Tips & Guide/Checklist/Checklist';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/homeloan' element={<HomeLoan />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/news/pawleena church proving popular with buyers' element={<NewsI />}></Route>
            <Route path='/Tips & Guide/Becoming a first home buyer' element={<Becoming />}></Route>
            <Route path='/Tips & Guide/Let’s buy a home together' element={<LetsBuyTogether />}></Route>
            <Route path='/Tips & Guide/Investing in property' element={<Research />}></Route>
            <Route path='/Tips & Guide/Refinancing your homeloan' element={<Refinancing />}></Route>
            <Route path='/Tips & Guide/Required documents' element={<Checklist />}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;