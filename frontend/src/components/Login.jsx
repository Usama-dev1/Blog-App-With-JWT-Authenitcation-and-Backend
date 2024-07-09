// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/blog/users/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Login successful:", responseData);
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("email", responseData.email);
        // Redirect to dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        // Handle error state, show error message to user, etc.
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-purple-400 h-screen flex justify-center items-center">
          <div className="bg-purple-400 h-[25rem] w-[30rem] p-10 rounded-3xl shadow-[20px_20px_100px_#bebebe,-40px_-20px_900px_#ffff] flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-6 text-purple-900 font-bold">Login</h1>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={data.email}
              placeholder="Email"
              className="w-full p-3 mb-4 text-gray-700 rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              onChange={handleChange}
              name="password"
              value={data.password}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 text-gray-700 rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white rounded-xl shadow-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
