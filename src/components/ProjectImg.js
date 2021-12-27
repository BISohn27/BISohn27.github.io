import {useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import Cards from './Cards';
import Col from 'react-bootstrap/Col'
import { FaGithub,FaTimes } from "react-icons/fa";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/ProjectImg.css';

export default function ProjectImg({paragraph,imgSource,text,header,img,skill,contribution,title,summary,learn,url,difficulty}) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [imgArr,setImgArr] = useState();

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
    const close = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(false);
    };

    useEffect(()=>{
        setImgArr(img);
    },[img]);
    
    return (
        <div className="projectImgWrap">
            <Col>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL+`/img/${imgSource}.jpg`} />
                    <Card.Body>
                        <Card.Title>{header}</Card.Title>
                        <Card.Text style={{height:"8vh"}}>
                        {text}
                        </Card.Text>
                        <Button variant="dark" onClick={() => handleShow(true)}>자세히...</Button>
                    </Card.Body>
                </Card>
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header style={{backgroundColor:"rgb(31, 31, 31)", color:"whitesmoke"}}>
                        <div style={{width: "100%", display:"flex", justifyContent:"space-between"}}>
                            <Modal.Title>{header}</Modal.Title>
                            <div style={{display:"flex"}}>
                                <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><h4 className="modalIcon"><FaGithub style/></h4></a>
                                <button onClick={() => close(true)} style={{background:"none", border:"0px", color:"whitesmoke"}}>
                                    <h4 className="modalClose"><FaTimes/></h4>
                                </button>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <div className="sliderWrap">
                            <Slider {...settings}>
                                {imgArr === undefined ? null : 
                                    imgArr.map((path,idx)=>{
                                        return (
                                            <div key={path}>
                                                <div className="cardWrap"><Cards path={path} title={title[idx]}/></div>
                                                <div style={{paddingLeft:"7%"}}>
                                                    <h3>{title[idx]}</h3>
                                                    <p>{paragraph[idx]}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </Slider>
                            <div className="summary">
                                <div style={{width:"50%", display:"flex"}}>
                                    <h4 className="projectDetailHeader">개요</h4>
                                    <div className="seperator"></div>
                                </div>
                                <p className="projectDetailText">{summary}</p>
                            </div>
                            <div className="stack">
                            <div style={{width:"50%", display:"flex"}}>
                                <h4 className="projectDetailHeader">사용 기술</h4>
                                    <div className="seperator"></div>
                                </div>
                                <p className="projectDetailText">
                                    {skill !== undefined ? skill.map((path)=>(<img key={path} style={{objectFit:"contain"}} width="150px" height="100px" src={path} alt={path}/>)) : null}
                                </p>
                            </div>
                            {contribution === null || contribution === undefined ? null :
                                <div className="contribution">
                                    <div style={{width:"50%", display:"flex"}}>
                                    <h4 className="projectDetailHeader">기여도</h4>
                                    <div className="seperator"></div>
                                </div>
                                    <ul className="projectDetailText">
                                            {contribution !== null && contribution !== undefined ? contribution.map((text)=><li>{text}</li>) : null}
                                    </ul>
                                </div>
                            }
                            <div className="learning">
                                <div className="contribution">
                                    <div style={{width:"50%", display:"flex"}}>
                                        <h4 className="projectDetailHeader">프로젝트 소고</h4>
                                        <div className="seperator"></div>
                                    </div>
                                    <h5 style={{width:"50%"}}>Learning</h5>
                                    {learn !== null && learn !== undefined ? 
                                        (learn.length !== 0 ? 
                                            (<ul className="projectDetailText">
                                                {learn.map((text)=><li>{text}</li>)}
                                            </ul>
                                            ) 
                                            : 
                                            <p className="projectDetailText">{text}</p>
                                        )
                                    : 
                                        null
                                    }
                                    
                                    <h5 style={{width:"50%"}}>Difficulty</h5>
                                    <ul className="projectDetailText">
                                        {difficulty !== null && difficulty !== undefined ? difficulty.map((text)=><li>{text}</li>) : null}
                                    </ul>
                                </div>
                            </div>
                            <div style={{height:"17vh"}}></div>
                        </div>
                    </Modal.Body>
                    </Modal>
                </Col>
        </div>
    );
}