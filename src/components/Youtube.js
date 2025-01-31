import React, {useEffect, useState} from "react";
import client from "../client.js";
import "./Youtube.css";


export default function Youtube() {
    const [youtubeData, setYoutubeData] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "youtube"]{
                  title,
                  thumbnail{
                    asset ->{
                        _id,
                        url
                    },
                    alt
                  },
                  date,
                  description,
                  videoUrl,
                  tags  
                }`
            )
            .then((data) => setYoutubeData(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-green-200 min-h-screen p-5 fadeIn">
            <section className="container mx-auto">
                <h1 className="text-3xl flex justify-center cursive">My Youtube Videos</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Youtube Page!</h2>
                <section className="grid grid-cols-4 gap-8">
                    
                    {youtubeData &&
                        youtubeData.map((youtube, index) => (
                            
                            <article className="relative rounded-lg shadow-xl bg-white hoverGrow transition-transform duration-300">
                               
                                <span 
                                        className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                                        key={index}
                                >
                                        <img 
                                            src={youtube.thumbnail.asset.url}
                                            alt={youtube.thumbnail.alt}
                                            className="w-full h-full rounded-r object-cover"
                                        />
                                </span>

                                <h3 className=" text-gray-800 text-3xl font-bold mb-2 hover:text-red-700 text-center">
                                    <a
                                    href={youtube.videoUrl}
                                    alt={youtube.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        {youtube.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold mx-5">Uploaded On</strong>:{" "}
                                        {new Date(youtube.date).toLocaleDateString()}
                                    </span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                        {youtube.description}
                                    </p>
                                    <a
                                    href={youtube.videoUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="text-blue-500 font-bold hover:underline hover:text-red-400 text-xl"
                                    >
                                        View on youtube{" "}
                                        <span role="img" aria-label="right pointer">
                                          👉
                                        </span>
                                    </a>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );
}