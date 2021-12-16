import '../css/ResumeSection.css';
import ControlledCarousel from './ControlledCarousel';
import EducationAccodion from './EducationAccodion';
import Skills from './Skills';

export default function ResumeSection(){
    return (
        <section className="resume-section">
                <div className="resume-section-content"  id="top" style={{display:'flex',}}>
                    <div id="GreetingWrap">
                        <h1 className="nameWrap">
                            Byungil
                            <span className="text-primary"> Sohn</span>
                        </h1>
                        <p>안녕하세요! </p>
                        <p>항상 어린아이와 같은 호기심으로</p> 
                        <p style={{textAlign:"right"}}>세상을 바라보며,</p> 
                        <p>실패를 딛고 일어나 앞으로 나아가는 개발자가 되고픈</p> 
                        <p>손병일입니다.</p>
                    </div>
                    <ControlledCarousel/>
                </div>
                <div className="resume-section-content"  id="About" style={{display:'flex',}}>
                </div>
                <div className="resume-section-content"  id="Education" style={{display:'flex',}}>
                    <EducationAccodion/>
                </div>
                <div className="resume-section-content"  id="Skills" style={{display:'flex',}}>
                    <Skills/>
                </div>
                <div className="resume-section-content"  id="Projects" style={{display:'flex',}}>
                </div>
                <div className="resume-section-content"  id="Contact" style={{display:'flex',}}>
                </div>
        </section>
    );
}