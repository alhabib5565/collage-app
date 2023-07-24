import React from 'react';
import Marquee from "react-fast-marquee";
// import img1 from '../../assets/ima1.jpg'
import img1 from '../../assets/ima1.jpg'
import img2 from '../../assets/ima2.jpg'
import img3 from '../../assets/ima1 (3).jpg'
import img4 from '../../assets/ima1 (4).jpg'
import img5 from '../../assets/ima1 (5).jpg'
import img6 from '../../assets/ima1 (6).jpg'
import img7 from '../../assets/ima1 (7).jpg'
import img8 from '../../assets/ima1 (8).jpg'
// import img8 from '../../assets/ima1 (9).jpg'
const Gallary = () => {
    return (
        <div className='mt-8 md:mt-14 lg:mt-20 my-container'>
            <h2 className="text-3xl mb-10 md:text-5xl text-orange-400 font-bold text-center">Explore Our Gallary Section</h2>
            <Marquee autoFill={true}>
                <div className='grid grid-co2 md:grid-cols-3 lg:grid-cols-4 pl-3 gap-3'>
                    <img className="h-[200px] w-full rounded" src={img1} alt="" />
                    <img className="h-[200px] w-full rounded" src={img2} alt="" />
                    <img className="h-[200px] w-full rounded" src={img3} alt="" />
                    <img className="h-[200px] w-full rounded" src={img4} alt="" />
                    <img className="h-[200px] w-full rounded" src={img5} alt="" />
                    <img className="h-[200px] w-full rounded" src={img6} alt="" />
                     <img className="h-[200px] w-full rounded" src={img7} alt="" />
                    <img className="h-[200px] w-full rounded" src={img8} alt="" /> 
                </div>
            </Marquee>
        </ div>
    );
};

export default Gallary;