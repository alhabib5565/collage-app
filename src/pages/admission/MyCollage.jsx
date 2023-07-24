import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvaider';
import Loader from '../../components/Loader';
import { collageDetails } from '../../api/auth';
import moment from 'moment'
import Rating from '../../components/Rating';
const MyCollage = () => {
    const { user } = useContext(AuthContext)
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(false)
    const [CollageDetails, setCollageDetails] = useState({})
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/candidate?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setId(data.collageId)
            })
    }, [user])
    useEffect(() => {
        setLoading(true)
        collageDetails(id)
            .then(data => {
                console.log(data)
                setCollageDetails(data)
                setLoading(false)
            })
    }, [id])
    const { collageImage, collageName, admissionProcess, events, sports, research } = CollageDetails
    return (
        <div className='pt-20'>
            {
                loading ? <Loader></Loader>
                    : <div className="hero min-h-[calc(100vh-80px)] p-4 bg-base-200">
                        <div className="hero-content flex-col lg:gap-6 bg-white shadow-lg rounded-lg lg:p-8 lg:flex-row-reverse">
                            <img className='w-full lg:w-1/2 h-full lg:h-[400px] rounded-lg' src={collageImage} />
                            <div className='lg:w-1/2 space-y-5'>
                                <h1 className="text-5xl font-bold">{collageName}</h1>
                                <p >{admissionProcess}</p>
                                <div className=' border-b-4 border-gray-500 pb-4 '>
                                    <h1 className='text-xl mx-auto w-fit border-b-2 border-gray-700 mb-2 pb-1  font-bold text-gray-700'>Soprts</h1>
                                    <div className='flex flex-col md:flex-row gap-4'>
                                        {
                                            sports?.map((sport, index) => <div key={index}>
                                                <p> <span className='font-bold'>Sport Name: </span> {sport?.sportsName}</p>
                                                <p> <span className='font-bold'>Facilities: </span> {sport?.sportsFacilities}</p>
                                            </div>)
                                        }
                                    </div>
                                </div>
                                <div className='fle border-b-4 border-gray-500 pb-4 '>
                                    <h1 className='text-xl mx-auto w-fit border-b-2 border-gray-700 mb-2 pb-1  font-bold text-gray-700'>Research</h1>
                                    <div className='flex flex-col md:flex-row gap-4'>
                                        {
                                            research?.map((research, index) => <div key={index}>
                                                <p> <span className='font-bold'>Sport Name: </span> {research?.researchName}</p>
                                                <p> <span className='font-bold'>Researc HHistory: </span> {research?.researchHistory}</p>
                                            </div>)
                                        }
                                    </div>
                                </div>
                                <div className=' flex flex-col md:flex-row gap-4'>
                                    {
                                        events?.map((event, index) => <div className='h-[70px] w-full flex' key={index}>
                                            <h2 className='w-[100px] flex justify-center rounded-l-md items-center text-xl h-full text-center font-bold text-gray-200 border-r-2  bg-yellow-700'> {moment(event?.eventsDate).format("MMM Do YY")}</h2>
                                            <h2 className='p-2 flex grow justify-center rounded-r-md items-center text-xl h-full text-center font-bold text-gray-200  bg-cyan-700'> {event?.eventsName}</h2>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
            }
            <Rating collageName={collageName}></Rating>
        </div>
    );
};

export default MyCollage;