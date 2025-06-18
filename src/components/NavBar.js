// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";

// export default function NavBar() {
//   const [hoveredLink, setHoveredLink] = useState(null);

//   const handleMouseEnter = (link) => {
//     setHoveredLink(link);
//   };

//   const handleMouseLeave = () => {
//     setHoveredLink(null);
//   };

//   return (
//     <header className="nav-bg">
//       <div className="nav mx-auto flex justify-between">
//         <nav className="flex">
//           <NavLink
//             to="/"
//             exact
//             activeClassName="text-white"
//             className="inline-flex items-center px-3 my-5 text-red-100 text-2xl font-bold cursive"
//             style={{
//                 color: hoveredLink === "/" ? "#32CD32" : undefined,
//               }}
//               onMouseEnter={() => handleMouseEnter("/")}
//               onMouseLeave={handleMouseLeave}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/post"
//             className="inline-flex items-center px-3 my-5 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "post" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("post")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Articles
//           </NavLink>
//           <NavLink
//             to="/youtube"
//             className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "youtube" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("youtube")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Youtube
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "about" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={handleMouseLeave}
//           >
//             About Me!
//           </NavLink>
//         </nav>
//         <div className="nav inline-flex py-0 px-0 my-3">
//           <SocialIcon
//             url="https://twitter.com/kapehe_ok"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }}
//           />
//           <SocialIcon
//             url="https://youtube.com/c/kapehe"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }}
//           />
//           <SocialIcon
//             url="https://linkedin.com/in/kapehe_ok"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }}
//           />
//         </div>
//       </div>
//     </header>
//   );
// }


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
// import logo from "./logomain.png";

// export default function NavBar() {
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMouseEnter = (link) => {
//     setHoveredLink(link);
//   };

//   const handleMouseLeave = () => {
//     setHoveredLink(null);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="nav-bg w-full">
//       <div className="nav mx-auto flex justify-between items-center">
//         {/* Logo or Brand Name */}
        
//         <NavLink
//           to="/"
//           exact
//           // activeClassName="text-white"
//           className="inline-flex items-center px-3 my-5"
//           // style={{
//           //   color: hoveredLink === "/" ? "#32CD32" : undefined,
//           // }}
//           onMouseEnter={() => handleMouseEnter("/")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img 
//   src={logo}
//   alt="logo"
//   className="h-12 md:h-16"   // just a bit bigger, safe values
// />

          
//         </NavLink>
//         {/* Hamburger Menu Button (visible on small screens) */}
//         <button
//           onClick={toggleMenu}
//           className="text-white md:hidden focus:outline-none z-50"
//         >
//           {menuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
        
//         {/* Navbar Links (visible on medium and large screens) */}

//         <nav className="hidden md:flex">
//         <NavLink
//           to="/"
//           exact
//           activeClassName="text-white"
//           className="inline-flex items-center px-3 my-5 text-red-100 text-2xl font-bold cursive"
//           style={{
//             color: hoveredLink === "/" ? "#32CD32" : undefined,
//           }}
//           onMouseEnter={() => handleMouseEnter("/")}
//           onMouseLeave={handleMouseLeave}
//         >
//           Home
//         </NavLink>
//           <NavLink
//             to="/post"
//             className="inline-flex items-center px-3 my-5 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "post" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("post")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Articles
//           </NavLink>
//           <NavLink
//             to="/youtube"
//             className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "youtube" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("youtube")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Youtube
//           </NavLink>
//           <NavLink
//             to="/event"
//             className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "event" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("event")}
//             onMouseLeave={handleMouseLeave}
//           >
//             EventsPage
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "about" ? "#32CD32" : undefined,
//             }}
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={handleMouseLeave}
//           >
//             About Me!
//           </NavLink>
//         </nav>

//         {/* Social Icons (always visible) */}
//         <div className="hidden md:flex inline-flex py-0 px-0 my-3">
//           <SocialIcon
//             url="https://instagram.com/your_profile"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }}
//           />
//           <SocialIcon
//             url="https://youtube.com/c/your_profile"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }}
//           />
//           <SocialIcon
//             url="https://linkedin.com/in/your_profile"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }}
//           />
//         </div>
//       </div>
      
//       {/* Hamburger Menu Content (visible on small screens) */}
//       {menuOpen && (
//         <nav className="flex flex-col justify-center items-center h-screen w-full bg-blue-500 absolute top-0 left-0 z-40">
//           <NavLink
//             to="/"
//             exact
//             activeClassName="text-white"
//             className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
//             style={{
//               color: hoveredLink === "/" ? "#32CD32" : undefined,
//             }}
//             onClick={closeMenu}
//             onMouseEnter={() => handleMouseEnter("/")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/post"
//             className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "post" ? "#32CD32" : undefined,
//             }}
//             onClick={closeMenu}
//             onMouseEnter={() => handleMouseEnter("post")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Articles
//           </NavLink>
//           <NavLink
//             to="/youtube"
//             className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "youtube" ? "#32CD32" : undefined,
//             }}
//             onClick={closeMenu}
//             onMouseEnter={() => handleMouseEnter("youtube")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Youtube
//           </NavLink>
//           <NavLink
//             to="/event"
//             className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "event" ? "#32CD32" : undefined,
//             }}
//             onClick={closeMenu}
//             onMouseEnter={() => handleMouseEnter("event")}
//             onMouseLeave={handleMouseLeave}
//           >
//             EventsPage
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
//             activeClassName="text-red-100 bg-red-700"
//             style={{
//               color: hoveredLink === "about" ? "#32CD32" : undefined,
//             }}
//             onClick={closeMenu}
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={handleMouseLeave}
//           >
//             About Me!
//           </NavLink>
//           <div className="flex justify-center mt-4">
//             <SocialIcon
//               url="https://twitter.com/kapehe_ok"
//               className="mr-4"
//               target="_blank"
//               fgColor="#fff"
//               style={{ height: 35, width: 35 }}
//             />
//             <SocialIcon
//               url="https://youtube.com/c/kapehe"
//               className="mr-4"
//               target="_blank"
//               fgColor="#fff"
//               style={{ height: 35, width: 35 }}
//             />
//             <SocialIcon
//               url="https://linkedin.com/in/kapehe_ok"
//               className="mr-4"
//               target="_blank"
//               fgColor="#fff"
//               style={{ height: 35, width: 35 }}
//             />
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "./logomain.png";

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-bg w-full">
      <div className="nav mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <NavLink
          to="/"
          exact
          className="inline-flex items-center px-3 my-5"
          onMouseEnter={() => handleMouseEnter("/")}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={logo}
            alt="logo"
            className="h-24 md:h-32"  /* <== Just a little bigger now */
          />
        </NavLink>

        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none z-50"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navbar Links (desktop) */}
        <nav className="hidden md:flex">
          {/* Same links as your code — unchanged */}
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center px-3 my-5 text-red-100 text-2xl font-bold cursive"
            style={{
              color: hoveredLink === "/" ? "#32CD32" : undefined,
            }}
            onMouseEnter={() => handleMouseEnter("/")}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center px-3 my-5 rounded text-red-100 text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "post" ? "#32CD32" : undefined,
            }}
            onMouseEnter={() => handleMouseEnter("post")}
            onMouseLeave={handleMouseLeave}
          >
            Articles
          </NavLink>
          <NavLink
            to="/youtube"
            className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "youtube" ? "#32CD32" : undefined,
            }}
            onMouseEnter={() => handleMouseEnter("youtube")}
            onMouseLeave={handleMouseLeave}
          >
            Youtube
          </NavLink>
          <NavLink
            to="/services"
            className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "services" ? "#32CD32" : undefined,
            }}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            Services
          </NavLink>
          <NavLink
            to="/event"
            className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "event" ? "#32CD32" : undefined,
            }}
            onMouseEnter={() => handleMouseEnter("event")}
            onMouseLeave={handleMouseLeave}
          >
            EventsPage
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center px-3 my-6 rounded text-red-100 text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "about" ? "#32CD32" : undefined,
            }}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            About Me!
          </NavLink>
        </nav>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex inline-flex py-0 px-0 my-3">
          <SocialIcon
            url="https://instagram.com/your_profile"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/c/your_profile"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/your_profile"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>

      {/* Hamburger menu content */}
      {menuOpen && (
        <nav className="flex flex-col justify-center items-center h-screen w-full bg-blue-500 absolute top-0 left-0 z-40">
          {/* Mobile links — same as your code */}
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
            style={{
              color: hoveredLink === "/" ? "#32CD32" : undefined,
            }}
            onClick={closeMenu}
            onMouseEnter={() => handleMouseEnter("/")}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "post" ? "#32CD32" : undefined,
            }}
            onClick={closeMenu}
            onMouseEnter={() => handleMouseEnter("post")}
            onMouseLeave={handleMouseLeave}
          >
            Articles
          </NavLink>
          <NavLink
            to="/youtube"
            className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "youtube" ? "#32CD32" : undefined,
            }}
            onClick={closeMenu}
            onMouseEnter={() => handleMouseEnter("youtube")}
            onMouseLeave={handleMouseLeave}
          >
            Youtube
          </NavLink>
          <NavLink
            to="/event"
            className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "event" ? "#32CD32" : undefined,
            }}
            onClick={closeMenu}
            onMouseEnter={() => handleMouseEnter("event")}
            onMouseLeave={handleMouseLeave}
          >
            EventsPage
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center px-3 py-2 my-2 rounded text-red-100 text-xl md:text-2xl font-bold cursive"
            activeClassName="text-red-100 bg-red-700"
            style={{
              color: hoveredLink === "about" ? "#32CD32" : undefined,
            }}
            onClick={closeMenu}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            About Me!
          </NavLink>
          <div className="flex justify-center mt-4">
            <SocialIcon
              url="https://twitter.com/kapehe_ok"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://youtube.com/c/kapehe"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://linkedin.com/in/kapehe_ok"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>
      )}
    </header>
  );
}








