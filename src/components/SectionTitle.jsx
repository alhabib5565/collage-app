import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='mx-auto text-center pb-3 mb-5 border-b-4 border-gray-500 w-fit'>
            <h2 className='text-2xl md:text-4xl font-bold text-gray-700'>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;