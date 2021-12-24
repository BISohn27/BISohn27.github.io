import '../css/ResumeSection.css';
import ControlledCarousel from './ControlledCarousel';
import EducationAccodion from './EducationAccodion';
import Skills from './Skills';
import About from './About';
import Project from './Project';
import {useState, useEffect} from 'react';

export function TypingText({inputText}) {
    const [text,setText] = useState('');
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(text + inputText[count]);
            setCount(count + 1);
        },300);
        if(count === inputText.length){
            clearInterval(interval);
        }

        return ()=>  clearInterval(interval);
        });

    return (
        <p>{text}</p>
    );
};

export default function ResumeSection(){
    return (
        <section className="resume-section">
                <div className="resume-section-content"  id="top" style={{display:'flex',}}>
                    <div id="GreetingWrap">
                        <h1 className="nameWrap">
                            Byungil
                            <span className="text-primary"> Sohn</span>
                        </h1>
                        <br/>
                        <TypingText inputText={'안녕하세요!'}/>
                        <p>항상 어린아이와 같은 <span>호기심</span>으로
                        <br/>세상을 바라보며,</p> 
                        <p>실패와 좌절을 딛고 일어나 
                            <br/><span>앞으로 나아가는</span> 개발자가 되고픈</p> 
                        <p><span>손병일</span>입니다.</p>
                    </div>
                    <ControlledCarousel/>
                </div>
                <About/>
                <div className="resume-section-content"  id="Education" style={{display:'flex',}}>
                    <EducationAccodion/>
                </div>
                <div className="resume-section-content"  id="Skills" style={{display:'flex',}}>
                    <Skills/>
                </div>
                <Project/>
                <div className="resume-section-content"  id="Contact" style={{display:'flex',}}>
                </div>
        </section>
    );
}