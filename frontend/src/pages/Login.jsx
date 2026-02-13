import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handelLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://library-managment-backend-dkex.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handelLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        {/* Email */}
        <label className="font-semibold text-gray-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <label className="font-semibold text-gray-700">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Log In
        </button>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
