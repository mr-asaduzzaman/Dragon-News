import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-4 px-2 bg-base-200 items-center text-sm'>
            <span className='bg-[#D72050] text-base-100 px-5 py-1'>সর্বশেষ</span>
            <Marquee pauseOnHover={true} speed={70}>
                <Link className='mx-5' to='/news'>দেশজুড়ে শীতের তীব্রতা, বস্ত্র বিতরণ কার্যক্রম জোরদার</Link>
                <Link className='mx-5' to='/news'>ই-কমার্স খাতের উন্নয়নে নতুন নীতিমালা ঘোষণা</Link>
                <Link className='mx-5' to='/news'>ফ্রিল্যান্সিং শুরু করবেন? জেনে নিন ৫টি প্রয়োজনীয় দক্ষতা</Link>
                <Link className='mx-5' to='/news'>গ্রাফিক ডিজাইনে ক্যারিয়ার গড়তে যা জানতে হবে</Link>
                <Link className='mx-5' to='/news'>কম সময়ে কিভাবে টাইপিং স্পিড বাড়াবেন</Link>
                <Link className='mx-5' to='/news'>প্রোগ্রামিং শিখুন সহজভাবে: নতুনদের জন্য পরামর্শ</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;