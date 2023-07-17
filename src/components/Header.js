import react from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/navbar0.jpg';
import img2 from '../assets/navbar01.jpg';
import img3 from '../assets/dieng navbar 3.png'

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;