// pages/BlogList.js
import React, { useContext } from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const Blog = () => {
    const { blogs, loading } = useContext(BlogContext);

    if (loading) {
        return <p>Loading blogs...</p>;
    }

    if (blogs.length === 0) {
        return <p>No blogs available.</p>;
    }

    return (
        <div className="container mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-4">{blog.description}</p>
                        <Link
                            to={`/blog/${blog.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
