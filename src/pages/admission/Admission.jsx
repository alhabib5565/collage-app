import React from 'react';
import useCollageData from '../../api/useCollageData';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [loading, , collages] = useCollageData()
    console.log(collages)
    return (
        <div className='pt-20'>
            {
                loading ? <Loader></Loader>
                    : <div className='my-container'>
                        <div className='h-full w-full grid grid-cols-1 mt-8 md:mt-14 lg:mt-20 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                            {
                                collages?.map((collage, index) => <div key={index}>
                                    <Link to={`/admission/${collage._id}`}>
                                        <h2 className={`text-white rounded-md text-3xl md:text-5xl font-bold shadow-lg border-2  hover:border-gray-600 min-h-[90px] h-full p-4 flex justify-center items-center duration-500 ${index % 2 === 0 ? "bg-yellow-600 " : 'bg-cyan-600'}`}>{collage?.collageName}</h2>
                                    </Link>
                                </div>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Admission;