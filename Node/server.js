import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

// Load in dotenv values
dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

// Create express app
const PORT = 3000;
const app = express();
app.use(cors()) // Enables CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// GET requests
app.get('/api/characters', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("characters"); // todo: change
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.get('/api/films', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("films"); // todo: change
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.get('/api/planets', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("planets"); // todo: change
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.get('/api/characters/:id', async (req, res) => {
  const character_id = req.params.id;
  console.log("Character ID: ", character_id);
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("characters");
  const data = collection.findOne({"id": character_id});
  res.json(data);
});

app.get('/api/films/:id', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.get('/api/planets/:id', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.get('/api/films/:id/characters', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.get('/api/films/:id/planets', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.get('/api/characters/:id/films', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.get('/api/planets/:id/films', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.get('/api/planets/:id/characters', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName); // todo: change
  const data = await collection.find({}).toArray();
  res.json();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});