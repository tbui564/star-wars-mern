# Stars Wars API Guided MERN Project
Contributors: Jeremiah Dunphy, Thien-Bao Bui

## MongoDB
1. `cd` into /data
2. Replace [filename] with the following: characters, films, planets, films_characters, and films_planets

mongoimport --uri mongodb://localhost:27017/swapi --collection [filename] --file [filename].json --jsonArray --drop