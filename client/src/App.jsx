import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Img from './components/Img';

import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.webp'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';

function App() {

  const elements = [
    { img: img1, caption: 'Caño cristales' },
    { img: img2, caption: 'Cerros de Mavecure' },
    { img: img3, caption: 'Puerto Nariño' },
    { img: img4, caption: 'Raudal de jirijirimo' },
    { img: img5, caption: 'Santuario de Las Lajas' },
    { img: img6, caption: 'Rio Arauca'},
    { img: img7, caption: 'Rio Amazonas'},
    { img: img8, caption: 'Parque de los nevados'},
    { img: img9, caption: 'Cabo de la vela'},
    { img: img10, caption: 'Bosque de santander'}
  ];

  return (
    <Router>
      <Routes>
        {
          elements.map((element, index) => (
            <Route path={`/img${index + 1}`} key={index} element={<Img isLarge={true} caption={element.caption} img={element.img}/>}/>
          ))
        }
      </Routes>
      <Navigation/>
    </Router>
  );
}

export default App;
