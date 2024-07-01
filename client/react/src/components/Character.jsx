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

const Character = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchCharacters(data, setData);
  }, []);
 
  console.log(data[0]?.id)  ;

  return (
    <>
    {data.map(character => <CharacterCard character={character} />)}
    </>
  )
}

export default Character;