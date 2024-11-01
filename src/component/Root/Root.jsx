import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>

            
        </div>
    );
};

export default Root;