import { useState } from "react";
import "./CreateIdole.css";

const CreateIdole: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="login-card">
      <h2>Add an Idole</h2>
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
          <label htmlFor="email">Picture:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </fieldset>

        <button type="submit" className="btn-submit">
          Manage
        </button>
      </form>
    </section>
  );
};

export default CreateIdole;
