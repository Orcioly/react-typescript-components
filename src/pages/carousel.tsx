import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';

const CarouselTest = () => {
  return (
    <Carousel autoPlay showThumbs infiniteLoop useKeyboardArrows>
      <div style={{ height: '200px', color: '#fff' }}>
        <img src={img1} />
        <span>ddddddddddddddddd</span>
      </div>
      <div style={{ height: '200px', color: '#fff' }}>
        <img src={img2} />
      </div>
      <div style={{ height: '200px', color: '#fff' }}>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default CarouselTest;
