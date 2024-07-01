import React from "react";
const CharacterCard = ({ character }) => {
    return (
        <div className="character-card">
            <h2>{character?.name}</h2>
            <ul>
                <li>ID: {character?.id}</li>
                <li>Name: {character?.name}</li>
                <li>Gender: {character?.gender}</li>
                <li>Skin Color: {character?.skin_color}</li>
                <li>Hair Color: {character?.hair_color}</li>
                <li>Height: {character?.height}</li>
                <li>Eye Color: {character?.eye_color}</li>
                <li>Mass: {character?.mass}</li>
                <li>Homeworld ID: {character?.homeworld}</li>
                <li>Birth: {character?.birth_year}</li>
            </ul>
        </div>
    )
}

export default CharacterCard;