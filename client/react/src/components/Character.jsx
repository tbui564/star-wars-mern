import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const objectIsEmpty = (obj) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

const fetchCharacterData = async (id, data, setData) => {
    const url = `http://localhost:3000/api/characters/${id}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    } catch (e) {
        console.error(e);
    }
};

const Character = (props) => {
    const { id }  = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        if (props.characterData.length < 1) {
            console.log("Character data is empty, doing an individual fetch");
            fetchCharacterData(id, character, setCharacter);
        } else if (objectIsEmpty(character)) {
            for (const index in props.characterData) {
                console.log(typeof id);
                if (props.characterData[index].id == id) {
                    setCharacter(props.characterData[index]);
                    break;
                }
            }            
        }
    }, []);

    return (
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
    )
};

export default Character;