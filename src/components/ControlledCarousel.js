import {useState} from 'react';
import {Carousel,Container,} from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container style={{height:'100vh',padding:"0"}} fluid id="mainCarousel">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item interval={2000} style={{height:'100vh'}}>
                <img
                src={process.env.PUBLIC_URL+"/img/20180330_101848.jpg"}
                alt="First slide"
                width="100%"
                style={{objectFit:"contain"}}
                />
            </Carousel.Item>
            <Carousel.Item interval={2000} style={{height:'100vh'}}>
                <img
                src={process.env.PUBLIC_URL+"/img/20180330_133940.jpg"}
                alt="Second slide"
                width="100%"
                />
            </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default ControlledCarousel;