const { pool } = require("../Config/db");
const bcrypt = require("bcrypt");
const { access } = require("fs");
const jwt = require("jsonwebtoken");
// SIGN UP
// const signUP = async (req, res) => {
//   const { firstname, lastname, email, password } = req.body;

//   // Checking for the inputs
//   if (!firstname || !lastname || !email || !password) {
//     return res.status(400).json({
//       status: false,
//       message: "Missing Required Fields",
//     });
//   }

//   // Checking for an existing user with the same email
//   try {
//     const existingUser = await pool.query(
//       "SELECT * FROM users WHERE email = ?",
//       [email]
//     );

//     if (existingUser[0].length !== 0) {
//       return res.status(400).json({
//         status: false,
//         message: "User Already Exists",
//       });
//     }

//     // Generate a salt and hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // res.send("Just checking the salt")
//     // console.log(salt)
//     // console.log(password);
//     // console.log(hashedPassword);

//     // Insert a new user into the database with the hashed password
//     let savedUser = await pool.query(
//       "INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)",
//       [firstname, lastname, email, hashedPassword]
//     );

//     let userId = savedUser[0];
//     console.log(savedUser[0])

// // sSigning token

// let user = {
//   firstname,
//   lastname,
//   email,
//   userId
// }

// let token = jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn:"30d"})

//     return res.status(201).json({
//       status: true,
//       message: "User registered successfully",
//       accessToken: token,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       status: false,
//       message: "Internal server error",
//     });
//   }
// };

const signUP = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Checking for the inputs
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({
      status: false,
      message: "Missing Required Fields",
    });
  }

  // Checking for an existing user with the same email
  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      email
    );

    if (existingUser[0].length !== 0) {
      return res.status(400).json({
        status: false,
        message: "User Already Exists",
      });
    }

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Insert a new user into the database
   const result = await pool.query(
      "INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)",
      [firstname, lastname, email, hashedPassword]
    );
//  const currentUser = await pool.query(
//    "SELECT * FROM users WHERE email = ?",
//    email
//  );

//  const userId = currentUser[0].userId;

const [newUser] = await pool.query(
  "SELECT userId FROM users WHERE email = ?",
  email
);

const userId = newUser[0].userId
console.log(" at Auth controller user Id query", userId)
    // Signing token
    let user = {
      userId,
      firstname,
      lastname,
      email,
    };

    let token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "30d" });





    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// Login
const logIn = async (req, res) => {
  const { email, password } = req.body;

  // Checking for the inputs
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Missing Required Fields",
    });
  }

  try {
    const foundUser = await pool.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);

    if (foundUser[0].length === 0) {
      return res.status(400).json({
        status: false,
        message: "InvalId email or password",
      });
    }

    const user = foundUser[0][0];

    const { password: p, username, ...other } = user;

    console.log(other);

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        status: false,
        message: "InvalId email or password",
      });
    }
    let token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "30d" });
    console.log(token);
    // Successful login
    res.json({
      token: token,
      status: true,
      message: "Login successful",
      user: other, // You can send user details if needed
    });
  } catch (error) {
    // Handle other errors
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// const protect = async (req, res, next) => {
//   let token;
//   if (!req.headers.authorization) {
//     return res
//       .status(403)
//       .json({ status: false, message: "You are not logged in" });
//   }

//   token = req.headers.authorization.split(" ")[1];
//   console.log(token);

//   try {
//     const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//     console.log(decoded);
//     console.log(user)
//     req.user = decoded;
//     next();
//   } catch (err) {
//     if (err.name === "TokenExpiredError") {
//       return res.status(403).json({
//         status: false,
//         message: "Token has expired",
//       });
//     } else if (err.name === "JsonWebTokenError") {
//       return res.status(403).json({
//         status: false,
//         message: "InvalId token",
//       });
//     } else {
//       return res.status(403).json({
//         status: false,
//         message: "Authentication failed",
//       });
//     }
//   }
// };

const protect = async (req, res, next) => {
  let token;
  if (!req.headers.authorization) {
    return res
      .status(403)
      .json({ status: false, message: "You are not logged in" });
  }

  token = req.headers.authorization.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decoded);
    if (!decoded) {
      return res
        .status(403)
        .json({
          status: false,
          message: "You are not logged in or invalId token",
        });
    }
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (err) {
    res.json("You are not logged in or invalId token");
  }
};

// const protect = async (req,res,next)=>{
//   let token;
// if (!req.headers.authorization){
//   return res.status(403).json({status:false,
//   message: "You are not logged in"})
// }
// const decode = jwt.verify
// token = req.headers.authorization[1]
// console.log(token)
// res.send("testing...")
// }

module.exports = { signUP, logIn, protect };
