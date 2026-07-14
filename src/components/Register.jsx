import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Handle password as well
  const [confirmPassword, setConfirmPassword] = useState(''); // Handle confirm password
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && confirmPassword.trim()) {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      try {
        // Send POST request to backend for registration
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          email,
          password,
        });

        // Assuming the response contains the user data and token
        const { token, user } = response.data;

        // Store token and user in localStorage (or sessionStorage)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Set the user in context
        setUser(user);

        // Navigate to the homepage/dashboard
        navigate('/');
      } catch (error) {
        console.error('Registration failed:', error.response?.data?.message || error.message);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        
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

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full px-3 py-2 border rounded mb-3"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
