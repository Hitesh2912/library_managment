import React, { useState, useEffect } from "react";
import { Book, Users, FileText, Search } from "lucide-react";

export default function Dashboard() {
  const images = [
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      
      {/* Hero Slider */}
      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl mb-10">
        <img
          src={images[current]}
          alt="Library"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Welcome to Library
          </h1>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 mb-10">
        <input
          type="text"
          placeholder="Search books, members..."
          className="w-full p-3 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg transition">
          <Search />
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatCard
          icon={<Book size={40} />}
          title="Total Books"
          value="3200"
          color="bg-blue-500"
        />
        <StatCard
          icon={<Users size={40} />}
          title="Active Members"
          value="850"
          color="bg-green-500"
        />
        <StatCard
          icon={<FileText size={40} />}
          title="Issued Today"
          value="72"
          color="bg-purple-500"
        />
      </div>

      {/* Recent Books Section */}
      <div className="bg-white rounded-3xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-6">Recently Added Books</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Atomic Habits", "The Alchemist", "Clean Code"].map(
            (book, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{book}</h3>
                <p className="text-gray-500 text-sm">
                  Added recently to the library
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
function StatCard({ icon, title, value, color }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-4">
        <div className={`p-4 text-white rounded-2xl ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-gray-500">{title}</p>
          <h2 className="text-3xl font-bold">{value}</h2>
        </div>
      </div>
    </div>
  );
}