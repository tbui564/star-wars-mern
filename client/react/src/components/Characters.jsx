import React from "react";
import CharacterCard from "./CharacterCard";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const fetchCharacters = async (data, setData) => {
  const url = "http://localhost:3000/api/characters";
  try {
    console.log("Fetching characters from URL");
    const response = await fetch(url);
    const json = await response.json();
    setData(Array.from(json));
  } catch (error) {
    console.error(error.message);
  }
};

const fetchCharacterbyId = async (id) => {
  const url = `http://localhost:3000/api/characters/${id}`;
  try {
    console.log(id);
  } catch (error) {
    console.error(error.message);
  }
};

const Characters = () => {
  const [data, setData] = useState([])
  
  const clickCard = (character) => {
    fetchCharacterbyId(character?.id);
  }

  useEffect(() => {
    fetchCharacters(data, setData);
  }, []);
 
  return (
    <>
      {data.map(character => <CharacterCard character={character} onClick={clickCard} /> )}
    </>
  )
}

export default Characters;