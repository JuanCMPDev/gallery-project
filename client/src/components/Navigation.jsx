import React from 'react';
import { Link } from 'react-router-dom';
import Img from './Img';

import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.webp';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';

const elements = [
  { img: img1, caption: 'Caño cristales' },
  { img: img2, caption: 'Cerros de Mavecure' },
  { img: img3, caption: 'Puerto Nariño' },
  { img: img4, caption: 'Raudal de jirijirimo' },
  { img: img5, caption: 'Santuario de Las Lajas' }
];

const Navigation = () => {
  return (
    <div className='flex overflow-x-scroll max-w-[1240px] max-h-[300px]'>
      {elements.map((element, index) => (
        <Link key={index} to={`/img${index + 1}`} className='mr-4 flex-0-0-auto'>
          <figure>
            <div className='w-[250px] h-[250px] overflow-hidden flex justify-center items-center'>
              <Img isLarge={false} img={element.img} caption={element.caption}/>
            </div>
            <figcaption>{element.caption}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
