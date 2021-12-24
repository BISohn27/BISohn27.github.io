import {useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import Cards from './Cards';
import { FaGithub } from "react-icons/fa";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/ProjectImg.css';

export default function ProjectImg({paragraph,imgSource,text,header,img,skill,contribution,title,summary,learning,url}) {
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

    useEffect(()=>{
        setImgArr(img);
    },[img])
    
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
                        <div style={{width: "100%", display:"flex", justifyContent:"space-between"}}>
                            <Modal.Title>{header}</Modal.Title>
                            <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><h4 className="modalIcon"><FaGithub style/></h4></a>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <div className="sliderWrap">
                            <Slider {...settings}>
                                {imgArr === undefined ? null : 
                                    imgArr.map((path,idx)=>{
                                        return (
                                            <div key={path}>
                                                <div className="cardWrap"><Cards path={path}/></div>
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
                                <h4 className="projectDetailHeader">개요</h4>
                                <p className="projectDetailText">{summary}</p>
                            </div>
                            <div className="stack">
                                <h4 className="projectDetailHeader">사용 기술</h4>
                                <p className="projectDetailText">
                                    {skill !== undefined ? skill.map((path)=>(<img key={path} width="150px" height="100px" src={path} alt={path}/>)) : null}
                                </p>
                            </div>
                            {contribution === null || contribution === undefined ? null :
                                <div className="contribution">
                                    <h4 className="projectDetailHeader">기여도</h4>
                                    <p className="projectDetailText">{contribution}</p>
                                </div>
                            }
                            <div className="learning">
                                <h4 className="projectDetailHeader">프로젝트 소고</h4>
                                <p className="projectDetailText">{learning}</p>
                            </div>
                            <div style={{height:"17vh"}}></div>
                        </div>
                    </Modal.Body>
                    </Modal>
                </>
            </div>
            <img className="projectImg" src={process.env.PUBLIC_URL+`/img/${imgSource}.jpg`} alt={imgSource}/>
        </div>
    );
}