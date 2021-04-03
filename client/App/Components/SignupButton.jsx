import React from 'react';

// const [ details, setDetails ] = useState({});



const SignupButton = () => {
    function handleClick(e) {
        e.preventDefault();
      console.log('button working!')
    }
    return(
       <button className="signup" onClick={handleClick}><i className="fas fa-user-plus"></i>Sign Up
       </button>
        
    )
}

export default SignupButton
