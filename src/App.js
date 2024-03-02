// import logo from "./static/images/logo.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import SineUp from './page/SineUp';
import Header from './components/Header/index';

function App () {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='sineup' element={<SineUp />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
