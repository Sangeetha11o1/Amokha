// import React, {useState, useEffect} from "react";
// import  client  from "../client.js";
// import { Link } from "react-router-dom";
// import "../components/Post.css";


// export default function Post() {
//     const [postData, setPost] = useState(null);

//     useEffect(() => {
//         client
//             .fetch(`*[_type == "post"]{
//                 title,
//                 slug,
//                 mainImage{
//                     asset->{
//                         _id,
//                         url
//                     },
//                     alt
//                 }

//             }`)
//             .then((data) => setPost(data))
//             .catch(console.error);
//     }, []);
//     return (
//         <main className="bg-green-200 min-h-screen p-12 fadeIn">
//             <section className="container mx-auto">
//                 <h1 className="text-5xl flex justify-center cursive">
//                     Articles Page
//                 </h1>
//                 <h2 className="text-lg text-gray-600 flex justify-center mb-12">
//                     Welcome to my page of articles
//                 </h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {postData && postData.map((post, index) => (
//                             <article className="hoverGrow">
//                                 <Link to={"/post/" + post.slug.current} key={post.slug.current}>
//                                     <span 
//                                         className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
//                                         key={index}
//                                     >
//                                         <img 
//                                             src={post.mainImage.asset.url}
//                                             alt={post.mainImage.alt}
//                                             className="w-full h-full rounded-r object-cover absolute"
//                                         />
//                                         <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
//                                             <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded ">
//                                                 {post.title}
//                                             </h3>
//                                         </span>
//                                     </span>
//                                 </Link>
//                             </article>
//                     ))}
//                 </div>
//             </section>
//         </main>
//     );
// }

import React, { useState, useEffect } from "react";
import client from "../client.js";
import { Link } from "react-router-dom";
import "../components/Post.css";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-50 min-h-screen p-4 md:p-10 fadeIn">
      <section className="container mx-auto">
        
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-green-700 mb-2 cursive">
            Articles Page
          </h1>
          <h2 className="text-sm md:text-lg text-gray-600">
            Welcome to my page of articles
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article
                key={post.slug.current}
                className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image Container */}
                <Link to={"/post/" + post.slug.current}>
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-4 flex flex-col justify-end h-28">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 hover:text-green-600 bg-red-700 bg-opacity-80 text-white p-2 rounded">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
        </div>

      </section>
    </main>
  );
}
