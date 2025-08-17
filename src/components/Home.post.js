import React from "react";
import { Link } from "react-router-dom";
import image from "../bgg.jpg";
// import "./Home.post.css";

function HomeArticle() {
    return (
        <main className="relative min-h-screen bg-yellow-100 p-6 md:p-12 fadeIn">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-bold text-center text-blue-500 cursive mb-8 fade-in">
                    My Articles
                </h3>

                {/* Content Section */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-8 fade-in">
                        <h1 
                            className="text-3xl md:text-5xl font-bold mb-6" 
                            style={{ fontVariant: "petite-caps", fontFamily: "emoji", color: "dimgray" }}
                        >
                            Are you seeking exciting articles that will challenge and inspire you?
                        </h1>
                        <div className="mt-6">
                            <Link 
                                to="/post" 
                                className="inline-block px-6 py-3 text-blue-600 hover:text-white hover:bg-blue-600 border-2 border-blue-600 rounded-full transition duration-300 font-semibold text-lg"
                                style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}
                            >
                                Explore <span className="ml-2">&#x2BA9;</span>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 relative slide-in">
                        <img 
                            src={image} 
                            alt="alt" 
                            className="w-full h-72 md:h-full object-cover rounded-lg shadow-lg"
                        />
                        <a 
                            href="https://www.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_9028015.htm" 
                            className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-75 hover:opacity-100 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Image by jcomp on Freepik
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomeArticle;
