// import React, {useEffect, useState} from "react";
// import client from "../client.js";
// import "./Youtube.css";


// export default function Youtube() {
//     const [youtubeData, setYoutubeData] = useState(null);

//     useEffect(() => {
//         client
//             .fetch(
//                 `*[_type == "youtube"]{
//                   title,
//                   thumbnail{
//                     asset ->{
//                         _id,
//                         url
//                     },
//                     alt
//                   },
//                   date,
//                   description,
//                   videoUrl,
//                   tags  
//                 }`
//             )
//             .then((data) => setYoutubeData(data))
//             .catch(console.error);
//     }, []);

//     return (
//         <main className="bg-green-200 min-h-screen p-5 fadeIn">
//             <section className="container mx-auto">
//                 <h1 className="text-3xl flex justify-center cursive">My Youtube Videos</h1>
//                 <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Youtube Page!</h2>
//                 <section className="grid grid-cols-4 gap-8">
                    
//                     {youtubeData &&
//                         youtubeData.map((youtube, index) => (
                            
//                             <article className="relative rounded-lg shadow-xl bg-white hoverGrow transition-transform duration-300">
                               
//                                 <span 
//                                         className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
//                                         key={index}
//                                 >
//                                         <img 
//                                             src={youtube.thumbnail.asset.url}
//                                             alt={youtube.thumbnail.alt}
//                                             className="w-full h-full rounded-r object-cover"
//                                         />
//                                 </span>

//                                 <h3 className=" text-gray-800 text-3xl font-bold mb-2 hover:text-red-700 text-center">
//                                     <a
//                                     href={youtube.videoUrl}
//                                     alt={youtube.title}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     >
//                                         {youtube.title}
//                                     </a>
//                                 </h3>
//                                 <div className="text-gray-500 text-xs space-x-4">
//                                     <span>
//                                         <strong className="font-bold mx-5">Uploaded On</strong>:{" "}
//                                         {new Date(youtube.date).toLocaleDateString()}
//                                     </span>
//                                     <p className="my-6 text-lg text-gray-700 leading-relaxed">
//                                         {youtube.description}
//                                     </p>
//                                     <a
//                                     href={youtube.videoUrl}
//                                     rel="noopener noreferrer"
//                                     target="_blank"
//                                     className="text-blue-500 font-bold hover:underline hover:text-red-400 text-xl"
//                                     >
//                                         View on youtube{" "}
//                                         <span role="img" aria-label="right pointer">
//                                           👉
//                                         </span>
//                                     </a>
//                                 </div>
//                             </article>
//                         ))}
//                 </section>
//             </section>
//         </main>
//     );
// }


import React, { useEffect, useState } from "react";
import client from "../client.js";
import "./Youtube.css";

export default function Youtube() {
  const [youtubeData, setYoutubeData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "youtube"]{
          title,
          thumbnail {
            asset -> {
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
    <main className="bg-green-50 min-h-screen p-4 md:p-10 fadeIn">
      <section className="container mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-green-700 mb-2 cursive">
            My Youtube Videos
          </h1>
          <h2 className="text-sm md:text-lg text-gray-600">
            Welcome to my Youtube Page!
          </h2>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {youtubeData &&
            youtubeData.map((youtube, index) => (
              <article
                key={index}
                className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={youtube.thumbnail.asset.url}
                    alt={youtube.thumbnail.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 hover:text-green-600 text-center">
                    <a
                      href={youtube.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {youtube.title}
                    </a>
                  </h3>

                  <p className="text-xs text-gray-500 mb-2 text-center">
                    Uploaded on: {new Date(youtube.date).toLocaleDateString()}
                  </p>

                  <p className="text-sm text-gray-600 flex-grow mb-4">
                    {youtube.description.length > 100
                      ? youtube.description.substring(0, 100) + "..."
                      : youtube.description}
                  </p>

                  <div className="text-center mt-auto">
                    <a
                      href={youtube.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-green-600 font-semibold hover:underline hover:text-red-400 text-sm md:text-base"
                    >
                      View on YouTube 👉
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
