import React from 'react';
import bannerImg from '../../assets/banner.jpeg'
import b from '../../assets/b.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel-item relative h-[calc(100vh-80px)] w-full">
                <img src={b} className="w-full h-full" />
                <div className='my-containe absolute top-0 flex justify-center items-center
                 bg-[#151515] bg-opacity-50 w-full h-full'>
                    <div className=' px-5 text-center space-y-8 text-white'>
                        <h2 className='text-4xl text-gray-300 md:text-6xl font-bold'>
                            Education is the best key <br /> success in life
                            </h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae porro cupiditate voluptatum amet corporis tempora facere debitis <br /> minus ratione consequuntur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;