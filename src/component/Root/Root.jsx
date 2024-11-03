import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
             <ToastContainer />
            <Navber/>
            <Outlet/>
            <Footer/>

            
        </div>
    );
};

export default Root;