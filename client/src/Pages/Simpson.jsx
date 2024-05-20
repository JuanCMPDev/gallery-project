import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';

const Simpson = () => {
    const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const api = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=8`);
    const data = await api.json();
    console.log(data);
    return data;
  };

  const handleFetchCharacters = async () => {
    const charactersData = await getCharacters();
    setCharacters(charactersData);
    console.log(charactersData);
  };
  return (
    <>
        <Card handleFetchCharacters={handleFetchCharacters}/>
        <div className='flex flex-row justify-center p-4 gap-5 flex-wrap max-w-[1300px]'>
            {characters && characters.length > 0 && (
            characters.map((character, index) => (
                <div key={index} className='flex flex-col justify-between items-center my-1 gap-10 w-[300px] rounded-md shadow-xl bg-white p-6'>
                <div className='flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='min-h-[20px] top-0 text-3xl text-black text-center overflow-wrap break-word'>{character.character}</h1>
                    <img className='h-[200px] object-contain my-2' src={character.image} alt={character.character} />
                    <p className='text-justify'><span className='font-bold text-[18px]'>quote: </span>{character.quote}</p>
                </div>
                </div>
            ))
            )}
        </div>
    </>
  )
}

export default Simpson