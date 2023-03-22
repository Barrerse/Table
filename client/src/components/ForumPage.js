import React, { useState, useEffect } from 'react';
import { clientAPI, commentsAPI } from '../utils/API';

const ForumPage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);

        try {
            const postsResponse = await clientAPI().then((response) => response.json());

            setPosts(postsResponse.posts);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching forum posts:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-8 text-white text-center">Forum Posts</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.post_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-gray-100 border border-gray-300 rounded p-4"
                        >
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600">By: {post.user.username}</p>
                            <h3 className="text-lg font-bold mt-4 mb-2">
                                Number of Comments: {post.num_comments}
                            </h3>
                            <h3 className="text-lg font-bold mt-4 mb-2">
                                Number of Likes: {post.num_likes}
                            </h3>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ForumPage;
