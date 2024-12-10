import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const { loginWithGoogle, setUser, user } = useContext(authContext);

    const handlePopupGoogle = () => {
        loginWithGoogle()
            .then(result => {
                setUser(result.user); // Use result.user to properly set the authenticated user
            })
            .catch(error => {
            });
    };

    return (
        <div>
            <h1 className='font-bold mb-4'>Login With</h1>
            <div className="space-y-3 *:w-full">
                {
                    user? <button className='btn btn-outline btn-sm'> Hi, {user.displayName}
                </button> : <button onClick={handlePopupGoogle} className='btn btn-outline btn-sm'>
                    <FaGoogle /> Login with Google
                </button>
                    
                }
                <button className='btn btn-outline btn-sm'>
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
