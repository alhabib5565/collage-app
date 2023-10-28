import React from 'react';
import CandidateForm from '../../components/CandidateForm';
import { useParams } from 'react-router-dom';

const AdmitStudent = () => {
    const {id} = useParams()
    return (
        <div className='pt-20 '>
             <div className='flex  w-full min-h-[calc(100vh-80px)] h-full justify-center items-center'>
                <div className='max-w-xl text-gray-300 bg-cyan-900 w-full mx-auto p-4 md:p-8 lg:p-12 border-2 border-gray-300 hover:border-gray-600 duration-500 rounded-lg shadow-xl'>
                    
                <CandidateForm collageId={id}></CandidateForm>
                </div>
            </div>
        </div>
    );
};

export default AdmitStudent;