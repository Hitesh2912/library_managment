const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIXED PORT
const PORT = process.env.PORT || 5000;

// ✅ ROOT ROUTE (Important for Render test)
app.get("/", (req, res) => {
  res.json({ message: "Library Backend Running 🚀" });
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!!"))
  .catch((err) => console.log(err));

// ================= MODELS =================

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

const bookSchema = new mongoose.Schema({
  book: { type: String, required: true }
});
const Book = mongoose.model("Book", bookSchema);

// ================= ROUTES =================

// Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "Name, Email and Password are required" });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.json({ message: "Email already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ message: "Signup successful" });
  } catch (error) {
    res.json({ message: "Server error", error: error.message });
  }
});

// Add Book
app.post("/book", async (req, res) => {
  const { book } = req.body;

  try {
    const newBook = new Book({ book });
    await newBook.save();
    res.json({ message: "Book Added" });
  } catch (error) {
    res.json({ message: "Server error", error: error.message });
  }
});

// Get Books
app.get("/book", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});