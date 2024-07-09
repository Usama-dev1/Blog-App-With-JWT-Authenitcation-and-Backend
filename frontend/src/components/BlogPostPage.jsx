import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import { parseISO } from "date-fns";
const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/blog/post/${id}`
        );
        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center mt-8">Loading...</div>;
  const formattedDate= format(
    parseISO(post.createdAt),
    "MMMM dd, yyyy HH:mm:ss"
  );

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {post.title}
          </h1>
          <p className="text-gray-600">Published on {formattedDate}</p>
        </div>
      </div>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-screen px-4">
            <img
              src={post.image}
              alt="Blog Featured Image"
              className="mb-8 w-full object-cover object-center"
              style={{ maxHeight: "500px" }}
            />
            <div className="prose bg-gray-100 p-5 max-w-none md:px-20">
              <p>{post.content}</p>
            </div>
          </div>
          {/* <div className="w-full md:w-1/4 px-4">
            <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 3
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 mt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 3
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 4
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
