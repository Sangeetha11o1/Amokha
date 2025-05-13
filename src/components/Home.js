// import React from "react";
// // import image from "../bg.jpg";
// import image from "../freepik-export-20240813062630iF7k.png";
// import HomeArticle from "./Home.post";
// import "./Home.css"

// export default function Home() {
//     return (
//         <main className="home min-h-screen overflow-hidden">
//             <img
//             className="absolute  pt-12 h-full fadeIn"
//             src={image}
//             alt=""/>
//             <a href="https://www.freepik.com/free-photo/herbal-compress-herbal-spa-treatment-equipments-put-dark-floor_11407549.htm" className="font-xs absolute bottom-0 right-0 m-2 text-xs text-white bg-gray-800 p-1 rounded">Image by jcomp on Freepik</a>
            
//             <section className="relative flex justify-center  min-h-screen ">
//                 <h1 className="text-6xl text-black-500 leading-none lg:leading-snug slideUp text-align-center" style={{fontVariant:"petite-caps", fontFamily:"emoji"}}>Amokhatrayi Ayur Wellness</h1>
//                 <h6 className="absolute right-0  mr-24 text-center text-yellow-700 leading-snug mt-32 max-w-md text-2xl " style={{fontVariant:"petite-caps", fontFamily:"emoji"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
//             </section>
//             {/* <section className="relative z-10 bg-white animate-fadeIn"> */}
//                 <HomeArticle />
//             {/* </section> */}

//         </main>
//     );
// }





// import React from "react";
// // import image from "../overhead-view-dried-tea-herbs-isolated-white-backdrop.jpg";
// import image from "../bg2.jpg"
// import HomeArticle from "./Home.post";
// import ContactUs from "./Contact";
// import "./Home.css";

// export default function Home() {
//     return (
//         <main className="home min-h-screen overflow-hidden relative">
//              <img
//                 className="absolute inset-0 w-full h-120 object-cover fadeIn"
//                 src={image}
//                 alt=""
//             />
//             <a 
//                 href="https://www.freepik.com/free-photo/herbal-compress-herbal-spa-treatment-equipments-put-dark-floor_11407549.htm" 
//                 className="font-xs absolute bottom-0 right-0 m-2 text-xs text-white bg-gray-800 p-1 rounded"
//             >
//                 Image by jcomp on Freepik
//             </a>

//             <section className="relative flex flex-col justify-center items-center min-h-screen p-6 text-center">
//                 <h1 
//                     className="text-4xl md:text-6xl text-black-500 leading-none lg:leading-snug slideUp"
//                     style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
//                 >
//                     Amokhatrayi Ayur Wellness
//                 </h1>
//                 <h6 
//                     className="mt-6 md:mt-12 text-black-100 leading-snug max-w-md text-lg md:text-3xl"
//                     style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
//                 >
//                     Tailored Ayurvedic solutions for your unique needs.<br/> Discover the transformative power of ancient wisdom at Amokhatrayi.
//                    <br/> Your well-being is our priority. <br/>Experience personalized Ayurvedic care through our classes, cosmetics, and online treatments.
//                     {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
//                 </h6> 
            
//             </section>  
//             <HomeArticle />
//             <ContactUs />

//         </main>
//     );
// }



import React from "react";
import image from "../bg2.jpg"; // Background image
import HomeArticle from "./Home.post";
import ContactUs from "./Contact";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
        // <main className="home min-h-screen relative">
        //     {/* Background Image */}
        //     <img
        //         className="absolute inset-0 w-full   object-cover"
        //         src={image}
        //         alt="Background"
        //     />

        //     {/* Glassy Left Half */}
        //     <div className="glass-left flex items-center overflow-hidden h-svh">

        //     {/* Content */}
        //     <section className="relative flex flex-col justify-center items-center min-h-screen  text-center z-10">
        //     {/* <section className="relative flex flex-col justify-center items-center min-h-screen p-6 text-center z-10  sm:p-8 sm:text-left md:flex-row md:gap-6 lg:min-h-[80vh] lg:p-16"> */}

        //         <h1
        //             className="text-xl  md:text-5xl text-black leading-none lg:leading-snug"
        //             style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
        //         >
        //             Amokhatrayi Ayur Wellness
        //         </h1>
        //         {/* <h6
        //             className="
        //             mt-6 
        //             md:mt-12
        //             text-black 
        //             leading-snug 
        //             max-w-md 
        //             text-lg 
        //             md:text-3xl
        //             "
        //             style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
        //         > */}
        //         <h6
        //             className="
        //             text-sm
        //             md:text-xl
        //             p-2
        //             text-black 
        //             leading-snug 
        //             top-0
        //             "
        //             style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
        //         >
        //             Tailored Ayurvedic solutions for your unique needs.<br />
        //             Discover the transformative power of ancient wisdom at
        //             Amokhatrayi.
        //             <br /> Your well-being is our priority. <br />
        //             Experience personalized Ayurvedic care through our classes,
        //             cosmetics, and online treatments.
        //         </h6>
        //         <button
        //             className=" cursive
        //             mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-full 
        //             hover:bg-blue-700 hover:scale-110 transform transition-all duration-300 
        //             animate-pulse
        //             "
        //             onMouseEnter={(e) =>
        //             e.target.classList.add("hover:animate-zoom")
        //             }
        //             onMouseLeave={(e) =>
        //             e.target.classList.remove("hover:animate-zoom")
        //             }
        //         >
        //             Get in Touch
        //         </button>
        //     </section>
        //     </div>

        //     {/* Other Sections */}
        //     <HomeArticle />
        //     <ContactUs />
        // </main>

    <main className="home  w-full relative">
  {/* Background Image */}
  <img
    className="absolute inset-0 w-full  object-cover"
    src={image}
    alt="Background"
  />
  <a href="https://www.freepik.com/free-ai-image/still-life-yoga-equipment_268347330.htm" className="font-xs absolute  right-0 m-2 text-xs text-white bg-gray-800 p-1 rounded z-10">Image by jcomp on Freepik</a>


  {/* Glassy Left Half */}
  <div
    className=" glass-left
       top-0 left-0 h-full w-full md:w-1/2
      sm-w-full
      flex flex-col justify-center items-center 
      p-4 sm:p-6 md:p-8 lg:p-12 
    "
  >
    {/* Content */}
    <section
      className="
        relative flex flex-col justify-center items-center 
        text-center 
        w-full max-w-md sm:max-w-lg lg:max-w-xl 
        h-full
      "
    >
      <h1
        className="
          text-xl sm:text-3xl md:text-5xl 
           leading-tight lg:leading-snug 
        "
        style={{ fontVariant: "petite-caps", fontFamily: "emoji", color: "darkslategrey" }}
      >
        Amokhatrayi Ayur Wellness
      </h1>
      <h6
        className="
          mt-4 sm:mt-6 md:mt-8 
           sm:text-xs md:text-xl lg:text-3xl
           leading-snug 
        "
        style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
      >
        Tailored Ayurvedic solutions for your unique needs.<br />
        Discover the transformative power of ancient wisdom at Amokhatrayi.
        <br /> Your well-being is our priority. <br />
        Experience personalized Ayurvedic care through our classes, cosmetics,
        and online treatments.
      </h6>
      {/* Get in Touch Button */}
      <Link to="./contact">
      <button
        className="cursive
          mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-full 
          hover:bg-blue-700 hover:scale-110 transform transition-all duration-300 
          animate-pulse
        "
      >
        Get in Touch
      </button>
      </Link>
    </section>
  </div>

  {/* Other Sections */}
  <HomeArticle />
  <ContactUs />
</main>

    );
}
