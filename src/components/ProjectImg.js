import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../css/ProjectImg.css';

export default function ProjectImg({imgSource,text,header}) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    
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
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                    </Modal>
                </>
            </div>
            <img className="projectImg" src={`/img/${imgSource}.jpg`} alt={imgSource}/>
        </div>
    );
}