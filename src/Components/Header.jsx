import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-5'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h1 className='text-md text-gray-500'>Journalism Without Fear or Favour</h1>
            <h1>
                <span className='text-black font-semibold'>
                    {moment().format('dddd,')}
                </span>
                <span className='text-gray-500'>
                    {moment().format(' MMMM Do, YYYY')}
                </span>
            </h1>


        </div>
    );
};

export default Header;