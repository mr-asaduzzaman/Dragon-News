import { FaGoogle, FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-4 '>Login With</h1>
            <div className="space-y-3 *:w-full">
                <button className='btn btn-outline btn-sm'><FaGoogle></FaGoogle> Login with Google</button>
                <button className='btn btn-outline btn-sm'><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;