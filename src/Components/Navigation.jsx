import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { MdLineWeight } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { PiLineVerticalLight } from 'react-icons/pi';

const Navbar = () => {
    const { user, handleLogOut } = useContext(authContext);

    return (
        <div className='flex justify-between items-center py-5 px-10 bg-white text-rose-500 shadow-md'>
            <div className='flex items-center gap-2'>
                {
                    <div className='flex'>
                        <MdLineWeight />
                        <PiLineVerticalLight />
                    </div>
                }
                <div>
                    {
                    user ? (

                        <div className='flex items-center gap-2'>
                            <FaLock />
                            <button
                                onClick={handleLogOut}
                                className='rounded-sm'
                                aria-label="Log out"
                            >
                                Log out
                            </button>
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


            <div className='space-x-3'>
                <Link to='/'><button className='btn btn-sm btn-outline rounded-sm'>Home</button></Link>
                <Link to='/about'><button className='btn btn-sm btn-outline rounded-sm'>About</button></Link>
                <Link to='/career'><button className='btn btn-sm btn-outline rounded-sm'>Career</button></Link>
            </div>

        </div>
    );
};

export default Navbar;
