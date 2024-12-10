import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    // Fallbacks in case of missing data
    const imageUrl = news?.image_url || 'https://via.placeholder.com/400x200?text=No+Image';
    const authorName = news?.author?.name || 'Unknown Author';
    const authorImage = news?.author?.img || 'https://via.placeholder.com/40?text=NA';
    const publishedDate = news?.author?.published_date || 'Unknown Date';
    const rating = news?.rating?.number || 'N/A';
    const views = news?.total_view || 0;

    return (

        <div className='border-2 mb-2'>
            <div className='p-5'>
                <div className="bg-white overflow-hidden mb-2">
                    {/* News Image */}
                    <figure>
                        <img
                            src={imageUrl}
                            alt="News"
                            className="w-full h-48"
                        />
                    </figure>
                    {/* News Title */}
                    <h2 className="text-lg font-bold text-gray-800">{news?.title}</h2>
                    {/* Card Content */}
                    <div className="pt-2">
                        {/* News Details */}
                        <p className="text-sm text-gray-600 mb-1">
                            {news?.details.slice(0, 200)}...
                        </p>
                        {/* Footer Section */}
                        <div>
                            <Link to={`/news/${news._id}`} className="text-orange-600 font-semibold hover:underline">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
