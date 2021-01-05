import React from 'react';

import './search-box.styles.css';

// This is functional component. It gets props and returns HTML
// vs a class component that has state and lifecycle methods.
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)
