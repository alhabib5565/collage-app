import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import GoogleLogin from '../../components/GoogleLogin';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../provider/AuthProvaider';
import { saveUser } from '../../api/auth';

const Register = () => {
    const navigate = useNavigate()
    const { userCreate, profileUpdate } = useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const confimPass = data.ConfimPass
        const password = data.password
        if (confimPass !== password) {
            return toast.error("password not macth", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        console.log(data?.email, password)
        userCreate(data?.email, password)
            .then(result => {
                console.log(result.user)

                profileUpdate(data.name, data.photo)
                    .then(() => {
                        console.log(result.user)
                        saveUser(result.user)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Create Your Accout Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: `${error?.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    };

    return (
        <div className="min-h-[calc(100vh-0px)] flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>sport camp || register</title>
            </Helmet>
            <div className="max-w-md w-full pt-5 space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold bg-gradient-to-r 
                    from-cyan-500 to-red-500 bg-clip-text text-transparent">Create your account</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address">Name</label>
                            <input name="name" type="text" {...register("name")} className="my-input " placeholder="Your name" />
                        </div>

                        <div>
                            <label htmlFor="email-address">Photo URL</label>
                            <input name="email" type="text" {...register("photo")} className="my-input " placeholder="photo URL" />
                        </div>
                        <div>
                            <label htmlFor="email-address">Email address</label>
                            <input name="email" type="email" {...register("email", { required: true })} className="my-input " placeholder="Email address" />

                            {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
                        </div>

                        <div>
                            <label htmlFor="password" >Password</label>
                            <input id="password" name="password" type="password" {...register("password", { required: true, minLength: 6 })} className="my-input" placeholder="Password" />

                            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password length must be 6 </p>}

                        </div>

                        <div>
                            <label htmlFor="password" >Confirm Password</label>
                            <input name="password" type="password" {...register("ConfimPass", { required: true, minLength: 6 })} className="my-input" placeholder="Confirm Password" />

                            {errors.ConfimPass?.type === 'required' && <p className='text-red-500'>Confirm Password is required</p>}
                            {errors.ConfimPass?.type === 'minLength' && <p className='text-red-500'>Confirm Password length must be 6 </p>}
                        </div>
                    </div>

                    <div>
                        <label className="ml-2 text-sm text-gray-900">
                            New to this website <Link className='text-cyan-500 text-[17px] font-medium hover:text-cyan-600 hover:underline' to='/login'>login</Link>
                        </label>
                    </div>

                    <div>
                        <input type="submit" className="my-signInBtn" value='Register' />
                    </div>

                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;