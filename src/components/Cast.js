import React, { useEffect, useState } from 'react'
import { Character } from './Character';
import { ShowInfoCharacter } from './ShowInfoCharacter';

export const Cast = () => {

    const [arrayCharacters, setArrayCharacters] = useState([])
    const [characterInfo, setCharacterInfo] = useState({})
    
    const consultApi = () => {
        const url = "https://www.breakingbadapi.com/api/characters?limit=20&offset=0";
        fetch(url, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(resul => {
            setArrayCharacters([...resul])
            setCharacterInfo({...resul[0]})
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() =>{
        consultApi()
    }, [])
    
    

    return (
        <>
            <div className="container">
                <div className="CastGrid">
                    {
                        arrayCharacters.map(character => (
                            <Character key={character.char_id} {...character}/>
                        ))
                    }
                </div>
            </div>
            
            {
                <ShowInfoCharacter {...characterInfo}/>
            }
        </>
    )
}
