import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-4 p-2 bg-base-200 items-center text-xl'>
            <span className='bg-[#D72050] text-base-100 px-5 py-2'>Latest</span>
            <Marquee pauseOnHover={true} speed={70}>
                <Link className='mx-5' to='/news'>Lorem ipsum dolor</Link>
                <Link className='mx-5' to='/news'>Hello viewers</Link>
                <Link className='mx-5' to='/news'>The name is</Link>
                <Link className='mx-5' to='/news'>Lorem ipsum dolor</Link>
                <Link className='mx-5' to='/news'>Hello viewers</Link>
                <Link className='mx-5' to='/news'>The name is</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;