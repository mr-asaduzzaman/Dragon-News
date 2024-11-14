import React from 'react';
import { FaRegEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    // Fallbacks in case of missing data
    const imageUrl = news?.image_url || 'https://via.placeholder.com/400x200?text=No+Image';
    const authorName = news?.author?.name || 'Unknown Author';
    const authorImage = news?.author?.img || 'https://via.placeholder.com/40?text=NA';
    const publishedDate = news?.author?.published_date || 'Unknown Date';
    const rating = news?.rating?.number || 'N/A';
    const views = news?.total_view || 0;

    return (

        <div className='border mb-5 rounded-sm'>
            {/* Author Section */}
            <div className="flex items-center mb-4 bg-base-300 p-3">
                <img
                    src={authorImage}
                    alt={authorName}
                    className="w-12 h-16 rounded-full border mr-3"
                />
                <div className="text-sm">
                    <h2 className="font-medium text-gray-800">{authorName}</h2>
                    <p className="text-xs text-gray-500">{publishedDate}</p>
                </div>
            </div>
            <div className='p-5'>
                {/* News Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-3">{news?.title}</h2>
                <div className="bg-white rounded-lg overflow-hidden mb-6">
                    {/* News Image */}
                    <figure>
                        <img
                            src={imageUrl}
                            alt="News"
                            className="w-full h-56 rounded-lg"
                        />
                    </figure>

                    {/* Card Content */}
                    <div className="pt-6">

                        {/* News Details */}
                        <p className="text-sm text-gray-600 mb-4">
                            {news?.details.slice(0, 300)}...
                        </p>

                        {/* Footer Section */}
                        <div className="">
                            <a href="#" className="text-orange-600 font-semibold hover:underline">
                                Read More
                            </a>
                            
                            <div className="divider"></div>

                            <div className="flex items-center space-x-3 justify-between text-gray-600">
                                {/* Rating */}
                                <div className="flex items-center text-yellow-500">
                                    <FaStar className="text-lg mr-1" />
                                    <span className="font-medium">{rating}</span>
                                </div>

                                {/* Views */}
                                <div className="flex items-center">
                                    <FaRegEye className="text-lg mr-1" />
                                    <span className="font-medium">{views}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
