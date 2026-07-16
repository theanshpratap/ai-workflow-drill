import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Feedback submitted successfully!");

      setFormData({
        name: "",
        email: "",
        feedback: "",
      });
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Feedback Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Feedback</label>
            <textarea
              name="feedback"
              rows="5"
              placeholder="Write your feedback..."
              value={formData.feedback}
              onChange={handleChange}
            ></textarea>
            {errors.feedback && (
              <p className="error">{errors.feedback}</p>
            )}
          </div>

          <button type="submit">Submit</button>

          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;