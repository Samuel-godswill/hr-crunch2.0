import React from 'react';
import './Attend.css';
import mtn from '../../assets/mtn.png';
import gpfoods from '../../assets/gpfoods.png';
import uac from '../../assets/UAC-SMART-LOGO-01.png';
import pade from '../../assets/Pade HR.png';

const images = [
  { src: '/src/assets/Toniloba Itabiyi.jpeg', name: 'Toniloba Itabiyi' },
  { src: '/src/assets/Daniel Emeka.jpeg', name: 'Daniel Emeka' },
  { src: '/src/assets/Seyi Olaniyan.JPG', name: 'Seyi Olaniyan' },
  { src: '/src/assets/Aproko Doctor.jpeg', name: 'Aproko Doctor' },
  { src: '/src/assets/Anthony Eigbe.jpeg', name: 'Anthony Eigbe' },
  { src: '/src/assets/David Odunlami.jpeg', name: 'David Odunlami' },
  { src: '/src/assets/Eniola Taiwo.jpeg', name: 'Eniola Taiwo' },
  { src: '/src/assets/Emmanuel Faith.JPG', name: 'Emmanuel Faith' },
  { src: '/src/assets/Sandra Omobola.jpeg', name: 'Sandra Omobola' },
  { src: '/src/assets/Seye Bandele.jpeg', name: 'Seye Bandele' },
  { src: '/src/assets/Seyifunmi Oderinde.JPG', name: 'Seyifunmi Oderinde' },
  { src: '/src/assets/Yewande Jinadu.JPG', name: 'Yewande Jinadu' },
  { src: '/src/assets/Yemi Faseun.JPG', name: 'Yemi Faseun' },
  { src: '/src/assets/Precious Dahunsi.jpeg', name: 'Precious Dahunsi' },
  { src: '/src/assets/Kofoworola Kayode.jpeg', name: 'Kofoworola Kayode' },
  { src: '/src/assets/Ngozi Chukwu.jpeg', name: 'Ngozi Chukwu' },
];

const Attend = () => {
  return (
    <div className="attend-container" name="attend">
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.src} alt={image.name} />
            <span className="image-name">{image.name}</span>
          </div>
        ))}
      </div>
      <div className="previous-sponsors">
        <h3>
          <span className="line" /> Previous Sponsors <span className="line" />
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
