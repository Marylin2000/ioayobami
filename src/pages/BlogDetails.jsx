import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get, ref } from 'firebase/database';
import { database } from '../firebase'; // Import your Firebase config

const BlogDetail = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blog data from Firebase Realtime Database
        const fetchBlog = async () => {
            try {
                const blogRef = ref(database, 'blogs/' + id); // Reference to the specific blog
                const snapshot = await get(blogRef);
                if (snapshot.exists()) {
                    setBlog(snapshot.val()); // Set the fetched blog data
                } else {
                    console.log("No blog found");
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchBlog();
    }, [id]); // Re-run the effect when `id` changes

    // Display loading message while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    // Display error message if blog not found
    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div 
                className="text-gray-700" 
                dangerouslySetInnerHTML={{ __html: blog.content }} // Render HTML content
            />
        </div>
    );
};

export default BlogDetail;
