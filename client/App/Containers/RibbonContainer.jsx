import React from 'react'
import SignupButton from '../Components/SignupButton.jsx'
import LoginButton from '../Components/LoginButton.jsx'
import { Link } from 'react-router-dom'

class RibbonContainer extends React.Component{
  constructor(props){
    super(props)


    this.doLogIn = this.doLogIn.bind(this)
    this.doSignUp = this.doSignUp.bind(this) 
  }
  
  

  // invoked when user presses sign up button
  doSignUp() {
    console.log(' SignUp Button Pressed.')

  };

  
  render(){
      return(
          <div className='ribboncontainer'>
          <h1>username</h1>
            <input className="usertext" type="text" />
          <h2>password</h2>
          <input className="classtext"type="text" />

         
          <SignupButton signUpFcn={this.doSignUp}/>
    


          <LoginButton logInFcn={this.doLogIn}/>
  
          
          </div>
      )
  }
}

export default RibbonContainer