import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform search logic (e.g., send search query to backend API)

    // Clear search input
    setSearchQuery('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ display: 'block', width: '100%', padding: '8px', backgroundColor: '#4caf50', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
