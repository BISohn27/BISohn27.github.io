import '../css/ResumeSection.css';
import ControlledCarousel from './ControlledCarousel';
import EducationAccodion from './EducationAccodion';
import Skills from './Skills';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import {useState, useEffect, useRef} from 'react';

export function TypingText() {
    const [text1,setText1] = useState('');
    const [text2,setText2] = useState('');
    const [text3,setText3] = useState('');
    const [text4,setText4] = useState('');
    const [text5,setText5] = useState('');
    const [textTracker,setTextTracker] =useState(0);
    const [count,setCount] = useState(0);
    const initialState = useRef(true);

    const typingText = [
        '안녕하세요!',
    '항상 어린아이와 같은 호기심으로',
    '세상을 바라보며,',
    '앞으로 나아가는, 개발자가 되고픈',
    '손병일입니다.'];

    function interval(text,setText,inputText,time) {
        if(initialState.current === true) {
            setCount(0);
            initialState.current = false;
        }

        const executeInterval= setInterval(()=>{
            setText(text + typingText[textTracker][count]);
            setCount(count + 1);
        },time); 

        if(count === typingText[textTracker].length){
            clearInterval(executeInterval);
            setTextTracker(textTracker + 1);
            initialState.current = true;
        }

        return executeInterval;
    };

    useEffect(()=>{
        let executeInterval;

        switch (textTracker) {
            case 0 :
                executeInterval = interval(text1,setText1,typingText[textTracker],300);
                return ()=>  clearInterval(executeInterval);
            case 1 : 
                executeInterval = interval(text2,setText2,typingText[textTracker],150);
                return ()=>  clearInterval(executeInterval);
            case 2 :
                executeInterval = interval(text3,setText3,typingText[textTracker],150);
                return ()=>  clearInterval(executeInterval);
            case 3 :
                executeInterval = interval(text4,setText4,typingText[textTracker],150);
                return ()=>  clearInterval(executeInterval);
            case 4 :
                executeInterval = interval(text5,setText5,typingText[textTracker],400);
                return ()=>  clearInterval(executeInterval);
            default : 
        }
    });

    return (
        <>
            <p style={{color: "orange", fontSize:"x-large"}}>{text1}<span className = {textTracker ===0 ? "typing" : "typingInactive"}>|</span></p>
            <p style={{color: "whitesmoke", fontSize:"large"}}>{text2}<span className={textTracker === 1 ? "typing" : "typingInactive"}>|</span></p>
            <p style={{color: "whitesmoke", fontSize:"large"}}>{text3}<span className={textTracker === 2 ? "typing" : "typingInactive"}>|</span></p>
            <p style={{color: "whitesmoke", fontSize:"large"}}>{text4}<span className={textTracker === 3 ? "typing" : "typingInactive"}>|</span></p>
            <p style={{color: "lightblue", fontSize:"x-large"}}>{text5}<span className={textTracker ===4 ? "typing" : "typingInactive"}>|</span></p>
        </>
    );
};

export default function ResumeSection(){

    return (
        <section className="resume-section">
                <div id="top">
                    <div id="GreetingWrap">
                        <h1 className="nameWrap">
                            Byungil
                            <span className="text-primary"> Sohn</span>
                        </h1>
                        <br/>
                        <TypingText/>
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
                <Contact/>
        </section>
    );
}