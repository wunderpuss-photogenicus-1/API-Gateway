import React from 'react'

class LoginPage extends React.Component{
  constructor(props){
    super(props)

    this.doLogin = this.doLogin.bind(this)
  }

  // invoked when user presses login button
  doLogIn(userStr, pwStr) {

    // debugging
    console.log('SignUp Button Pressed.')
    console.log(`Username: ${userStr}, Password: ${pwStr}`)

    // get ride of whitespaces from login
    string.replace(/\s+$/, '');

    let requestBody = {
      method: 'POST',
      headers: {
      
        'Content-Type': 'application/json'
      },
      // headers: {'Content-Type': 'text/javascript'},
      // body: JSON.stringify(updatedString)
      body: JSON.stringify(sendObj)
    }
  
    // ping the backend with the 
    fetch('/login', requestBody) 
      .then(response => response.text())
      .then(data => console.log('Data received from backend: ', data))
      .catch(err => console.log(err))
  };
  
  render(){
      return(
        <div className='loginpage'>
        <div className='loginbox'>
                <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
                <input type='text' name='username' placeholder='Enter your username here' className='form username' onKeyPress={() => this.doLogin()} />
                <input type='password' name='password' placeholder='Enter your password here' className='form password' onKeyPress={() => this.doLogin()}/>
        </div>
      </div>
      )
  }
}

export default LoginPage