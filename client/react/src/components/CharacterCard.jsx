import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character, onClick }) => {
    const linkInfo = {pathname: `character/${character?.id}`, state: character};
    return (
        <Link to={linkInfo}>
            <div className="character-card" onClick={() => { onClick(character) }}>
                <h2>{character?.name}</h2>
            </div>
        </Link>
    )
}

export default CharacterCard;