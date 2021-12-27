import '../css/Contact.css';
import { FaMapMarkedAlt,FaUserTag,FaGoogle,FaGithub } from "react-icons/fa";

export default function Contact() {
    return(
        <div id="contactWrap">
            <h1 id="contactHeader">Contact.</h1>
            <div id="textField">
                <div style={{width:"100%", height:"15%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <div className="contactLabel">
                        <FaUserTag/>
                    </div>
                    <div className="textArea">
                        손병일
                    </div>
                </div>
                <div style={{width:"100%", height:"15%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <div className="contactLabel">
                        <FaGoogle/>
                    </div>
                    <div className="textArea">
                        skylord418@gmail.com
                    </div>
                </div>
                <div style={{width:"100%", height:"15%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <div className="contactLabel">
                        <FaMapMarkedAlt/>
                    </div>
                    <div className="textArea">
                        서울특별시 동작구 상도동
                    </div>
                </div>
                <div style={{width:"100%", height:"15%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <div className="contactLabel">
                        <FaGithub/>
                    </div>
                    <div className="textArea">
                        <a href={'https://github.com/BISohn27'} target="_blank" rel="noopener noreferrer" id="gitLink">https://github.com/BISohn27</a>
                    </div>
                </div>
            </div>
        </div>
    );
}