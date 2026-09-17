import "dotenv/config"
import express from "express";
import cors from "cors"
import session from "express-session";
import passport from "./configs/passport.js"
import cookieParser from "cookie-parser"

const app = express();
const PORT = process.env.PORT || 5000;

const origins = [process.env.CLIENT_URL];

app.use(cors({
  origin: function (origin, callback) {
    if(!origin) return callback(null, true)
    if (origins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"))
    }
  },
  credentials: true,
}))


app.use(cookieParser())
app.use(session({
  secret: process.env.OAUTH_CLIENT_SECRET as string,
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: true,
    maxAge: 365 * 24 * 60 * 60 * 1000,
  },
}))

app.use(passport.initialize())
app.use(passport.session())

app.get("/", (req, res) => {
  res.status(200).send("Hello")
})


app.listen(3000, (err) => {
  if (err) console.error(err);
  console.log(`Server Start on http://localhost:${PORT}`)
})
