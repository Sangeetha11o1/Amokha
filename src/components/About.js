import React, {useEffect, useState} from "react";
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

    if (!author) return <div>Loading...</div>;


    return (
        <main className="relative bg-blue-200">
            {/* <img src={bg} alt="bg pic" className="absolute cover w-full"/> */}
            <div className="p-10 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 mb-16">
                        
                        <img src={logo}
                            alt="logo"
                            className=" md:h-22 mt-32"
                            style={{ maxHeight: "200px", width:"auto"}}/>
                    
                    <div>
                    <h1 className="cursive text-5xl text-green-300 p-20 ml-32 ">
                            Amokhatrayi Ayur Wellness
                    </h1>
                    <p className="text-green-200 text-lg mt-2 ml-32">
                Amokhatrayi,  is a budding ayurvedic wellness brand,rooted in the traditional indian herbal and vedic wisdom.Founded in 2024 by Dr. Athira Mohan .K ,we at Amokhatrayi is committed to provide effective ayurvedic healthcare solitions for the modern health complaints and guidance to those who look up to Ayurveda for their health concerns.
We disseminate the message of Ayurveda in shaping a way of life tailored to the natural make up of the body and its health demands.We offer  various services like ayurvedic education,training,counselling,ayurvedic product marketing,yoga and meditation classes,cosmetic treatments..and more,wherever the ayurveda can give better results.
                    </p>
                    </div>
                </section>

                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 mb-16">
                    <img
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt="Amokha"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there, I'm {" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <p className="text-green-200 text-lg">{author.bio}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}



