import { useState } from 'react'

// import Cookies from 'js-cookie'

// // import axios from 'axios'

import './Login.component.css'


const loginDetails = {
  email : '',
  password : '',
}

const Login = ()=>{
    
  
    const [loginFields,setLoginFields] = useState(loginDetails)

    const {email, password} = loginFields

    const onLoginInputChangeHandler = (e)=>{
      const {name , value} = e.target
 
      setLoginFields({...loginFields,[name]:value})
   }

   console.log(email)

    return(
            <div className='col-12'>
            <section className="section_bgc_con">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 m-5">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
              alt="Sample" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" value={email} name='email' onChange = {onLoginInputChangeHandler} required/>
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" value={password} name='password' onChange = {onLoginInputChangeHandler} required  />
                <label className="form-label" htmlFor="form3Example4">Password</label>
               
              </div>
    
              <div className="d-flex justify-content-between align-items-center">
               
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="/forgot" className="text-body">Forgot password?</a>
              </div>
              
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  >Login</button>
                  
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/Register"
                    className="link-danger">Register</a></p>
              </div>
    
            </form>
          </div>
        </div>
      </div>
      
    </section>
    </div>
        )
    
        }

export default Login