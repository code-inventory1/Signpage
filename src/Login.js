import React from "react";
import "./Styles/style.scss";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import * as yup from "yup";
// schema for validation
let schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password length must be atleast 8"),
});
//Event handler for forgot password
const inputHandle = () => {
  prompt("Enter your Phone Number");
};
function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("/signin");
  };
  return (
    <div className="App">
      <header className="App-header">
        <select
          data-placeholder="Choose a Language..."
          className="langSelector"
        >
          <option value="AF">English</option>
          <option value="SQ">Hindi</option>
          <option value="AR">Telgu</option>
        </select>
        <h3>Log in to your account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Email or Phone or Username"
            className="siginInput"
            {...register("email")}
          />
          <p className="danger-text">{errors.email?.message}</p>
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
            className="siginInput"
          />
          <p className="danger-text">{errors.password?.message}</p>
           {/* mid section of Form  */}
          <div className="content">
            <input type="checkbox" name="loggedIN" id="loggedIN" />
            <label for="loggedIN">Keep me logged in for 30 days</label>
            <p className="blue-text" onClick={inputHandle}>
              Forgot password?
            </p>
          </div>
          <input type="submit" value="Log In" className="btn-primary" />
        </form>
        {/* footer of the Card */}
        <div className="signUptxt">
          <NavLink exact to="/signup" style={{ textDecoration: "none" }}>
            <p>
              Need an account?<span>Sign Up</span>
            </p>
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Login;
