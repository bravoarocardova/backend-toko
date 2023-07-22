import express from "express";
import "dotenv/config";
import ProductRoute from "./routes/ProductRoute.js";
import db from "./config/Database.js";
import { errorResp } from "./utils/Response.js";

const port = process.env.PORT || 3000;

const app = express();

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(express.json());

app.use('/products', ProductRoute);

app.use((err, req, res, next) => {
  const msg = "internal server error";
  console.log(err.message);
  errorResp(res, msg, 500);
})

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
})