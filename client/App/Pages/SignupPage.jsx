import React from 'react'

class SignupPage extends React.Component{
  constructor(props){
    super(props)
  }

  signUpNewUser(e){
    if(e.key === 'Enter'){
      const username = document.getElementById("signupusername").value;
      const password = document.getElementById("signuppassword").value;
      console.log(username)
      console.log(password)
    }
  }

  
  render(){
      return(
          <div className='signuppage'>
            <div className='signupbox'>
                <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
                <input id='signupusername' type='text' name='username' placeholder='Enter new username here' className='form' onKeyDown={this.signUpNewUser}/>
                <input id='signuppassword' type='password' name='password' placeholder='Enter new password here' className='form' onKeyDown={this.signUpNewUser}/>
            </div>
          </div>
      )
  }
}

export default SignupPage 