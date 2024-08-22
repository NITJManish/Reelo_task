require("dotenv").config();
require("express-async-errors");
const express=require('express');
const app = express();
const connectDB=require('./config/connectDB')
const cors=require('cors');
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playListRoutes = require("./routes/playLists");
const searchRoutes = require("./routes/search");


connectDB();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server run on port 4000");
})

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

 app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} `
  );
});

