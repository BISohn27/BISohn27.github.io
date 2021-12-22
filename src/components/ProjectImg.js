import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import Cards from './Cards';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/ProjectImg.css';

export default function ProjectImg({imgSource,text,header}) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };
    
    const handleShow = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
    };

    return (
        <div className="projectImgWrap">
            <div className="projectTextWrap">
                <div className="projectImgTextbox">
                    <h3>{header}</h3>
                    <div className="projectImgText">{text}</div>
                </div>
                <>
                    <Button variant="dark" onClick={() => handleShow(true)}>
                        자세히
                    </Button>
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{header}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <div className="sliderWrap">
                            <Slider {...settings}>
                                <div>
                                    <div className="cardWrap"><Cards/></div>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider>
                        </div>
                    </Modal.Body>
                    </Modal>
                </>
            </div>
            <img className="projectImg" src={`/img/${imgSource}.jpg`} alt={imgSource}/>
        </div>
    );
}