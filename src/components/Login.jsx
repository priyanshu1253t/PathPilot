import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for sending requests
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // You need to handle password too
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      try {
        // Send POST request to backend
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });

        // Assuming the response contains user and token
        const { token, user } = response.data;

        // Save the token and user data in context or localStorage
        localStorage.setItem('token', token); // Save token for later use (for authenticated routes)
        localStorage.setItem('user', JSON.stringify(user)); // Optionally store user data

        // Set the user context
        setUser(user);

        // Navigate to the homepage/dashboard
        navigate('/');
      } catch (error) {
        console.error('Login failed:', error.response?.data?.message || error.message);
        alert('Login failed. Please check your credentials!');
      }
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-3 py-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-3 py-2 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
