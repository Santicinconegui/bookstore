import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  //funcion para actualizar estado y ver contenido//
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong Password");
      }
    }
  };

  //funcion para actualizar estado y ver contenido//
  return (
    <div className="container-formulario">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="wrap2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
            <span className="focus-input2"></span>
          </div>
          <div className="wrap2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
              placeholder="******"
            />
            <span className="focus-input2"></span>
          </div>
          {error && <span className="error-form">{error}</span>}
          <button className="btn--form">Login</button>
        </form>
      </div>
      <div className="image-form">
        <img src="/assets/form.jpg" className="img-form" />
      </div>
    </div>
  );
};

export default Login;
