import React, { useState } from "react";

const SignUp = () => {
 const [data,setData]=useState({
    username:'',
    email:'',
    password:''
 })
 const handleChange=(e)=>{
    const{value,name}=e.target
      setData({...data,[name]:value})
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="bg-purple-600 h-screen flex justify-center items-center">
            <div className="bg-purple-400  h-[25rem] w-[30rem] p-10 rounded-3xl shadow-[20px_20px_100px_#bebebe,-40px_-20px_900px_#ffff] flex flex-col justify-center items-center border border-purple-300 ">
              <h1 className="text-2xl mb-6 text-purple-900 font-bold">
                Signup
              </h1>
              <input
                 name='username'
                onChange={handleChange}
                type="text"
                value={data.username}
                placeholder="Username"
                className="w-full p-3 mb-4 text-gray-700 rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <input
                onChange={handleChange}
                type="text"
                name='email'
                value={data.email}
                placeholder="Email"
                className="w-full p-3 mb-4 text-gray-700 rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <input
                onChange={handleChange}
                type="password"
                name='password'
                value={data.password}
                placeholder="Password"
                className="w-full p-3 mb-6 text-gray-700 rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="w-full py-3 bg-purple-500 text-white rounded-xl shadow-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Signup
              </button>
            </div>
          </div>
        </form>
      </>
    );
};

export default SignUp;
