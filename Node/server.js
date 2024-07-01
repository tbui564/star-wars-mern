import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
app.use(cors()) // Enables CORS for all routes
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/api/planets', async (req, res) => {
  const test = {
    "test": "test",
  };
  res.json(test);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});