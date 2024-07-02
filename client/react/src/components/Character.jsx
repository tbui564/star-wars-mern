import React from "react";
import CharacterCard from "./CharacterCard";
import { useState, useEffect } from 'react';

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
   
   
  } catch (error) {
    console.error(error.message);
  }
};


const Character = () => {
  const [data, setData] = useState([])
  
  
  const clickCard = (e) => {
    e.preventDefault();
    fetchCharacterbyId(e.data.id);

  }

  useEffect(() => {
    fetchCharacters(data, setData);
  }, []);
 
  console.log(data[0]?.id)  ;

  return (
    <>
    {data.map(character => <CharacterCard character={character} onClick={clickCard} />)}
    </>
  )
}

export default Character;