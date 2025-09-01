import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ import navigation
import "./../styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/register
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ initialize

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // login API
        const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
          username,
          password,
        });
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        setMessage("Login successful!");

        // ✅ redirect to homepage after login
        setTimeout(() => {
          navigate("/"); // <-- your HomePage route
        }, 1000);
      } else {
        // register API
        const response = await axios.post("http://127.0.0.1:8000/api/auth/register/", {
          username,
          email,
          password,
          is_student: true,
          is_teacher: false,
        });
        setMessage("Registration successful! You can now login.");
        console.log(response.data);
        // Optional: auto-switch to login form after successful register
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      setMessage("Error: " + JSON.stringify(error.response?.data || error.message));
    }
  };

  return (
    <div className="auth-form">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
        >
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AuthPage;
