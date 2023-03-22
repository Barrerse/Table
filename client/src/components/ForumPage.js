import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { clientAPI, commentsAPI } from '../utils/API';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPostsAndComments();
  }, []);

  const fetchPostsAndComments = async () => {
    setIsLoading(true);
    
    try {
      const [postsResponse, commentsResponse] = await Promise.all([
        clientAPI().then((response) => response.json()),
        commentsAPI().then((response) => response.json()),
      ]);
  
      setPosts(postsResponse.posts);
      setComments(commentsResponse.comments);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching forum posts and comments:', error);
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
            <div key={post.id} className="bg-gray-100 border border-gray-300 rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              {/* <p className="mb-2">{post.description}</p> */}
              <p className="text-gray-600">By: {post.user.username}</p>
              <h3 className="text-lg font-bold mt-4 mb-2"> Number of Comments: {post.num_comments} </h3>
              <h3 className="text-lg font-bold mt-4 mb-2"> Number of Likes: {post.num_likes} </h3>
              <ul className="list-disc pl-8 space-y-2">
                {comments
                  .filter((comment) => comment.post_id === post.id)
                  .map((comment) => (
                    <li key={comments.id}>
                      <p>{comments.content}</p>
                      <p className="text-gray-600">By: {comments.username}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForumPage;
