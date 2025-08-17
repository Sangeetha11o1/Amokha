import React, { useEffect, useState } from "react";
import client from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import logo from "./logomain.png";
import { FaCheckCircle } from "react-icons/fa";



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
  

  if (!author)
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );

  return (
    <main className="relative bg-blue-100 min-h-screen py-10">
      <div className="px-4 md:px-10 container mx-auto">

        {/* First Section */}
        <section className="rounded-lg shadow-xl flex flex-col lg:flex-row items-center p-6 md:p-12 mb-12 bg-white">
          <img
            src={logo}
            alt="logo"
            className="mb-6 lg:mb-0 h-40 md:h-64 lg:h-72 w-auto max-w-full object-contain"
          />
          <div className="lg:ml-10 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">
              Amokhatrayi Wellness and Coaching Institute
            </h1>
            <p className="text-sm md:text-lg leading-relaxed text-gray-700">
              
              <span className="text-red-400 font-bold">— Where Healing Meets Learning —</span> <br/><br/>

Founded by Dr. Athira Mohan K. in 2023, Amokhatrayi Ayur Wellness and Coaching Institute is a unique and holistic Ayurvedic brand that blends authentic patient care, advanced education, and practical skill-building. Rooted in classical Indian wisdom and tailored to today’s global wellness needs, we serve as both a healing center and a hub for professional excellence.<br/><br/>

  <span className="text-red-400 font-bold">Why Choose Amokhatrayi?</span> <br/>

  <ul className="list-none space-y-2 text-gray-700">
            {[
              "One-stop destination for Patient Care + Learning + Career Upliftment",
              "Doctor-led, research-backed and practical approach",
              "Collaborates with All India BAMS Community",
              "Affordable, accessible and highly personalized programs",
              "Blends Ayurveda, Modern Science, Psychology,  Technology & Mores"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" /> {item}
              </li>
            ))}
          </ul><br/>

Whether you're a patient seeking healing, a student seeking knowledge, or a doctor seeking growth,
Amokhatrayi Ayur Wellness and Coaching Institute is your partner on a journey to wellness, purpose, and empowerment.
            </p>
          </div>
        </section>

        {/* Second Section */}
        <section className="rounded-lg shadow-xl flex flex-col lg:flex-row items-center p-6 md:p-12 mb-12 bg-white">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-24 h-24 md:w-48 md:h-48 mb-6 lg:mb-0 object-cover border-4 border-blue-200"
            alt={author.name}
          />
          <div className="lg:ml-10 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700">
              Hey there, I'm{" "}
              <span className="text-blue-600">{author.name}</span>
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-gray-700">
              {author.bio}
            </p>
          </div>
        </section>

      </div>
    </main>
    
  );
}

