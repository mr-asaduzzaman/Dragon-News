import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const {data: news} = useLoaderData()
    return (
        <div>
            
            <h1 className="font-bold mb-5">Dragon News Home</h1>
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;