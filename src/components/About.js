import React, { useEffect, useState } from "react";
import client from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import logo from "./logomain.png";

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
              Amokhatrayi is a budding ayurvedic wellness brand, rooted in the traditional Indian herbal and Vedic wisdom. Founded in 2024 by Dr. Athira Mohan K., we at Amokhatrayi are committed to providing effective ayurvedic healthcare solutions for modern health complaints and guidance to those who seek Ayurveda for their health concerns. 
              We aim to spread the message of Ayurveda in shaping a way of life tailored to the body's natural makeup and health demands. 
              Our services include ayurvedic education, training, counselling, ayurvedic product marketing, yoga and meditation classes, cosmetic treatments, and much more — wherever Ayurveda offers better outcomes.
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

