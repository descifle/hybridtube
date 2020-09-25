import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './createaccount.css';
import '../sb.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState('')
  const [user, setUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: email,
      password: password
    }

    // if get request goes thru set cookie / session as logged in return user to videoplayer else allow login requests

    axios.get('/users/verify', {
      params: { "username" : user.username, "password" : user.password},
      withCredentials: true
    })
    .then((res) => {
      if(res.data !== null) {
        setUser(res.data)
        localStorage.setItem('username', JSON.stringify(res.data.username))
        localStorage.setItem('trueUID', JSON.stringify(res.data._id))
        window.location = '/'
      } else {
        setLoginErrors('Wrong Username or Password')
      }
    })
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
    setLoginErrors('')
  }

  const onEmailChange = (e) => {

    e.persist()
    setEmail(e.target.value)
    setLoginErrors('')

    setTimeout(() => {
      const emailRegex = new RegExp(/^\S+@\S+\.\S+$/)

      if(e.target.name === "email" && !emailRegex.test(e.target.value)) {
        e.target.className = "form-control form-control-user invalid-form"
      } else {
        e.target.className = "form-control form-control-user"
      }
    }, 500)
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="container">
      <h1 className="w-100 text-center my-5">VideoSaver</h1>

      <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      <p className={loginErrors ? "font-weight-bold text-danger my-4" : "text-muted my-4"}>{loginErrors ? loginErrors : "you should be watching!"}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="user">
                      <div className="form-group">
                        <input
                        autoFocus 
                        type="email" 
                        className="form-control form-control-user" 
                        name="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Email Address..." 
                        value={email}
                        onChange={onEmailChange}
                        required
                        />
                      </div>
                      <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control form-control-user" 
                        name="password" 
                        placeholder="Password"
                        value={password}
                        onChange={onPasswordChange}
                        required
                        />
                      </div>
                      <button disabled={!validateForm()} className="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                      <Link to="/" className="btn btn-block">Continue without logging in</Link>
                      <hr/>
                    </form>
                    <hr/>
                    <div className="text-center">
                      {/* <Link className="small">Forgot Password?</Link> */}
                    </div>
                    <div className="text-center">
                      <Link to="/create" className="small">Create an Account!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )

}

export default LoginScreen;