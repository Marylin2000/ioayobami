// pages/BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import image from "../assets/images/blenderR1.png";

const blogs = [
    {
        id: 1,
        title: "5 Productivity Hacks to Boost Your Daily Routine",
        content: "Here is the full content of blog 1. These hacks will help you boost your productivity by focusing on key strategies that have worked for professionals.",
        image: image
    },
    {
        id: 2,
        title: "Understanding Artificial Intelligence: A Beginner’s Guide",
        content: "This blog covers the basics of AI, including its history, applications, and potential future impacts on various industries.",
        image: image
    },
    // Add more blog entries as needed
];

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700">{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
