import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, content, tags, postId }) => {
  const trimContent = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Link to={`/blog/${postId}`} className="block mb-4">
      <div className="max-w-3xl p-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-start">
          <div className="md:w-80 md:h-60">
            <img
              className="h-80 w-full object-cover md:h-full md:w-80"
              src={image}
              alt="Blog Image"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="p-4 flex-1">
            <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {title}
            </div>
            <div className="border-b-2 border-gray-300 my-2"></div>
            <p className="mt-2 text-gray-500">{trimContent(content, 150)}</p>
            <div className="flex flex-wrap justify-start mt-4">
              {tags.map((tagString, index) => (
                <div key={index} className="flex flex-wrap gap-2">
                  {tagString.split(",").map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
