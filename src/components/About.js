// import React, {useEffect, useState} from "react";
// import client from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
// import logo from "./Picture1.png";

// const builder = imageUrlBuilder(client);
// function urlFor(source) {
//     return builder.image(source);
// }


// export default function About() {
//     const [author, setAuthor] = useState(null);

//     useEffect(() => {
//         client
//           .fetch(
//             `*[_type == "author"]{
//                 name,
//                 "bio": bio[0].children[0].text,
//                 "authorImage": image.asset->url
//             }`
//           )
//           .then((data) => setAuthor(data[0]))
//           .catch(console.error);
//     }, []);

//     if (!author) return <div>Loading...</div>;


//     return (
//         <main className="relative bg-blue-100">
//             {/* <img src={bg} alt="bg pic" className="absolute cover w-full"/> */}
//             <div className="p-10 container mx-auto relative">

//                     <section className=" rounded-lg shadow-xl lg:flex p-20 mb-16">
                            
//                             <img src={logo}
//                                 alt="logo"
//                                 className=" md:h-22 mt-32"
//                                 style={{ maxHeight: "200px", width:"auto"}}/>
                        
//                         <div>
//                         <h1 className="cursive text-5xl p-4 ml-32 " style={{color:"darkcyan"}}>
//                                 Amokhatrayi Ayur Wellness
//                         </h1>
//                         <p className=" cursive text-lg  mt-2 ml-32" style={{color:"slategrey"}}>
//                     Amokhatrayi,  is a budding ayurvedic wellness brand,rooted in the traditional indian herbal and vedic wisdom.Founded in 2024 by Dr. Athira Mohan .K ,we at Amokhatrayi is committed to provide effective ayurvedic healthcare solitions for the modern health complaints and guidance to those who look up to Ayurveda for their health concerns.
//     We disseminate the message of Ayurveda in shaping a way of life tailored to the natural make up of the body and its health demands.We offer  various services like ayurvedic education,training,counselling,ayurvedic product marketing,yoga and meditation classes,cosmetic treatments..and more,wherever the ayurveda can give better results.
//                         </p>
//                         </div>
//                     </section>

//                     <section className=" rounded-lg shadow-xl lg:flex p-20 mb-16">
//                         <img
//                             src={urlFor(author.authorImage).url()}
//                             className=" profile_pic rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
//                             alt="Amokha"
//                         />
//                         <div className=" cursive text-lg flex flex-col justify-center">
//                             <h1 className=" text-6xl mb-4" style={{color:"dimgrey"}}>
//                                 Hey there, I'm {" "}
//                                 <span className="text-blue-600">{author.name}</span>
//                             </h1>
//                             <p className="text-lg" style={{color:"dimgrey"}}>{author.bio}</p>
//                         </div>
//                     </section>
//             </div>
//         </main>
//     );
// }





import React, { useEffect, useState } from "react";
import client from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import logo from "./Picture1.png";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;

  return (
    <main className="relative bg-blue-100 min-h-screen">
      <div className="p-4 md:p-10 container mx-auto relative">
        {/* First Section */}
        <section className="rounded-lg shadow-xl flex flex-col lg:flex-row items-center p-6 md:p-12 mb-10">
          <img
            src={logo}
            alt="logo"
            className="mb-6 lg:mb-0 md:h-32 h-24 w-auto"
            style={{ maxHeight: "200px" }}
          />
          <div className="lg:ml-10 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "darkcyan" }}>
              Amokhatrayi Ayur Wellness
            </h1>
            <p className="text-sm md:text-lg leading-relaxed" style={{color:"slategrey"}}>
              Amokhatrayi is a budding ayurvedic wellness brand, rooted in the traditional Indian herbal and Vedic wisdom. Founded in 2024 by Dr. Athira Mohan K., we at Amokhatrayi are committed to providing effective ayurvedic healthcare solutions for modern health complaints and guidance to those who seek Ayurveda for their health concerns. 
              We aim to spread the message of Ayurveda in shaping a way of life tailored to the body's natural makeup and health demands. 
              Our services include ayurvedic education, training, counselling, ayurvedic product marketing, yoga and meditation classes, cosmetic treatments, and much more — wherever Ayurveda offers better outcomes.
            </p>
          </div>
        </section>

        {/* Second Section */}
        <section className="rounded-lg shadow-xl flex flex-col lg:flex-row items-center p-6 md:p-12 mb-10">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-24 h-24 md:w-48 md:h-48 mb-6 lg:mb-0 object-cover"
            alt="Amokha"
          />
          <div className="lg:ml-10 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: "dimgrey" }}>
              Hey there, I'm <span className="text-blue-600">{author.name}</span>
            </h1>
            <p className="text-sm md:text-lg leading-relaxed" style={{color:"slategrey"}}>{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
