import React, { useState } from "react";
import styles from "./SignInPage.module.css";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in as " + form.email);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to StayScape</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={handleChange}
            value={form.email}
          />
        </label>

        <label className={styles.label}>
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            onChange={handleChange}
            value={form.password}
          />
        </label>

        <button type="submit" className={styles.button}>
          Sign In
        </button>

        <div className={styles.divider}>OR</div>

        <button type="button" className={styles.googleBtn}>
          <img
            src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
            alt="g"
            width="10%"
          />
          Continue with Google
        </button>

        <p className={styles.switchText}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
