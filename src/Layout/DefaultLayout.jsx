import { Outlet } from 'react-router';
import SideBar from '../Components/SideBar/SideBar';
import NavBar from '../Components/NavBar/NavBar';
import { useContext } from 'react';
import { Context } from '../Context/Context';

export default function DefaultLayout() {
    const {themes} = useContext(Context);
    return ( 
        <div style={{background: themes === 'light' ? '#eceff4' : '#212146',height: "100%"}}>
        <NavBar/>
        <SideBar/>
        <Outlet/>
        </div>
    )
}