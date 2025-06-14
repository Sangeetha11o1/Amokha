// import React from "react";
// import { SocialIcon } from "react-social-icons";
// import logo from "./Picture1.png";

// export default function Footer() {
//     return (
//         <footer className=" py-10 fixed relative" >
//             <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-8 lg:px-16">
//                 {/* Left Section: Company Info */}
//                 <div className="">
//                 <img 
//                     src={logo}
//                     alt="logo"
//                     className="h-20 md:h-22"
//                     style={{ maxHeight: "100px", width:"auto", marginLeft:"60px"}}
//                 />
//                     <h2 className="text-xl font-bold mb-4" style={{ color: "orange"}}>Amokhatrayi Ayur Wellness</h2>
//                     <p className="text-sm " style={{ color: "darkslategray"}}>
//                         © 2024 Amokhatrayi Ayur Wellness. All rights reserved.
//                     </p>
//                     <p className="text-sm " style={{color:"darkslategray"}}>123 Wellness Lane, Health City, CA 90000</p>
//                 </div>

//                 {/* Center Section: Quick Links */}
//                 <div className="text-center" style={{alignItems:"center", marginRight:"180px", color: "darkslategray"}}>
//                     <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//                     <ul>
//                         <li className="mb-2">
//                             <a href="/privacy-policy" className="text-sm  hover:text-blue-600 transition-colors duration-200">Privacy Policy</a>
//                         </li>
//                         <li className="mb-2">
//                             <a href="/terms-of-service" className="text-sm hover:text-blue-600 transition-colors duration-200">Terms of Service</a>
//                         </li>
//                         <li className="mb-2">
//                             <a href="/contact" className="text-sm  hover:text-blue-600 transition-colors duration-200">Contact Us</a>
//                         </li>
//                         <li>
//                             <a href="/about" className="text-sm  hover:text-blue-600 transition-colors duration-200">About Us</a>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Section: Social Media & Newsletter */}
//                 <div className="mr-4" style={{color:"darkslategray"}}>
//                     <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
//                     <div className="flex space-x-4 mb-6">
//                         <SocialIcon url="https://twitter.com/yourprofile" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                         <SocialIcon url="https://youtube.com/yourchannel" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                         <SocialIcon url="https://linkedin.com/in/yourprofile" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                         <SocialIcon url="https://facebook.com/yourprofile" fgColor="#fff" style={{ height: 35, width: 35 }} />
//                     </div>
//                     {/* <form>
//                         <label htmlFor="email" className="block text-sm font-medium mb-2">Subscribe to our newsletter</label>
//                         <div className="flex">
//                             <input
//                                 type="email"
//                                 id="email"
//                                 placeholder="Your email"
//                                 className="w-full px-3 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500 transition-colors duration-200">
//                                 Subscribe
//                             </button>
//                         </div>
//                     </form> */}
//                 </div>
//             </div>

//             <div className="mt-8 border-t border-gray-700 pt-4" style={{color:"darkslategray"}}>
//                 <p className="text-center text-sm">
//                     Designed with ❤️ by Sangeetha R.
//                 </p>
//             </div>
//         </footer>
//     );
// }


import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "./logomain.png";

export default function Footer() {
  return (
    <footer className="bg-green-100 py-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
   {/* Left Section */}
<div className="flex flex-col items-center md:items-start text-center md:text-left">
  <img 
    src={logo}
    alt="logo"
    className=" mb-2"
    style={{marginLeft: "30px", height: "12rem"}}   // slightly bigger
  />
  <h2 className="text-xl font-bold text-orange-500">Amokhatrayi Wellness and Coaching Institute</h2>
  <p className="text-sm text-gray-700 ">© 2024 Amokhatrayi Wellness and Coaching Institute. All rights reserved.</p>
  <p className="text-sm text-gray-700">123 Wellness Lane, Health City, CA 90000</p>
</div>



        {/* Center Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="text-sm text-gray-700 hover:text-blue-100 transition-colors duration-200">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-sm text-gray-700 hover:text-blue-100 transition-colors duration-200">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="text-sm text-gray-700 hover:text-blue-100 transition-colors duration-200">Contact Us</a>
            </li>
            <li>
              <a href="/about" className="text-sm text-gray-700 hover:text-blue-100 transition-colors duration-200">About Us</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Stay Connected</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-6">
            {/* <SocialIcon url="https://twitter.com/yourprofile" fgColor="#fff" bgColor="#1DA1F2" style={{ height: 35, width: 35 }} /> */}
            <SocialIcon url="https://youtube.com/yourchannel" fgColor="#fff" bgColor="#FF0000" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://linkedin.com/in/yourprofile" fgColor="#fff" bgColor="#0077B5" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://instagram.com/yourprofile" fgColor="#fff" bgColor="#E1306C" style={{ height: 35, width: 35 }} />
          </div>

          {/* Optional Newsletter form - uncomment if needed */}
          {/* <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-l bg-gray-200 focus:outline-none"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
              Subscribe
            </button>
          </form> */}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-700">
        Designed with ❤️ by Sangeetha R.
      </div>
    </footer>
  );
}




