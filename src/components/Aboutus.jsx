import React from 'react'
import NavBar from './NavBar'
import { useState, useEffect } from 'react'
import './Aboutus.css'

const Aboutus = () => {

  const inputvalue = { username: '',email: '', password: '', cpassword: '' }
  const [data, setData] = useState(inputvalue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  // const handleChange = (e) => {
  //   const{name, value} = e.target;
  //   setData({...data, [name]: value})
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    console.log(data);
    setIsSubmit(true);
  }

  useEffect(() => {
 
    if(Object.keys(errors).length === 0 && isSubmit) {
      console.log(data);
    }
  },[errors])
  const validate = (value) => {
    const errors ={};
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.username) {
      errors.username = "First Name is required!";
    }

    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }


    if (!value.password) {
      errors.password = 'Password is required!';
    } else if (value.password.length < 5) {
      errors.password = 'Password must be more than 5 characters!';
    }else if (value.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters!';
    } else if (!specialCharRegex.test(value.password)) {
      errors.password = 'Password must contain at least 1 special character!';
    }

    if (!value.cpassword) {
      errors.cpassword = 'Repeat password is required!';
    } else if (value.cpassword !== value.password) {
      errors.cpassword = 'Passwords do not match!';
    }
    console.log(errors);
    return errors
  }
  console.log(Object.keys(errors).length === 0);

  return(
    <>
    <NavBar />
    <div className="container">

      <form onSubmit={handleSubmit}>
        
        <div className="ui divider">
        <div className="ui form">
          <h1>Registration Form</h1>

          <div className="field">
            <label>Name  </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="username" 
            placeholder="name" 
            value={data.username} 
            onChange={handleChange} 
            />
          </div>
          <p className="error-text">{errors.username}</p>

          <div className="field">
            <label>Email    </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="email" 
            placeholder="xyz@gmail.com" 
            value={data.email} 
            onChange={handleChange} 
            />
          </div>
          <p className="error-text">{errors.email}</p>

          <div className="field">
            <label> Password </label> <br />
            <input 
            className='textarea'
            type="password" 
            name="password"
            value={data.password}
            onChange={handleChange}
            />
          </div>
          <p className='error-text'>{errors.password}</p>

          <div className="field">
            <label> Confirm Password </label> <br />
            <input 
            className='textarea'
            type="password" 
            name="cpassword"
            value={data.cpassword}
            onChange={handleChange}
            />
          </div>
          <p className='error-text'>{errors.cpassword}</p>

          <div className='btn-div'>
          <button className="button">Submit</button>
          <button onClick={() => setData(inputvalue)} className='button reset-btn'>Reset</button>
          </div>

        </div>
        </div>

        {Object.keys(errors).length === 0 && isSubmit && (
          <div className="message-success"><p>Registered successfully</p></div>
        )}

      </form>
    </div>
    </>
  )
}

export default Aboutus
