import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPostPage from "./components/BlogPostPage";
import Navbar from"./components/Navbar"
import Login from"./components/Login"
import Signup from"./components/SignUp"
import Footer from"./components/Footer"
import Admin from"./components/Admin"
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import ContactForm from "./components/ContactUs";
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
