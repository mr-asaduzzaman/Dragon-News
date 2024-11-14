import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/Layout Components/LeftNavbar';
import RightNavbar from '../Components/Layout Components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>

            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className='w-11/12 mx-auto p-2'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-2'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;