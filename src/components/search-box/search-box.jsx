import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search-box'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} 
    />
);

// export const SearchBox = (props) => (
//     <input 
//         className='search-box'
//         type='search' 
//         placeholder={props.placeholder} 
//         onChange={props.handleChange} 
//     />
// );
