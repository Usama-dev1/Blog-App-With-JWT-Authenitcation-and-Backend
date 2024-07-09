import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/blog/post/");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Assuming data is in the format { post: [...] }
        if (data && Array.isArray(data.post)) {
          // Get the latest 10 posts
          const latestPosts = data.post.slice(0, 10);
          setPosts(latestPosts);
        } else {
          console.error("Fetched data is not in expected format:", data);
        }
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="w-full lg:w-1/4 mb-2 hidden md:block">
      <div className="bg-white shadow-2xl p-4 rounded-3xl">
        <h2 className="text-xl font-semibold mb-4">New Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  <Link
                    to={`/blog/${post._id}`}
                    className="hover:text-blue-500">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600">
                  {post.content.substring(0, 40)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-3xl">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to our Newsletter
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
