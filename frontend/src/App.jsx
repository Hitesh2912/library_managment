import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import Dashboard from "./pages/Dashbord";
import Books from "./pages/Books";
import Resources from "./pages/Resources";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {


  return (
    <div
      className={"h-screen w-full bg-gray-100 text-black flex flex-col"
      }
    >
      {/* ✅ Sticky Navbar with Page Links */}
      <nav
        className={ "w-full p-4 bg-white shadow sticky top-0 z-50 flex justify-between items-center"
        }
      >
        <div className="flex items-center gap-6 text-lg">
          <Link to="/" className="hover:text-blue-500">Dashboard</Link>
          <Link to="/books" className="hover:text-blue-500">Books</Link>
          <Link to="/resources" className="hover:text-blue-500">Resources</Link>
          <Link to="/signup" className="hover:text-blue-500">SignUp</Link>
          {/* <Link to="/login" className="hover:text-blue-500">Login</Link>  */}

        </div>

      </nav>

      {/* ✅ Page Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </div>
  );
}
