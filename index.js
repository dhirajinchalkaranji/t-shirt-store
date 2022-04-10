const app = require("./app");
const connectWithDb = require("./config/db");
require("dotenv").config(); //if you put file in other folder provide path
const cloudinary = require("cloudinary");

// connect with DataBase
connectWithDb();

// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRETE,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at 4000`);
});
