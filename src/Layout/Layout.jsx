import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Layout = () => {
    return (
<div>
<div className='max-w-6xl mx-auto mb-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>

        <Footer></Footer>
</div>
    );
};

export default Layout;