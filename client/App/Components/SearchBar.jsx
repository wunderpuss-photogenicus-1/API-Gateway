/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const SearchBar = (props) => (
  <input
    type="search"
    placeholder={props.placeholder}
    onKeyUp={props.onKeUp}
  />
);

export default SearchBar;
