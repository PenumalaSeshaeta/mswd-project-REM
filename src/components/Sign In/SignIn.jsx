import React from "react"
import img from "../images/login.jpg"
import Back from "../common/Back"
import "./signin.css"

const SignIn = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Sign UP' title='Welcome Back' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <div>
              <input type='text' placeholder='UserName' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='password' />
            <button>Login</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignIn

