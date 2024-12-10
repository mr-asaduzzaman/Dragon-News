import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightNavbar from '../Components/Layout Components/RightNavbar';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    return (

        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <h1 className='text-xl font-bold mb-5'>Dragon News</h1>
            <section className='grid grid-cols-12 gap-3'>
                <section className='col-span-9'>
                <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </section>
        </div>
    );
};

export default NewsDetails;