import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AdminDashboard = () => {
  const [content, setContent] = useState(""); // State for CKEditor content
  const [posts, setPosts] = useState([]);

  // Function to retrieve JWT token from localStorage
  const getToken = () => {
    return localStorage.getItem("token"); // Replace 'jwt' with your actual localStorage key
  };

  // Function to create a new post
  const createPost = async (formData) => {
    try {
      const token = getToken();
      const response = await fetch("http://localhost:4000/api/blog/post/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        const errorMessage = await response.text(); // Read error message from response body
        throw new Error(`Failed to create post - ${errorMessage}`);
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, data]); // Update state with new post correctly
      // Optionally, reset form fields or update UI
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const tags = event.target.tags.value;
    const image = event.target.image.files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content); // content from CKEditor
    formData.append("tags", tags);
    formData.append("image", image);

    try {
      await createPost(formData);
      event.target.reset(); // Reset form fields after successful submission
      setContent(""); // Clear content after submission if needed
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 h-full">
        <div className="flex items-center justify-center h-16 bg-gray-900 text-white font-semibold">
          Admin Dashboard
        </div>
        <nav className="mt-10">
          <a
            href="/dashboard"
            className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            Dashboard
          </a>
          {/* Add links for Users and Categories as needed */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 h-full">
        {/* Form for creating new post */}
        <div className="mt-1">
          <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <CKEditor
              editor={ClassicEditor}
              data={content} // initial content if editing existing post
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data); // update content state
              } }
            />
            <input
              type="text"
              name="tags"
              placeholder="Tags (comma-separated)"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              className="block p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
