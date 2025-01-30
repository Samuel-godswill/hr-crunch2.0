import React from 'react';
import './Attend.css';
import mtn from '../../assets/mtn.png';
import gpfoods from '../../assets/gpfoods.png';
import uac from '../../assets/UAC-SMART-LOGO-01.png';
import pade from '../../assets/Pade HR.png';
import hrboss from '../../assets/hrboss.jpeg';
import daniel from '../../assets/Daniel Emeka.jpeg';
import seyi from '../../assets/Seyi Olaniyan.jpeg';
import aproko from '../../assets/Aproko Doctor.jpeg';
import yemi from '../../assets/Yemi Faseun.jpeg';
import david from '../../assets/David Odunlami.jpeg';
import eniola from '../../assets/Eniola Taiwo.jpeg';
import emmanuel from '../../assets/Emmanuel Faith.jpeg';
import sandra from '../../assets/Sandra Omobola.jpeg';
import seye from '../../assets/Seye Bandele.jpeg';
import seyifunmi from '../../assets/Seyifunmi Oderinde.jpeg';
import yewande from '../../assets/Yewande Jinadu.jpeg'


interface Speaker {
  src: string;
  name: string;
  title?: string; 
}

const images: Speaker[] = [
  { src: hrboss, name: 'Joel Moses Babatunde', title: 'Convener, HR Crunch' },
  { src: daniel, name: 'Daniel Emeka' },
  { src: seyi, name: 'Seyi Olaniyan' },
  { src: aproko, name: 'Aproko Doctor' },
  { src: yemi, name: 'Yemi Faseun' },
  { src: david, name: 'David Odunlami' },
  { src: eniola, name: 'Eniola Taiwo' },
  { src: emmanuel, name: 'Emmanuel Faith' },
  { src: sandra, name: 'Sandra Omobola' },
  { src: seye, name: 'Seye Bandele' },
  { src: seyifunmi, name: 'Seyifunmi Oderinde' },
  { src: yewande, name: 'Yewande Jinadu' },
];

const Attend: React.FC = () => {
  return (
    <div className="attend-container" id="attend"> 
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.src} alt={image.name} />
            <span className="image-name">{image.name}</span>
            {image.title && <span className="image-title">{image.title}</span>}
          </div>
        ))}
      </div>
      <div className="previous-sponsors">
        <h3>
          Previous Sponsors
        </h3>
      </div>
      <div className="sponsor-logos">
        <div className="sponsor-logo">
          <img src={mtn} alt="MTN" />
        </div>
        <div className="sponsor-logo">
          <img src={gpfoods} alt="GP Foods" />
        </div>
        <div className="sponsor-logo">
          <img src={uac} alt="UAC" />
        </div>
        <div className="sponsor-logo">
          <img src={pade} alt="Pade HR" />
        </div>
      </div>
    </div>
  );
};

export default Attend;
