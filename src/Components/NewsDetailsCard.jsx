import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetailsCard = ({news}) => {
    return (
        <div>

            <div className="card bg-base-100">
                <figure>
                    <img
                        src={news.thumbnail_url}
                        alt="Shoes"
                        className="rounded-none w-full h-96 m-10" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{news?.title}</h2>
                    <p className='text-xl'>{news?.details}</p>
                    <div className="card-actions">
                        <Link to={`/category/${news?.category_id}`} className="btn btn-wide btn-outline bg-pink-600 font-bold text-white">Back To Category</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;