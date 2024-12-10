import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const {data: news} = useLoaderData()
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;