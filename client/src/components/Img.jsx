  import React from 'react';

  const Img = ({ isLarge, img, caption }) => {

    console.log("Caption:", caption); // Agregar este console.log para depurar

    if (isLarge) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h1>{caption}</h1>
          <img src={img} alt={caption} className="w-[700px] h-[500px]" />
        </div>
      );
    } else {
      return <img src={img} alt={caption}/>;
    }
  }

  export default Img;
