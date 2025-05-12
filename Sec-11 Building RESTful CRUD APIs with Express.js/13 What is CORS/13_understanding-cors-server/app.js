import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;
console.log('hi')

app.use(express.static("public"));

//* Fixing Cors Error
//? Method 1 using pure node js : ( All a particular origin )
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://127.0.100.10:5500",
  ];
  if (allowedOrigins.includes(req.headers.origin)) {
    res.set("Access-Control-Allow-Origin", req.headers.origin);
  }
  next()
});

//? Method 2 using pure node js : ( All a all origin )
// res.set("Access-Control-Allow-Origin", "*");
// next();


//? Method  using third party library : ( All a all origin )
//app.use(cors())


app.get("/api", (req, res) => {
  res.json({ message: "Hello, world get!" });
});

app.post("/api", (req, res) => {
  res.json({ message: "Hello, world post!" });
});

app.put("/api", (req, res) => {
  res.json({ message: "Hello, world put!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
