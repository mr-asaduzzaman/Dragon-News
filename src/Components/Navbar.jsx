import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import EtharLogo from '../../src/assets/Ethar.png'
import { authContext } from '../Provider/AuthProvider';
import { FaFacebookF, FaInstagram, FaLock, FaPinterest, FaYoutube } from 'react-icons/fa';
import { PiLineVerticalLight } from 'react-icons/pi';
import { MdPostAdd } from 'react-icons/md';

const Navbar = () => {
    const { user, handleLogOut } = useContext(authContext);

    return (
        <div className='flex justify-between items-center py-1 px-10 bg-white text-rose-500 shadow-md'>
            <div className='flex items-center gap-2'>
                {
                    <div className='flex items-center'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a>Category</a>
                                    <ul className="p-2">
                                        <li><Link to='/'>Category 1</Link></li>
                                        <li><Link to='/'>Category 2</Link></li>
                                        <li><Link to='/'>Category 3</Link></li>
                                        <li><Link to='/'>Category 4</Link></li>
                                        <li><Link to='/'>Category 6</Link></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                        <PiLineVerticalLight />
                    </div>
                }
                <div>

                    {
                        user ? (

                            <div className='flex items-center gap-2'>
                                
                                <button
                                    onClick={handleLogOut}
                                    className='rounded-sm'
                                    aria-label="Log out"
                                >
                                    Log out
                                </button>

                                <Link to='/addPost'><button className='btn btn-outline btn-sm bg-base-100  border-rose-500 text-rose-500 flex'><span><MdPostAdd /> </span><span>Add Post</span></button></Link>
                            </div>
                        ) : (
                            <Link to='/auth/login'>
                                <div className='flex items-center gap-2'>
                                    <FaLock />
                                    <button
                                        className='rounded-sm'
                                        aria-label="Log in"
                                    >
                                        Login
                                    </button>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div>
                <Link to='/'><img className='h-16 ml-20' src={EtharLogo} alt="" /></Link>
            </div>

            <div className='space-x-3 flex gap-3'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FaPinterest />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <PiLineVerticalLight />
                <input type="checkbox" className="toggle toggle-error" defaultChecked />
            </div>


        </div>
    );
};

export default Navbar;
