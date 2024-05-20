import React from 'react'

const Card= ({handleFetchCharacters}) => {
  return (
    <div className="group flex justify-center my-7 flex-col items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-[#2da9fb] py-2 px-3 rounded-md cursor-pointer transition-all duration-700 hover:shadow-[0_20px_50px_rgba(255,_235,_59,_0.7)]">
        <h1 className='font-bold text-[40px]  text-[#fff]'>Click fetch to bring a random <br /> character from <span className='transition-all duration-700 group-hover:text-[rgb(255,_235,_59)]'>The Simpsons</span></h1>
        <button className="text-white bg-[#fbc02d] hover:bg-[#f9a825] focus:ring-4 focus:ring-[#fdd835] font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 focus:outline-none" onClick={handleFetchCharacters}>Fetch</button>
      </div>
  )
}

export default Card;