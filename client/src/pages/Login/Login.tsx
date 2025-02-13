import { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <fieldset className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>

        <button type="submit" className="btn-submit">
          Log In
        </button>

        <div className="links">
          <a href="/forgot-password" className="forgot-password">
            Forgot password ?
          </a>
          <a href="/create-account" className="create-account">
            Create an account
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login;
