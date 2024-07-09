import React from "react";
import BlogCard from "./BlogCard";

const BlogPosts = ({ blogs }) => {
  // Check if blogs is defined and it's an array
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="w-full flex flex-col lg:w-3/4 bg-white">
        <p className="text-center text-gray-600 mt-4">No blogs found</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:w-3/4 bg-white">
      {/* Loop through the blogs array */}
      {blogs.map((blog) => (
        <div key={blog._id} className="p-2">
          <BlogCard
            image={blog.image}
            title={blog.title}
            content={blog.content}
            tags={blog.tags}
            postId={blog._id}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
