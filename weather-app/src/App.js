import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import HeaderComp from './components/HeaderComp';
import NotFound from './pages/NotFound';




function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComp/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/result/:lon/:lat' element={<ResultPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
