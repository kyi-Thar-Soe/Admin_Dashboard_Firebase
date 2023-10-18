import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Analytics from './Pages/Analytics/Analytics';
import Settings from './Pages/Settings/Settings';
import { useState } from 'react';
import { Context } from "./Context/Context";

function App() {
  const [themes, setTheme] =useState('light'); 

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  return (
    <Context.Provider value={{themes,toggleTheme}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='analytics' element={<Analytics/>}/>
        <Route path='settings' element={<Settings/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Context.Provider>
   
  )
}

export default App
