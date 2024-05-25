import React, { useState } from 'react';
import './App.css';
import './Home.css';
import Tile from './Tile';

function Home() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='background-img'>
      <div className='text-1'>fesste</div>
      <div className='search-bar'>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            type="text"
            className='form-input search-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for food..."
          />
          <button type='submit' className='btn'>search</button>
        </form>
      </div>
      <Tile query={query} />
    </div>
  );
}

export default Home;