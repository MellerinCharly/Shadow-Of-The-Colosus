import { useState } from "react";
import "./CreateIdole.css";

const CreateIdole: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (image) {
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
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
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
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
          Add Idole
        </button>
      </form>
    </section>
  );
};

export default CreateIdole;
