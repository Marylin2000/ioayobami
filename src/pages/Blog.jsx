// pages/BlogList.js
import React from 'react';
import BlogCard from '../components/BlogCard';
import image from "../assets/images/blenderR1.png";
import { Link } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        title: "5 Productivity Hacks to Boost Your Daily Routine",
        description: "Discover simple yet effective ways to maximize productivity with these daily hacks.",
        image: image,
    },
    {
        id: 2,
        title: "Understanding Artificial Intelligence: A Beginner’s Guide",
        description: "Get to know the basics of AI and how it's transforming industries around the world.",
        image: image,
    },
    
];
const Blog = ()=> {
    return (
        <div className="container mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                        Read More
                    </Link>
                </div>
            </div>
            ))}
        </div>
    );
}


export default Blog