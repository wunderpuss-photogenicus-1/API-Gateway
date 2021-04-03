import React from 'react'
import SearchBar from '../Components/SearchBar.jsx'

class SearchContainer extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
      return(
        <div className='searchcontainer'>
            <SearchBar/>
        </div>
       )
  }
}

export default SearchContainer