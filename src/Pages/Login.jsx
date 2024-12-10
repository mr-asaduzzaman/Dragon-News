import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {
    const { setUser, SignInUser } = useContext(authContext);
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState({})

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignInUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                setError({ ...error, Login: err.code })
            });
    };

    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-full rounded-md max-w-sm shrink-0 py-4">
                <h1 className='text-center font-semibold text-2xl'>Login to your Account</h1>
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email Address</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered bg-base-200 rounded-md"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            name='password'
                            type="password"
                            placeholder="Enter Your Password"
                            className="input input-bordered bg-base-200 rounded-md"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            error.Login &&
                            (<label className="label text-sm text-red-500"> {error.Login} </label>)
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-error text-white rounded-md">Login</button>
                    </div>
                </form>
                <p className='font-semibold text-center'>
                    Don't have an account? <Link to='/auth/register' className='text-red-600'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
