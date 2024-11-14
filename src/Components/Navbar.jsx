import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import navIcon from '../assets/nav-logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between py-2'>
            <div>
                <img className='h-8' src={navIcon} alt="" />
            </div>
            <div className='space-x-3'>
                <Link to='/'><button className='btn btn-sm btn-outline rounded-sm'>Home</button></Link>
                <Link to='/about'><button className='btn btn-sm btn-outline rounded-sm'>About</button></Link>
                <Link to='/career'><button className='btn btn-sm btn-outline rounded-sm'>Career</button></Link>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                <img className='h-8' src={userIcon} alt="" /></div>
                <button className='btn btn-sm btn-neutral rounded-sm'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;