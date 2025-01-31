import React from "react";
import { Link } from "react-router-dom";
import image from "../bgg.jpg";
// import "./Home.post.css"

function HomeArticle() {
    return(

        <main className="homepost relative min-h-screen bg-yellow-200 ">
            <hr />
            <br/>
            <h3 className="text-4xl font-bold text-center text-blue-500 cursive fade-in ">My Articles</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center ">
                <div className="w-full lg:w-1/2 p-8 lg:p-16 fade-in">
                    <h1 className="text-5xl font-bold mb-4" style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}>Are you seeking exciting articles that will challenge and inspire you?</h1>
                    <div className="px-64">
                        <Link to="./post" className="text-2xl text-center font-bold text-blue-500 hover:text-blue-700 arrow-link" style={{ fontVariant: "petite-caps", fontFamily: "emoji" }}>
                            Explore <span className="ml-2">&#x2BA9;</span>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-12 slide-in">
                    <img src={image} alt="alt" className="w-full h-full object-cover"/>
                    <a href="https://www.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_9028015.htm" className="font-xs absolute  right-0 m-2 text-xs text-white bg-gray-800 p-1 rounded z-10">Image by jcomp on Freepik</a>
                </div>
            </div>
            <br/>
            <hr/>
        </main>
        
    );
}

export default HomeArticle;