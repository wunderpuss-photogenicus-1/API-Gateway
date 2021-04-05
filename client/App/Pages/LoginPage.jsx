import React from 'react'

class LoginPage extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    let userStr = document.getElementById('username').value;
    let pwStr = document.getElementById('password').value;
      return(
        <div className='loginpage'>
        <div className='loginbox'>
                <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
                <input type='text' placeholder='Enter your username here' className='form username' onKeyPress={() => this.loginFcn(userStr, pwStr)}/>
                <input type='password' placeholder='Enter your password here' className='form password' onKeyPress={() => this.loginFcn(userStr, pwStr)}/>
        </div>
      </div>
      )
  }
}

export default LoginPage