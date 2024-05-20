import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Img from './components/Img';

import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.webp'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'

function App() {

  const images = [img1, img2, img3, img4, img5];

  return (
    <Router>
      <Routes>
        {
          images.map((image, index) => (
            <Route path={`/img${index + 1}`} key={index} element={<Img isLarge={true} img={image}/>}/>
          ))
        }
      </Routes>
      <Navigation/>
    </Router>
  );
}

export default App;
