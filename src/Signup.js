import React from "react";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from "react-router-dom";
// schema for validation
let schema = yup.object().shape({
  username: yup.string().required('Username is Required').min(3,'Username is too short'),
  email: yup.string().required('Please provide Email').email('Email is not valid'),
  password: yup.string()
  .required('No password provided.')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  cpassword:yup.string()
  .label('Password Confirm')
  .required()
  .oneOf([yup.ref('password')], 'Passwords does not match'),
  });

  //useform handler
function Signup() {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });
  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
      <select data-placeholder="Choose a Language..." className="langSelector">
      <option value="AF">English</option>
      <option value="SQ">Hindi</option>
      <option value="AR">Telgu</option>
      </select>
      <h3>Create your account</h3>
       <form onSubmit={handleSubmit(onSubmit)}>
            <input
            placeholder="Username"
            type="text"
            className="siginInput"
             {...register("username")}/>
         <p className="danger-text">{errors.username?.message}</p>
            <input
            placeholder="Email"
            type="email"
            className="siginInput"
             {...register("email")}/>
         <p className="danger-text">{errors.email?.message}</p>
            <input
            placeholder="Password"
            type="password"
            className="siginInput"
             {...register("password")}/>
         <p className="danger-text">{errors.password?.message}</p>
            <input
            placeholder="Confirm Password"
            type="password"
            className="siginInput"
             {...register("cpassword")}/>
         <p className="danger-text">{errors.cpassword?.message}</p>
       <button type="submit" className="btn-primary">Sign up</button>
       <NavLink exact to="/" style={{ textDecoration: 'none' }}><p className="small-txt">Already Have An Account</p></NavLink>
       </form>
      </header>
    </div>
  );
}

export default Signup;
