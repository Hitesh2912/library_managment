const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.port || 5000;

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected!!")).catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);

const bookSchema = new mongoose.Schema({
  book: {
    type: String,
    require:true
  }
});
const Book = mongoose.model("Book", bookSchema);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "Name, Email and Password are required" });
  }
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.json({ message: "Email already exists" });

    const newUser = new User({name,email,password});
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.json({ message: "Server error", error: error.message });
  }
});

app.post("/book", async(req,res)=>{
  const {book} = req.body
  try {
    const newbook = new Book({book})
    await newbook.save();
    res.json({message:'Book Added'})
  } catch (error) {

    res.json({ message: "Server error", error: error.message })
  }
})
app.get("/book",async(req,res)=>{
  
})


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});



















// // ✅ LOGIN ROUTE (NO HASH)
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Simple validation
//   if (!email || !password)
//     return res.json({ message: "Email and Password are required" });

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.json({ message: "User not found" });

//     // Compare plain text password
//     if (user.password !== password)
//       return res.json({ message: "Incorrect password" });

//     res.json({ message: "Login successful" });
//   } catch (error) {
//     res.json({ message: "Server error" });
//   }
// });
