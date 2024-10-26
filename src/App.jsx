import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import BlogDetail from "./pages/BlogDetails";
import CreateBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";

const App = () => {
  


  return (
    <Router>
      <div className="min-h-screen flex flex-col">
          <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/addBlog" element={<CreateBlog />} />
           
          </Routes>
        </main>
  
      </div>
    </Router>
  );
};

export default App;
