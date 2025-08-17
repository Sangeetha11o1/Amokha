import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client.js";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = ImageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div className="text-center p-10">Loading...</div>;

  return (
    <main className="bg-gray-100 min-h-screen p-4 md:p-12 fadeIn">
      <article className="container mx-auto shadow-md bg-white rounded-lg overflow-hidden">
        
        {/* Header section with main image and overlay */}
        <header className="relative">
          {/* Main background image */}
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full h-64 md:h-96 object-cover rounded-t"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4 md:p-8">
            <h1 className="text-xl md:text-5xl font-bold text-white mb-2 cursive">
              {singlePost.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center justify-center mt-2">
              <img
                src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.name}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-2 border-2 border-white"
              />
              <p className="text-white text-sm md:text-xl">{singlePost.name}</p>
            </div>
          </div>
        </header>

        {/* Body content */}
        <div className="px-4 md:px-16 py-8 md:py-16 prose prose-sm md:prose lg:prose-lg max-w-none text-gray-700">
          <BlockContent
            blocks={singlePost.body}
            projectId="nqns82nc"
            dataset="production"
          />
        </div>

      </article>
    </main>
  );
}
