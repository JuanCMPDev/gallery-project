import { Link } from 'react-router-dom';
import Img from './Img';

import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.webp';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';
import { useEffect } from 'react';

const elements = [
  { img: img1, name: 'Caño cristales', description: 'Maravilla natural de Colombia, conocida como el río de los cinco colores.' },
  { img: img2, name: 'Cerros de Mavecure', description: 'Impresionante formación rocosa en la región amazónica, ideal para la aventura y el ecoturismo.' },
  { img: img3, name: 'Puerto Nariño', description: 'Encantador pueblo amazónico con calles peatonales y una rica cultura indígena.' },
  { img: img4, name: 'Raudal de jirijirimo', description: 'Cascada imponente en plena selva, perfecta para los amantes de la naturaleza y la fotografía.' },
  { img: img5, name: 'Santuario de Las Lajas', description: 'Basilica de estilo gótico situada en un hermoso cañón, un lugar de peregrinación y belleza arquitectónica.' },
  { img: img6, name: 'Rio Arauca', description: 'Río importante en la región, ofrece actividades acuáticas y vistas panorámicas.' },
  { img: img7, name: 'Rio Amazonas', description: 'El río más grande del mundo, hogar de una increíble biodiversidad y comunidades indígenas.' },
  { img: img8, name: 'Parque de los nevados', description: 'Reserva natural que alberga imponentes picos nevados, ideales para el montañismo y el avistamiento de fauna.' },
  { img: img9, name: 'Cabo de la vela', description: 'Playa paradisíaca en la Guajira, famosa por sus aguas cristalinas y atardeceres espectaculares.' },
  { img: img10, name: 'Bosque de santander', description: 'Bosque exuberante en la región de Santander, ideal para el senderismo y el avistamiento de aves.' }
];

{/* 
{elements.map((element, index) => (
        <Link key={index} to={`/img${index + 1}`} className='mr-4 flex-0-0-auto'>
          <figure>
            <div className='w-[250px] min-h-[150px] h-[150px] overflow-hidden flex justify-center items-center'>
              <Img isLarge={false} img={element.img} caption={element.caption}/>
            </div>
            <figcaption className='text-center'>{element.caption}</figcaption>
          </figure>
        </Link>
      ))}
*/}

{/* 
<script>
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  let slider = document.querySelector('.slider');

  next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(Slides[0]);
  })
</script>
*/}

const Navigation = () => {

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slider = document.querySelector('.slider');

    const handleNextClick = () => {
      const slides = document.querySelectorAll('.slides');
      slider.appendChild(slides[0]);
    };

    const handlePrevClick = () => {
      const slides = document.querySelectorAll('.slides');
      slider.prepend(slides[slides.length - 1]);
    };

    next.addEventListener('click', handleNextClick);

    prev.addEventListener('click', handlePrevClick)

    return () => {
      next.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <div className='absolute w-full h-full overflow-hidden flex justify-center items-center'>
      <div className='slider absolute top-20 right-50 bottom-20 left-20 bg-gray-400 rounded-3xl'>
        {
          elements.map((element, index) => (
            <div 
            key={index}
            className='slides absolute w-[240px] h-[320px] transform translate-y-[50%] shadow-[0px_25px_30px_20px_rgba(0,0,0,0.5)] rounded-xl duration-500 bg-cover bg-center flex justify-start items-end' 
            style={{ '--img': `url(${element.img})`, backgroundImage: 'var(--img)' }}>
              <div className='content relative p-10 max-w-[600px] duration-300 translate-y-[40px] z-50 backdrop-blur-sm opacity-0 rounded-lg'>
                <h2 className='text-[2em] text-white'>{element.name}</h2>
                <p className='text-white'>{element.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='buttons absolute bottom-4 flex gap-5'>
          <span className='prev relative w-12 h-12 bg-[#111] cursor-pointer flex justify-center items-center rounded-full'></span>
          <span className='next relative w-12 h-12 bg-[#111] cursor-pointer flex justify-center items-center rounded-full'></span>
        </div>
    </div>
  );
}

export default Navigation;
