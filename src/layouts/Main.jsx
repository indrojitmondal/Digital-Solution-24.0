import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className='font-roboto bg-about"'>
              <Navbar ></Navbar>
              <Outlet></Outlet>
              <Footer></Footer>
        </div>
    );
};

export default Main;