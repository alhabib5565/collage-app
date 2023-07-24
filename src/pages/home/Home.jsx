import React from 'react';
import Banner from './Banner';
import Collages from './Collages';
import Testimonials from './Testimonials';
import Gallary from './Gallary';

const Home = () => {
    return (
        <div className='pt-20'>
            <Banner></Banner>
            <Collages></Collages>
            <Gallary></Gallary>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;