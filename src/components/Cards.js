import {Modal,Button} from 'react-bootstrap';
import {useState} from 'react';

export default function Cards({path,title}){
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return(
        <div>
            <div style={{ width: '100%', height: '65vh', display:"flex",justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
                    <img src={path} alt={path} width="90%" height="100%" style={{objectFit:"contain",marginLeft:"30px"}} onClick={() => handleShow(true)}/>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
                <Modal.Body style={{textAlign:"center"}}><img src={path} alt={path} width="auto" height="100%" style={{objectFit:"contain", overflow:"auto"}}/></Modal.Body>
            </Modal>
            </div>
        </div>
    );
};