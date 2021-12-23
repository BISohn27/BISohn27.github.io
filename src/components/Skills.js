import '../css/Skills.css';
import { SiMysql,SiCplusplus, SiJava,SiJavascript,SiHtml5,SiCss3,SiSpringboot,SiSpring,SiReact } from "react-icons/si";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills(){
    const size = 50;
    return(
        <div id="skillsWrap">
            <h1 id="skillsHeader">Skills</h1>
                <p id="skillsTextWrap">
                    C,C++로 소프트웨어 개발에 입문하여, 멀티캠퍼스 과정에서 <span>자바, 자바스크립트, HTML, CSS</span>의 기본적인 사용법을 학습하였습니다. 
                    개별적으로 진행한 쇼핑몰 프로젝트에서 자바 웹페이지의 시작인 서블릿을 활용해보는 것을 시작으로 <span>JSP, 스프링, 제이쿼리</span> 등을 활용하였습니다.
                    또한 여행 후기를 올리는 팀 프로젝트를 <span>스프링부트, 마이바티스, 타임리프</span>로 구현해보면서 해당 기술로 기본적인 웹 페이지 구현을 할 수 있게 되었습니다.
                    그리고 멀티캠퍼스 과정의 마지막 프로젝트를 앞에서 활용한 기술에 <span>리액트</span>를 접목하여, rest api를 활용한 스프링부트와 리액트 간 데이터 통신을 구현해보면서
                    json으로 데이터를 주고 받는 웹 서비스 구현을 경험했습니다. 한편 마지막 프로젝트에서 엘라스틱 서치와 로그스태시 오픈소스 활용해서 작은 규모의 검색엔진을 구현해보면서
                    역 인덱싱로 구현된 검색엔진을 경험하였고, 스프링부트에서 인증 권한을 관리하기 위해 JWT로 인증 관리를 시도해보면서 rest 방식에서 인증을 구현 매커니즘을 경험하였습니다.
                    짧은 기간 내에 많은 기술들을 경험하다보니 개별 기술에 대한 전문성이 많이 부족하기에 개별 기술의 전문성을 갖추기 위한 학습을 꾸준히 해나갈 예정입니다.
                </p>
            <div id="sectionWrap">
                <div className="articleWrap">
                    <h5>Program Language</h5>
                    <div className="iconWrap">
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <SiJava size={size}/>
                            <div className="iconText">
                                <div>Java</div>
                                <div><ProgressBar striped variant="success" now={50} label='50%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <div className="moreIcons">
                            <SiJavascript size={size}/>
                            </div>
                            <div className="iconText">
                                <div>Javascript</div>
                                <div><ProgressBar striped variant="success" now={50} label='50%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <div className="moreIcons">
                                <SiHtml5 size={size}/>
                                <SiCss3 size={size}/>
                            </div>
                            <div className="iconText">
                                <div>HTML & CSS</div>
                                <div><ProgressBar striped variant="success" now={50} label='50%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <SiCplusplus size={size}/>
                            <div className="iconText">
                                <div>C++</div>
                                <div><ProgressBar striped variant="success" now={25} label='25%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articleWrap">
                    <h5>Framwork & Library</h5>
                    <div className="iconWrap" id="framework">
                        <div style={{minWidth:"150px",textAlign:"center"}}>
                            <div className="moreIcons" style={{minWidth:"150px",textAlign:"center"}}>
                                <SiSpringboot size={size}/>
                                <SiSpring size={size}/>
                            </div>
                            <div className="iconText">
                                <div>Spring Framework</div>
                                <div><ProgressBar striped variant="info" now={50} label='50%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <SiReact size={size}/>
                            <div className="iconText">
                                <div>React</div>
                                <div><ProgressBar striped variant="info" now={40} label='40%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articleWrap">
                    <h5>Database</h5>
                    <div className="iconWrap">
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <SiMysql size={size}/>
                            <div className="iconText">
                                <div>MySQL</div>
                                <div><ProgressBar striped variant="warning" now={50} label='50%' style={{width:'4vw'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};