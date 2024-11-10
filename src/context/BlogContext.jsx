// BlogContext.js
import React, { createContext, useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const blogsRef = ref(database, 'blogs/');
        const unsubscribe = onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formattedBlogs = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setBlogs(formattedBlogs);
            } else {
                setBlogs([]);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <BlogContext.Provider value={{ blogs, loading }}>
            {children}
        </BlogContext.Provider>
    );
};
