import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the default styles
import { database, storage } from '../firebase'; // Import Firebase database and storage
import { ref, push } from 'firebase/database'; // Firebase Realtime Database functions
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage functions

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Uploading the image to Firebase Storage (optional)
        let imageUrl = '';
        if (image) {
            // Create a reference to where the image will be stored in Firebase Storage
            const imageRef = storageRef(storage, `blogImages/${image.name}`);
            // Upload the image to Firebase Storage
            await uploadBytes(imageRef, image);
            // Get the download URL of the uploaded image
            imageUrl = await getDownloadURL(imageRef);
        }

        // Creating a new blog object
        const newBlog = {
            title,
            description,
            content,
            image: imageUrl || '', // If no image is uploaded, leave the URL as empty string
            timestamp: Date.now(),
        };

        try {
            // Pushing the new blog object to Firebase Realtime Database under the 'blogs' node
            await push(ref(database, 'blogs'), newBlog);
            alert('Blog created successfully!');
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('Failed to create blog. Please try again.');
        }

        // Reset form after submission
        setTitle('');
        setDescription('');
        setContent('');
        setImage(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Create a New Blog</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                {/* Title input field */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {/* Description input field */}
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {/* React Quill editor for content */}
                <div className="w-full">
                    <ReactQuill
                        value={content}
                        onChange={setContent}
                        placeholder="Write your content here..."
                        className="w-full"
                    />
                </div>
                
                {/* Image upload input */}
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {/* Submit button */}
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
