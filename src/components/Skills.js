import '../css/Skills.css';
import { SiMysql,SiCplusplus, SiJava,SiJavascript,SiHtml5,SiCss3,SiSpringboot,SiSpring,SiReact } from "react-icons/si";

export default function Skills(){
    const size = 60;
    return(
        <div id="skillsWrap">
            <h1 id="skillsHeader">Skills</h1>
            <p>
                C,C++로 소프트웨어 개발에 입문하여, 멀티캠퍼스 과정에서 자바, 자바스크립트, HTML, CSS 기본적인 사용법을 학습하였습니다. 
                개별적으로 진행한 쇼핑몰 프로젝트에서 자바 웹페이지의 시작인 서블릿을 활용해보는 것을 시작으로 JSP, 스프링, 제이쿼리 등을 활용하였습니다.
                여행 후기를 올리는 팀 프로젝트를 스프링부트, 마이바티스, 타임리프로 구현해보면서 해당 기술로 기본적인 웹 페이지 구현을 할 수 있게 되었습니다.
                그리고 멀티캠퍼스 과정의 마지막 프로젝트를 앞에서 활용한 기술에 리액트를 접목하여, rest api를 활용한 스프링부트와 리액트 간 데이터 통신을 구현해보면서
                json으로 데이터를 주고 받는 웹 서비스를 직접 경험해보면서 최근 웹 개발 트렌드를 간접적으로 경험할 수 있었습니다. 또한 이 프로젝트에서 작은 규모로라도 검색엔진을 구현하고자 엘라스틱 서치와 로그스태시 오픈소스 활용해보면서
                비관계형 데이터베이스도 작게나마 경험해볼 수 있었으며, 스프링부트에서 인증 권한을 관리하기 위해 JWT로 인증 관리를 시도해보았습니다.          </p>
            <div id="sectionWrap">
                <div className="articleWrap">
                    <h5>Program Language</h5>
                    <div className="iconWrap">
                        <div>
                            <SiJava size={size}/>
                        </div>
                        <div>
                            <SiJavascript size={size}/>
                        </div>
                        <div>
                            <SiHtml5 size={size}/>
                            <SiCss3 size={size}/>
                        </div>
                        <div>
                            <SiCplusplus size={size}/>
                        </div>
                    </div>
                </div>
                <div className="articleWrap">
                    <h5>Framwork & Library</h5>
                    <div className="iconWrap" id="framework">
                        <div>
                            <SiSpringboot size={size}/>
                            <SiSpring size={size}/>
                        </div>
                        <div>
                            <SiReact size={size}/>
                        </div>
                    </div>
                </div>
                <div className="articleWrap">
                    <h5>Database</h5>
                    <div className="iconWrap">
                        <div>
                            <SiMysql size={size}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};