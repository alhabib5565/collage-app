import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvaider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'logOut your account ',
                    'success'
                )
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const naviItems = [
        { id: 1, name: 'mycollage' },
        { id: 2, name: 'collages' },
        { id: 3, name: 'admission' },
        { id: 4, name: 'register' },
    ]
    return (
        <div className='bg-cyan-950 fixed z-10 h-20 w-full border-b-[1px] hover:shadow-xl border-gray-300 shadow-lg'>
            <div className='max-w-[1440px] mx-auto h-full flex justify-between items-center px-4 md-px-8 lg:px-14 text-white'>
                <Link to='/'>
                    <h2 className='text-2xl lg:text-4xl font-signature font-bold'>Collage Admission</h2>
                </Link>



                <ul className='hidden md:flex items-center gap-4 lg:gap-7'>


                    {
                        naviItems.map(navItem => <li className='text-gray-300 cursor-pointer  font-medium uppercase hover:text-white hover:scale-105 duration-300' key={navItem.id}>
                            <Link to={navItem.name}>
                                {navItem.name}
                            </Link>
                        </li>)
                    }
                    {
                        user ? <div className='flex gap-3 items-center'>
                            <li className='text-gray-300 cursor-pointer  font-medium uppercase hover:text-white hover:scale-105 duration-300'>
                            <Link to='mycollage'>
                            mycollage
                            </Link>
                        </li>
                            <button onClick={handleLogout} className="my-googleBtn bg-white">Log Out</button>
                            <img className='w-12 h-12 rounded-full border-2 border-yellow-300 p-[1px]' src={`${user?.photoURL}`} alt="" />
                            </div>
                             : <li className='text-gray-300 cursor-pointer  font-medium uppercase hover:text-white hover:scale-105 duration-300'>
                            <Link to='/login'>
                                login
                            </Link>
                        </li>
                    }
                </ul>

                <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer  text-gray-300 md:hidden">
                    {
                        menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                    }
                </div>

                {
                    menuOpen && <ul className='absolute top-20 box-border bg-cyan-950  w-[50vw] rounded-xl py-6 right-0'>
                        {
                            user ? <div className='flex px-6 mb-3 flex-col gap-3 items-center'>
                                <img className='w-16 h-16 rounded-full border-2 border-yellow-300 p-[1px]' src={`${user?.photoURL}`} alt="" />
                                <p>{user?.displayName}</p>
                                <button onClick={handleLogout} className=" my-googleBtn bg-white">Log Out</button>
                            </div>
                                : <Link to='/login'>
                                    <li className='text-gray-300 cursor-pointer  font-medium uppercase px-6 py-3 hover:bg-cyan-800  duration-300'>

                                        login
                                    </li>
                                </Link>
                        }
                        {
                            naviItems.map(navItem => <Link onClick={() => setMenuOpen(false)} to={navItem.name}>
                                <li className=' text-gray-300 cursor-pointer  font-medium uppercase px-6 py-3 hover:bg-cyan-800  duration-300' key={navItem.id}>
                                    {navItem.name}
                                </li>
                            </Link>)
                        }
                    </ul>
                }

            </div>
        </div>
    );
};

export default Navbar;