import React from "react";
const CharacterCard = ({Character}) => {
    return (
   <div className ="character-card">
    <h2>{Character.name}</h2>
    <ul>
        {Character.map(attribute => {
            (
                
                <li key={attribute}>{attribute}: {Character[attribute]}

                </li>
            )
        
        })} 
    </ul>

   </div>
)}

export default CharacterCard;