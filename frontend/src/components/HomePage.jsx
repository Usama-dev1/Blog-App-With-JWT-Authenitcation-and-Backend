import React, { useEffect, useState } from "react";
import BlogPosts from "./BlogPosts";
import Sidebar from "./Sidebar";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Number of posts per page

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]); // Fetch blogs when currentPage changes

  const fetchBlogs = () => {
    fetch("http://localhost:4000/api/blog/post/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.post)) {
          setBlogs(data.post); // Set the fetched data to the blogs state
        } else {
          console.error("Fetched data is not in expected format:", data);
        }
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  const nextPage = () => {
    // Check if there are more items to show
    if (currentPage * pageSize < blogs.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Calculate pagination boundaries
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentBlogs = blogs.slice(firstIndex, lastIndex);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="lg:flex">
        <BlogPosts blogs={currentBlogs} />
        <Sidebar />
      </div>

      {/* Pagination controls */}
      <div className="pagination m-2 flex justify-center items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2 lg:ml-0 lg:mb-0">
          Previous
        </button>
        <span className="text-xl font-bold mx-2 border px-4">{currentPage}</span>
        <button
          onClick={nextPage}
          disabled={lastIndex >= blogs.length}
          className="bg-blue-500 px-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2 lg:ml-0 lg:mb-0">
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
