// import React, {useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
// import client from "../client.js";
// // import  ImageUrlBuilder  from "@sanity/image-url";
// import BlockContent from "@sanity/block-content-to-react";

// // const builder = ImageUrlBuilder(client);
// // function urlFor(source) {
// //     return builder.image(source);
// // }

// export default function SingleEvent() {
//     const [singleEvent, setSingleEvent] = useState(null);
//     const {slug} = useParams();

//     useEffect(() => {
//         client
//             .fetch(
//                 `*[slug.current == "${slug}"]{
//                     title,
//                     _id,
//                     slug,
//                     image{
//                         asset->{
//                             _id,
//                             url
//                         }
//                     },
//                     body,
                    
//                 }`
//             )
//             .then((data) => setSingleEvent(data[0]))
//             .catch(console.error);
//     }, [slug]);

//     if (!singleEvent) return <div> Loading...</div>;

//     return (
//         <main className="bg-gray-200 min-h-screen p-12">
//             <article className="container shadow-lg mx-auto bg-screen-100 rounded-lg">
//                 <header className="relative">
//                     <div className="absolute h-full w-full flex items-center justify-center p-8">
//                         <div className="bg-white bg-opacity-75 rounded p-12">
//                             <h1 className="cursive text-3xl lg:text-6xl mb-4" style={{color:"steelblue"}}>
//                                 {singleEvent.title}
//                             </h1>
//                             {/* <div className="flex justify-center text-gray-800">
//                                 <img
//                                     src={urlFor(singleEvent.authorImage).url()}
//                                     alt={singlePost.name}
//                                     className="w-10 h-10 rounded-full"
//                                 />
//                                 <p className="cursive flex items-center pl-2 text-2xl">
//                                     {singlePost.name}
//                                 </p>
//                             </div> */}
//                         </div>
//                     </div>
//                     <img
//                         src={singleEvent.image.asset.url}
//                         alt={singleEvent.title}
//                         className="w-full object-cover rounded-t"
//                         style={{height: "400px"}}
//                     />
//                 </header>
//                 <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full" style={{color:"slategrey"}}>
//                     <BlockContent
//                         blocks={singleEvent.body}
//                         projectId="nqns82nc"
//                         dataset="production"
//                     />
//                 </div>
//             </article>
//         </main>
//     );
// }


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function SingleEvent() {
  const [singleEvent, setSingleEvent] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          image {
            asset->{
              _id,
              url
            }
          },
          body,
        }`
      )
      .then((data) => setSingleEvent(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleEvent) return <div className="text-center text-gray-600 p-10">Loading...</div>;

  return (
    <main className="bg-gray-100 min-h-screen p-6 md:p-12">
      <article className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        
        {/* Header section */}
        <header className="relative">
          <img
            src={singleEvent.image.asset.url}
            alt={singleEvent.title}
            className="w-full h-auto max-h-[400px] object-contain bg-white"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 p-6 rounded shadow-md">
              <h1 className="text-xl md:text-4xl font-bold text-center text-blue-700">
                {singleEvent.title}
              </h1>
            </div>
          </div>
        </header>

        {/* Body section */}
        <section className="px-6 md:px-16 py-10 md:py-16 text-gray-700">
          <BlockContent
            blocks={singleEvent.body}
            projectId="nqns82nc"
            dataset="production"
          />
        </section>
        
      </article>
    </main>
  );
}
