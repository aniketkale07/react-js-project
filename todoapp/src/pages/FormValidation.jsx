import { useState } from "react";

export function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    if (!formData.name) {
      alert("Name is required");
    }
    
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="gmail">Gmail</label>
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
