# Stars Wars API Guided MERN Project
Contributors: Jeremiah Dunphy, Thien-Bao Bui

## MongoDB
1. `cd` into /data
2. Run the following command to load the data into MongoDB

mongoimport --uri mongodb://localhost:27017/swapi --collection characters --file characters.json --jsonArray --drop
&&
mongoimport --uri mongodb://localhost:27017/swapi --collection planets --file planets.json --jsonArray --drop
&&
mongoimport --uri mongodb://localhost:27017/swapi --collection films_characters --films_characters.json --jsonArray --drop
&&
mongoimport --uri mongodb://localhost:27017/swapi --collection films_planets --file films_planets.json --jsonArray --drop
&&
mongoimport --uri mongodb://localhost:27017/swapi --collection films --file films.json --jsonArray --drop