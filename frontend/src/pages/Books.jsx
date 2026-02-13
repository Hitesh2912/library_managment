import React, { useState } from "react";

export default function Books() {
  const [book, setBook] = useState("");
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]); // optional: local list

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://library-managment-backend-dkex.onrender.com/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ book }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setBooks([...books, book]); // update local list
        setBook("");
      }
    } catch (err) {
      setMessage(`Server connection error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          📚 Add a New Book
        </h1>

        <form onSubmit={handleBook} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Book Name
            </label>
            <input
              type="string"
              required
              value={book}
              onChange={(e) => setBook(e.target.value)}
              placeholder="Enter book name..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Book
          </button>

          {message && (
            <div
              className={`mt-4 p-3 rounded-lg text-center font-medium ${
                message.toLowerCase().includes("error")
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>

      {/* Book List Section */}
      <div className="mt-10 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          📖 List of Books
        </h2>

        {books.length === 0 ? (
          <p className="text-gray-500 text-center">No books added yet.</p>
        ) : (
          <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
            {books.map((b, index) => (
              <li
                key={index}
                className="p-3 hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
