import React from 'react';
import { FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer class="bg-gray-900 mt-8 md:mt-14 lg:mt-20 text-white py-8">
            <div class="my-container mx-auto flex flex-wrap">
                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
                    <h3 class="text-xl mb-4">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et metus vel ex convallis rhoncus.</p>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
                    <h3 class="text-xl mb-4">Admissions</h3>
                    <ul>
                        <li><a href="#">Application Process</a></li>
                        <li><a href="#">Tuition & Fees</a></li>
                        <li><a href="#">Scholarships</a></li>
                        <li><a href="#">Financial Aid</a></li>
                    </ul>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
                    <h3 class="text-xl mb-4">Contact</h3>
                    <p>Email: admissions@example.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-8">
                    <h3 class="text-xl mb-4">Follow Us</h3>
                    <ul class="flex space-x-4">
                        <a href="#" className="text-blue-800 hover:text-blue-600">
                            {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
                            <FaFacebook size={25}></FaFacebook>
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-500">
                            {/* <FontAwesomeIcon icon={faYoutube} size="2x" /> */}
                            <FaYoutube size={25}></FaYoutube>
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-500">
                            {/* <FontAwesomeIcon icon={faGoogle} size="2x" /> */}
                            <FaGoogle size={25}></FaGoogle>
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )

};

export default Footer;
