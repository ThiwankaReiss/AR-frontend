import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
const Login = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const submit = async (data) => {
    console.log(data);
  }
  return (
    <div className='bg-login d-flex align-items-center justify-content-center'>
      <div className="container" width="100%">
        <div className="row ">

          <div className="col-lg-4 col-md-6 col-sm-8">
            <div class="container1 ">
              <div class="heading">Sign In</div>
              <form action="" class="form">
                <input
                  required=""
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  {...register("email", { required: true })}
                />
                <input
                  required=""
                  class="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
                <input onClick={handleSubmit(submit)} class="login-button" type="submit" value="Sign In" />

              </form>
              <span class="agreement"><a href="#">Register</a></span>

            </div>
          </div>

          <div className="col-lg-4"></div>


        </div>
      </div>
    </div>
  )
}

export default Login