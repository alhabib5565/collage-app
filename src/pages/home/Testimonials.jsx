import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../components/SectionTitle';
const Testimonials = () => {
    const [allReview, setAllReview] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allreview`)
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [])
    return (
        <section className='max-w-3xl mx-auto p-4 mt-8 md:mt-14 lg:mt-20'>
            <SectionTitle
                subTitle='some feedback'
                title='TESTIMONIALS'
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    allReview.map(review => <SwiperSlide key={review._id}>
                        <div className='fle mxa-w-md w-full flex-col items-center px-10 md:px-20 space-y-4'>
                            <div className='flex justify-between'>
                                <div className="flex items-center w-full space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={review.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{review.collageName}</div>
                                        <div className="text-sm opacity-50">{review.name}</div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                <Rating
                                    style={{ maxWidth: 180, alignItems: 'center' }}
                                    value={review.rating}
                                    readOnly
                                />
                                </div>
                            </div>
                            <p>
                                {review.feedback}
                            </p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;