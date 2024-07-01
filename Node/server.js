import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv, { parse } from 'dotenv';
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
  const character_id = parseInt(req.params.id);
  console.log("Character ID: ", character_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("characters");
  const data = await collection.findOne({id: character_id});
  res.json(data);
});

app.get('/api/films/:id', async (req, res) => {
  const film_id = parseInt(req.params.id);
  console.log("Film ID: ", film_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("films");
  const data = await collection.findOne({id: film_id});
  res.json(data);
});

app.get('/api/planets/:id', async (req, res) => {
  const planet_id = parseInt(req.params.id);
  console.log("Planet ID: ", planet_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("planets");
  const data = await collection.findOne({id: planet_id});
  res.json(data);
});

app.get('/api/films/:id/characters', async (req, res) => {
  const film_id = parseInt(req.params.id);
  console.log("Film ID: ", film_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("films_characters");
  const data = await collection.find({film_id: film_id}).toArray();
  res.json(data);
});

app.get('/api/films/:id/planets', async (req, res) => {
  const film_id = parseInt(req.params.id);
  console.log("Film ID: ", film_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("films_planets");
  const data = await collection.find({film_id: film_id}).toArray();
  res.json(data);
});

app.get('/api/characters/:id/films', async (req, res) => {
  const character_id = parseInt(req.params.id);
  console.log("Character ID: ", character_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("films_characters");
  const data = await collection.find({character_id: character_id}).toArray();
  res.json(data);
});

app.get('/api/planets/:id/films', async (req, res) => {
  const planet_id = parseInt(req.params.id);
  console.log("Planet ID: ", planet_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("films_planets");
  const data = await collection.find({planet_id: planet_id}).toArray();
  res.json(data);
});

app.get('/api/planets/:id/characters', async (req, res) => {
  const planet_id = parseInt(req.params.id);
  console.log("Planet ID: ", planet_id);

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const data = await db.collection("characters").find({homeworld: planet_id}).toArray();

  res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});