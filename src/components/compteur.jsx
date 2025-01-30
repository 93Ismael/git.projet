import { useState } from "react";

function Compteur() {
    const [compteur, setCompteur] = useState(0);
    const [historique, setHistorique] = useState([]);

    // fonction à incrementer 

    const incrementer = () => {
        setCompteur(compteur + 1);
        setHistorique([...historique, compteur + 1]);
    };

    //fonction reinitialiser

    const reinitialiser = () => {
        setCompteur(0);
        setHistorique([]);
    };

    return(
        <div>
        <h2>Compteur : {compteur}</h2>
        <button  onClick={incrementer}>Incrementer</button>
        <button onClick={reinitialiser}>Reinitialiser</button>

        <h3>Historique :</h3>

        <ul>
            {historique.map((valeur, index) => (
                <li  key={index}>{valeur}</li>
            ))}
        </ul>
        </div>
    )

}

export default Compteur;
