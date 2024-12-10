import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import moment from 'moment';

const TopNav = () => {
    const { user, handleLogOut } = useContext(authContext);

    return (
        <div className='flex justify-between items-center py-3 text-white px-4 bg-rose-500 shadow-md text-xs'>
            
            <div className='space-x-6'>
                <Link to='/etherBhai'><button className='rounded-sm'> ⚪ EtherBhai</button></Link>
                <Link to='/etherBazar'><button className='rounded-sm'>⚪ EtherBazar</button></Link>
                <Link to='/advertisement'><button  className='rounded-sm'>Advertisement</button></Link>
            </div>
            <div className='flex items-center gap-3'>
            <span className='text-white'>
                    {moment().format(' MMMM Do, YYYY')}
                </span>
            </div>
        </div>
    );
};

export default TopNav;
