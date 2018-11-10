import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel/index';
import image01 from './images/about_banner_car.png';
import image02 from './images/join_banner_picture.png';
import image03 from './images/recruit_banner.png';
import './index.css';

const IMAGE_DATA = [
  {
    src: image01,
    alt: 'images-1',
  },
  {
    src: image02,
    alt: 'images-2',
  },
  {
    src: image03,
    alt: 'images-3',
  },
];
ReactDOM.render(<Carousel
                  items={IMAGE_DATA}
                  speed={1.2}
                  delay={2.1}
                  pause={true}
                  autoPlay={true}
                  dots={true}
                  arrows={true}/>, document.getElementById('root'));