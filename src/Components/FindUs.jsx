
const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-4 '>Find us on</h1>
            <div className="join flex join-vertical *:w-full *:bg-base-100">
                <button className="btn justify-start join-item border"><img src="https://cdn-icons-png.flaticon.com/128/2626/2626269.png" className='h-5' alt="" /> Facebook</button>
                <button className="btn justify-start join-item border"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" className='h-5' alt="" /> Instagram</button>
                <button className="btn justify-start join-item border"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" className='h-5' alt="" /> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;