
import { Link } from 'react-router-dom';
const NavLong = () => {
    return (
        <div className="bg-base-100 shadow-lg border py-0">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex items-center">
                    <li>
                        <details>
                            <summary>একাডেমিক</summary>
                            <ul className="border-t-2 *:border-b-2 rounded-none">
                                <li><Link to='/class-6'>ষষ্ঠ শ্রেণী</Link></li>
                                <li><Link to='/class-7'>সপ্তম শ্রেণী</Link></li>
                                <li><Link to='/class-8'>অষ্টম শ্রেণী</Link></li>
                                <li><Link to='/class-9'>নবম শ্রেণী</Link></li>
                                <li><Link to='/class-10'>দশম শ্রেণী</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>ক্যারিয়ার বার্তা</summary>
                            <ul className="*:border-b-2 rounded-none">
                                <li><Link to='/class-6'>চাকরি বাকরি</Link></li>
                                <li><Link to='/class-7'>ফ্রিল্যান্সিং</Link></li>
                                <li><Link to='/class-8'>স্কিল লার্নিং</Link></li>
                                <li><Link to='/class-9'>স্কলারশীপ</Link></li>
                                <li><Link to='/class-10'>প্রবাস জীবন</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>জাতীয় বিশ্ববিদ্যালয়</summary>
                            <ul className="*:border-b-2 rounded-none">
                                <li><Link to='/firstYear'>প্রথম বর্ষ</Link></li>
                                <li><Link to='/secondYear'>দ্বিতীয় বর্ষ</Link></li>
                                <li><Link to='/thirdYear'>তৃতীয় বর্ষ</Link></li>
                                <li><Link to='/fourthYear'>চতুর্থ বর্ষ</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>বিবিধ ক্যাটাগরি</summary>
                            <ul className="*:border-b-2 rounded-none">
                                <li><Link to='/firstYear'>ফ্রিল্যান্সিং</Link></li>
                                <li><Link to='/secondYear'>সাধারন জ্ঞান</Link></li>
                                <li><Link to='/thirdYear'>গুগল এডসেন্স</Link></li>
                                <li><Link to='/fourthYear'>জমিজমা</Link></li>
                                <li><Link to='/fourthYear'>ধর্মকথা</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to='/freelancing'>ফ্রিল্যান্সিং</Link></li>
                    <li><Link to='/freelancing'>স্কিল ডেভেলপমেন্ট</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavLong;