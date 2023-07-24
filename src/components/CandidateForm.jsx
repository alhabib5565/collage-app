import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {TbLoader3} from "react-icons/tb"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvaider';
const CandidateForm = ({ collageId }) => {
    const { handleSubmit, register, reset,formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (data) => {
        // Handle form submission here, you can log the data or send it to a server.
        console.log(data);
        const formData = new FormData()
        formData.append('image', data?.image[0])
        const { subject, candidatePhone, dob, candidateName, candidateEmail, address } = data
        setLoading(true)
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const imageUrl = data.data.display_url
                const candidateData = { subject, candidatePhone, collageId, birthYear, candidateName, candidateEmail, address, imageUrl }
                if (imageUrl) {
                    fetch(`${import.meta.env.VITE_API_URL}/saveCandidate`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                          },
                          body: JSON.stringify(candidateData),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                Swal.fire(
                                    'Good job!',
                                    'candidate information added',
                                    'success'
                                )
                            }
                            reset()
                            navigate('/mycollage')
                            setLoading(false)
                        })
                }
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="candidateName">Candidate Name</label>
                <input
                    {...register('candidateName')}
                    id="candidateName"
                    type="text"
                    placeholder='name'
                    className="w-full border rounded px-2 py-[1px] md:py-1 text-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="subject">Subject</label>
                <input placeholder='subject' {...register('subject')} id="subject" type="text" className="w-full border rounded px-2 py-[1px] md:py-1 text-black" />
            </div>

            <div className='flex flex-col md:flex-row md:gap-4'>
                <div className="mb-4">
                    <label htmlFor="candidateEmail">Candidate Email</label>
                    <input
                        {...register('candidateEmail', { required: true })}
                        id="candidateEmail"
                        type="email"
                        defaultValue={user?.email}
                        className="w-full border rounded px-2 py-[1px] md:py-1 text-black"
                    />
                      {errors.candidateEmail?.type === 'required' && <p className='text-red-500'>Email is required</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="candidatePhone">Candidate Phone number</label>
                    <input
                        {...register('candidatePhone', { required: true })}
                        id="candidatePhone"
                        type="tel"
                        placeholder='Phone'
                        className="w-full border rounded px-2 py-[1px] md:py-1 text-black"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="address">Address</label>
                <input placeholder='Address' {...register('address', { required: true })} id="address" type="text" className="w-full border rounded px-2 py-[1px] md:py-1 text-black" />
            </div>

            <div className="mb-4">
                <label htmlFor="dob">Date of Birth</label>
                <input {...register('dob')} id="dob" type="date" className="w-full border rounded px-2 py-[1px] md:py-1 text-black" />
            </div>

            <div className='flex flex-col md:flex-row items-center md:gap-4'>
                <div className="mb-4">
                    <label htmlFor="image">Image</label>
                    <input {...register('image', { required: true })} type="file" className="w-full border rounded px-2 py-[1px] md:py-1 text-white cursor-pointer" />
                </div>

                <div>
                    {
                        loading ? <button disabled={true} type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                           <TbLoader3 className='animate-spin'></TbLoader3>
                        </button>
                            : <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                    }
                </div>
            </div>
        </form>
    );
};

export default CandidateForm;
