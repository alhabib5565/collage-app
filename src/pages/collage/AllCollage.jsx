import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import useCollageData from '../../api/useCollageData';

const AllCollage = () => {
    const [loading, setLoading, collages] = useCollageData()
    const searchRef = useRef(' ')
    /*     useEffect(() => {
            setLoading(true)
            fetch(`${import.meta.env.VITE_API_URL}/collages`)
                .then(res => res.json())
                .then(data => {
                    setCollages(data)
                    setLoading(false)
                })
        }, []) */
    console.log(collages)
    const handleSearch = () => {
        const searchTxt = searchRef.current.value
        setLoading(true)
        fetch(`${import.meta.env.VITE_API_URL}/collages/${searchTxt}`)
            .then(res => res.json())
            .then(data => {
                setCollages(data)
                setLoading(false)
            })
    }
    return (
        <div className='pt-20'>
            <div className='mt-8 md:mt-14 lg:mt-20 my-container'>
                <SectionTitle></SectionTitle>

                <div className="form-control w-fit mx-auto my-10">
                    <div className="input-group mx-auto">
                        <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                {
                    loading ? <Loader></Loader>
                        : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                            {
                                collages.map((collage, index) => <div key={index} className="card mx-auto border-2 border-gray-300 hover:border-gray-600 duration-500 w-full bg-base-100 shadow-xl">
                                    <figure><img className='w-full px-7 pt-7 rounded-lg h-[200px]' src={collage?.collageImage} alt="collage image" /></figure>
                                    <div className="card-body relative">
                                        <h2 className="card-title">{collage?.collageName}</h2>
                                        <div className='  sm:flex justify-between items-center'>
                                            <h2 className='font-medium text-lg text-gray-700'>{collage?.events?.length} Events </h2>
                                            <h2 className='font-medium text-lg text-gray-700'>{collage?.research?.length} Research History</h2>
                                        </div>
                                        <div className='flex gap-4'>
                                            <h1 className='font-bold text-gray-700'>Sports:</h1>
                                            <div>
                                                {
                                                    collage?.sports.map((sport, index) => <p key={index}>{sport?.sportsName}</p>)
                                                }
                                            </div>
                                        </div>
                                        <Link className='w-full' to={`/collage/details/${collage._id}`}>
                                            <button className='my-button'>details</button>
                                        </Link>
                                    </div>
                                </div>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllCollage;