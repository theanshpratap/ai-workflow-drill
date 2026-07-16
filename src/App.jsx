import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    theme: "Light",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      err.email = "Enter a valid email";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Settings Saved Successfully!");
    }
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Settings Form</h1>

        <label>Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <p className="error">{errors.name}</p>

        <label>Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <p className="error">{errors.email}</p>

        <label>Theme</label>
        <select
          value={form.theme}
          onChange={(e) =>
            setForm({ ...form, theme: e.target.value })
          }
        >
          <option>Light</option>
          <option>Dark</option>
        </select>

        <button>Save Settings</button>
      </form>
    </div>
  );
}

export default App;