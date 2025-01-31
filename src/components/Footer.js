import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "./Picture1.png";

export default function Footer() {
    return (
        <footer className=" py-10 border-t border-gray-700 fixed relative" >
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-8 lg:px-16">
                {/* Left Section: Company Info */}
                <div className="">
                <img 
                    src={logo}
                    alt="logo"
                    className="h-20 md:h-22"
                    style={{ maxHeight: "100px", width:"auto", marginLeft:"60px"}}
                />
                    <h2 className="text-xl font-bold mb-4">Amokhatrayi Ayur Wellness</h2>
                    <p className="text-sm ">
                        © 2024 Amokhatrayi Ayur Wellness. All rights reserved.
                    </p>
                    <p className="text-sm ">123 Wellness Lane, Health City, CA 90000</p>
                </div>

                {/* Center Section: Quick Links */}
                <div className="text-center" style={{alignItems:"center", marginRight:"180px"}}>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="/privacy-policy" className="text-sm  hover:text-blue-600 transition-colors duration-200">Privacy Policy</a>
                        </li>
                        <li className="mb-2">
                            <a href="/terms-of-service" className="text-sm hover:text-blue-600 transition-colors duration-200">Terms of Service</a>
                        </li>
                        <li className="mb-2">
                            <a href="/contact" className="text-sm  hover:text-blue-600 transition-colors duration-200">Contact Us</a>
                        </li>
                        <li>
                            <a href="/about" className="text-sm  hover:text-blue-600 transition-colors duration-200">About Us</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Social Media & Newsletter */}
                <div className="mr-4">
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <div className="flex space-x-4 mb-6">
                        <SocialIcon url="https://twitter.com/yourprofile" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://youtube.com/yourchannel" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://linkedin.com/in/yourprofile" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://facebook.com/yourprofile" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    </div>
                    {/* <form>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Subscribe to our newsletter</label>
                        <div className="flex">
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                className="w-full px-3 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </form> */}
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4">
                <p className="text-center text-sm">
                    Designed with ❤️ by Sangeetha R.
                </p>
            </div>
        </footer>
    );
}
