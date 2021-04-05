/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const SearchBar = (props) => (
  <div>
  <input
    id="searchvalues"
    type="search"
    placeholder="Please enter a request..."
    value={props.inputName}
    // onKeyPress={ (e) => props.onEnter(e)}
  ></input>
  <button className="search" onClick = {() => {
    // console.log(document.getElementById('searchvalues').value)
    props.onEnter(document.getElementById('searchvalues').value)
  }}>Search<i className="fab fa-searchengin"></i></button>
 
  </div>

);

export default SearchBar;
