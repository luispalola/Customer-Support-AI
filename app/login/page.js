import React from 'react';

export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>LOGIN</h2>
        <input style={styles.input} type="text" placeholder="Username" />
        <input style={styles.input} type="password" placeholder="Password" />
        <button style={styles.button}>SIGN IN</button>
        <p style={styles.signupText}>
          Don't have an account? <a href="#" style={styles.signupLink}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f6f1',
  },
  box: {
    padding: '40px',
    width: '320px',
    backgroundColor: 'white',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    fontWeight: '500',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '16px',
    backgroundColor: '#f5f5f5',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2f4f3f',
    color: 'white',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
  },
  signupText: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#999',
  },
  signupLink: {
    color: '#c3c78e',
    textDecoration: 'none',
    fontWeight: '500',
  },
};
