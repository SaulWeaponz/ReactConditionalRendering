import { useState } from "react";

function Form() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users') || '[]'));
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      setError('Username already exists.');
      setSuccessMessage('');
      return;
    }

    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setError('');
    setSuccessMessage('✅ Account created successfully! Redirecting...');
    
    // Delay login by 2 seconds to show success message
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
      setError('Invalid username or password.');
      setSuccessMessage('');
      return;
    }

    setIsLoggedIn(true);
    setError('');
    setSuccessMessage('✅ Login successful!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setSuccessMessage('');
    setError('');
  };

  if (isLoggedIn) {
    return (
      <div>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <div className="welcome">
        <h1>Welcome to WPNZ Platform</h1>
        <button onClick={() => {
          setShowSignUp(true);
          setError('');
          setSuccessMessage('');
        }}>
          Create An Account
        </button>
        <button onClick={() => {
          setShowSignUp(false);
          setError('');
          setSuccessMessage('');
        }}>
          Already have an account? Login!
        </button>
      </div>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showSignUp ? (
        <form onSubmit={handleSignUp}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="clearfix">
              <button type="button" className="cancelbtn">Cancel</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="container">
            <h1>Login Form</h1>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="clearfix">
              <button type="submit" className="signupbtn">Login</button>
              <button type="button" className="cancelbtn">Cancel</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
