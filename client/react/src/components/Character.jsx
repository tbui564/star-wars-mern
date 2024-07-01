import React from "react";
import CharacterCard from "./CharacterCard";
import { useState } from 'react';


const Character = () => {
    const [data, setData] = useState({})
        const url = http://localhost:3000/api/characters";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error.message);
        }
    
        return ( 
        
            data.forEach(character => {
                <CharacterCard character = {character} />
        
           })
           
        )
     
        }
    
      export default Character;