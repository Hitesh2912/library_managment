import React, { useState } from "react";
import { BookOpen, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Books() {
  const [book, setBook] = useState("");
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://library-managment-backend-dkex.onrender.com/book",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ book }),
        }
      );

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setBooks([...books, book]);
        setBook("");
      }
    } catch (err) {
      setMessage(`Server connection error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-8">

      {/* Add Book Section */}
      <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-slate-200">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6 flex items-center justify-center gap-2">
          <PlusCircle /> Add New Book
        </h1>

        <form onSubmit={handleBook} className="space-y-6">
          <div>
            <label className="block text-slate-700 font-medium mb-2">
              Book Name
            </label>
            <input
              type="text"
              required
              value={book}
              onChange={(e) => setBook(e.target.value)}
              placeholder="Enter book name..."
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-indigo-400/50 hover:scale-105 transition-all duration-300"
          >
            Add Book
          </button>

          {message && (
            <div
              className={`p-3 rounded-xl text-center font-medium ${
                message.toLowerCase().includes("error")
                  ? "bg-rose-100 text-rose-600"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>

      {/* Book List Section */}
      <div className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center flex items-center justify-center gap-2">
          <BookOpen /> Book Collection
        </h2>

        {books.length === 0 ? (
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center text-slate-500">
            No books added yet.
          </div>
        ) : (
          <ul className="bg-white shadow-xl rounded-2xl divide-y divide-slate-200 overflow-hidden">
            {books.map((b, index) => (
              <motion.li
                whileHover={{ scale: 1.02 }}
                key={index}
                className="p-4 flex justify-between items-center hover:bg-indigo-50 transition"
              >
                <span className="text-slate-700 font-medium">
                  {b}
                </span>
                <BookOpen className="text-indigo-500" size={18} />
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Book Categories with Images */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">
          Explore Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fiction",
              img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
            },
            {
              title: "Technology",
              img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            },
            {
              title: "Education",
              img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}