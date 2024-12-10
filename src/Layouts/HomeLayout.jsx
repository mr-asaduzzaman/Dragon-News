import React from 'react';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/Layout Components/LeftNavbar';
import RightNavbar from '../Components/Layout Components/RightNavbar';
import { Outlet } from 'react-router-dom';
import TopNav from '../Components/TopNav';
import NavLong from '../Components/NavLong';
import Footer from '../Components/Layout Components/Footer';
import Banner from '../Components/Layout Components/Banner';

const HomeLayout = () => {

    return (
        <div className='font-poppins'>
            <header>
                <TopNav></TopNav>
                <Navbar></Navbar>
                <NavLong></NavLong>
                <Banner></Banner>
            </header>
            <section>
                <LeftNavbar></LeftNavbar>
            </section>
            <nav className='w-11/12 mx-auto p-2'>
            </nav>

            <main className='w-full mx-auto grid md:grid-cols-12 gap-4'>
                <section className='col-span-12'>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;