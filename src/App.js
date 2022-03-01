
import './App.css';
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Home/Home';
//import Authenticator from './Components/Authenticator/Authenticator'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/a' element={
        <Home />
      }/>
      <Route path='/' element={
            <BurgerBuilder />
        }/>
      <Route path = '/login' element={
        <LogIn />
      }/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
