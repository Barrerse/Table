import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    username: '',
    feed: false,
    order_by: '',
    game_id: '',
    flair: '',
    news: false,
    limit: 30,
    skip: 0,
  });

  useEffect(() => {
    fetchPosts(filters);
  }, []);

  const fetchPosts = async (filters) => {
    setIsLoading(true);

    const params = Object.entries(filters)
      .filter(([, value]) => value !== '' && value !== false)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    try {
      const response = await axios.get('https://api.boardgameatlas.com/api/forum?client_id=rYefHsAVYG', { params });
      setPosts(response.data.posts);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching forum posts:', error);
      setIsLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    fetchPosts(filters);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Forum</h1>

      <form onSubmit={handleFilterSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={filters.search}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />

        {/* Add more input fields for other filters here */}
        
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Apply Filters
        </button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-100 border border-gray-300 rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="mb-2">{post.content}</p>
              <p className="text-gray-600">By: {post.user.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForumPage;
