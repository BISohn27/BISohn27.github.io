import {useState} from 'react';
import {Carousel,Container,} from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container style={{padding:"0", height:'100vh'}} fluid>
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item interval={2000} style={{height:'100vh'}}>
                <img
                src="/img/20180330_101848.jpg"
                alt="First slide"
                width="100%"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000} style={{height:'100vh'}}>
                <img
                src="/img/20180330_133940.jpg"
                alt="Second slide"
                width="100%"
                />
            </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default ControlledCarousel;