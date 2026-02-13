import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://library-managment-backend-dkex.onrender.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setMessage("⚠️ Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Join the Library as an Active Member
        </p>

        {/* Name */}
        <label className="font-semibold text-gray-700">Name / USN</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter your name"
        />

        {/* Email */}
        <label className="font-semibold text-gray-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter your email"
        />

        {/* Password */}
        <label className="font-semibold text-gray-700">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 mb-6 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Create password"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md disabled:opacity-70"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("Error") || message.includes("⚠️")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;