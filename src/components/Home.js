import React from "react";
import image from "../bg2.jpg"; // Background image
import HomeArticle from "./Home.post";
import ContactUs from "./Contact";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
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
        Amokhatrayi Wellness and Coaching Institute
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
