import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import TopNav from '../Components/TopNav';
import NavLong from '../Components/NavLong';
import Footer from '../Components/Layout Components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen font-poppins'>
            <header>
                <TopNav></TopNav>
                <Navbar></Navbar>
            </header>
            <section className='py-5'>
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;