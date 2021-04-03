import React from 'react'
import SignupButton from '../Components/SignupButton.jsx'
import LoginButton from '../Components/LoginButton.jsx'

class RibbonContainer extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
      return(
          <div className='ribboncontainer'>
          <h1>username</h1>
          <h2>password</h2>
          <SignupButton/>
          <LoginButton/>
          </div>
      )
  }
}

export default RibbonContainer