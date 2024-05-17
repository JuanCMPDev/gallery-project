import { useState } from 'react';
import './App.css';

function App() {
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
    <div className='flex justify-center flex-col items-center'>
      <div className="group flex justify-center my-7 flex-col items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-[#2da9fb] py-2 px-3 rounded-md cursor-pointer transition-all duration-700 hover:shadow-[0_20px_50px_rgba(255,_235,_59,_0.7)]">
        <h1 className='font-bold text-[40px]  text-[#fff]'>Click fetch to bring a random <br /> character from <span className='transition-all duration-700 group-hover:text-[rgb(255,_235,_59)]'>The Simpsons</span></h1>
        <button className="text-white bg-[#fbc02d] hover:bg-[#f9a825] focus:ring-4 focus:ring-[#fdd835] font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 focus:outline-none" onClick={handleFetchCharacters}>Fetch</button>
      </div>
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
    </div>
  );
}

export default App;
