import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Register = () => {
    const [error, setError] = useState({})
    const { createNewUser, setUser, UpdateUserProfile } = useContext(authContext)
    const navigate = useNavigate()
    const handleRegistrationButton = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        if(name.length < 5){
            setError({...error, name: "Must be more then 5 Character"})
            return
        }
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        setUser(email, password)
        createNewUser(email, password)
            .then(result => {
                const currentUser = result.user
                setUser(currentUser)
                UpdateUserProfile({displayName: name, photoURL: photo})
                .then(() => {
                    navigate("/")
                })
                .catch((err) => {
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <div className='flex justify-center mt-10'>
                <div className="card bg-base-100 w-full rounded-md max-w-sm shrink-0 py-4">
                    <h1 className='text-center font-semibold text-2xl'>Register to your Account</h1>
                    <form onSubmit={handleRegistrationButton} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered bg-base-200 rounded-md" required />
                        </div>
                        {
                            error.name &&  <label className="label text-red-700 text-sm">{error.name}</label>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Enter your photo-url" className="input input-bordered bg-base-200 rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered bg-base-200 rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered bg-base-200 rounded-md" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white rounded-md">Register</button>
                        </div>
                    </form>
                    <p className='font-semibold text-center'>Already have an account? <Link to='auth/login' className='text-red-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;