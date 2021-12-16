import {Accordion} from 'react-bootstrap';

const containerStyle ={
    width:'70%',
    paddingTop:'15%',
    fontFamily: "Saira Extra Condensed",
};
const bodyStyle ={
    display:'flex',
    justifyContent:'space-between'
};
const paragraphStyle={
    width: '50%'
}
const accodionWrap={
    width: '100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    position:'relative',
}

export default function EducationAccodion(){
    return(
        <div style={accodionWrap}>
            <h1 style={{width:'65%', paddingTop:'10%'}}>Education</h1>
            <Accordion style={containerStyle} flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>MultiCampus Web Development Course</h5></Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        <div>
                            <p>
                                온·오프 연계 AI활용 지능형 서비스 개발
                            </p>
                            <p>
                                2021.08 - 2021.12
                            </p>
                        </div>
                        <p style={paragraphStyle}>
                            멀티캠퍼스 과정을 통해 웹 페이지를 구현하는 방법에 대한 전반적인 지식을 학습할 수 있었습니다. 서블릿을 활용하여 미니 MVC를 만들어보면서 MVC 패턴의 원리를 학습하고, 의존성 주입을 통해 해결하고자 한 문제를 직접 경험해보면서 인지할 수 있었고, 스프링, 스프링부트, 리액트 등 다양한 프레임워크나 라이브러리를 학습할 수 있었습니다. 그 외 Git을 활용한 협업과 버전 관리 방법을 배울 수 있었습니다.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Inflearn HTTP Lecture</h5></Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        <div>
                            <p>
                                모든 개발자를 위한 HTTP 웹 기본 지식 by 김영한 팀장
                            </p>
                            <p>
                                2021.11 - 2021.11
                            </p>
                        </div>
                        <p style={paragraphStyle}>
                            멀티캠퍼스 과정 중 HTTP와 같은 통신 규약에 대한 지식이 부족하다고 느껴 학습하게 되었고, 짧은 강의지만 HTTP에 대한 기본적인 지식을 배울 수 있었습니다. 특히 프로그래밍 언어로 웹 개발을 할 때, HTTP 메세지의 내용을 직접적으로 경험해볼 수 없어 정확한 작동 원리를 알기 어려웠는데, 강의를 통해 HTTP 메세지 구성 요소와 역할을 학습하며, 어떤 방식으로 데이터 통신이 이뤄지는지 학습할 수 있었습니다.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>Inflearn C++ Language Lecture</h5></Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        <div>
                            <p>
                                홍정모의 따라하며 배우는 C++
                            </p>
                            <p>
                                2021.07 - 2021.07
                            </p>
                        </div>
                        <p style={paragraphStyle}>
                            처음 객체지향 언어를 접하면서, 객체지향 언어에 대한 기본적인 이해를 얻을 수 있었습니다. 인간이 외부 객체를 인지하는 방식을 차용한 객체지향 개념을 배우며, 절차지향적인 C언어와의 차이를 배울 수 있었습니다. 특히나 클래스-인스턴스 관계는 현실에서 사람이 사물을 인지하는 과정에 대한 관심이 많은 저에게 굉장히 훙미롭게 느껴졌으며, 영어에서 관사를 통해 현실세계에서 사물의 개념과 구체적인 대상을 구별하는 방식을 차용해서 언어를 구현하는 등의 흥미로운 주제들을 배울 수 있었습니다. 
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>Inflearn C language Lecture</h5></Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        <div>
                            <p>
                                홍정모의 따라하며 배우는 C언어
                            </p>
                            <p>
                                2021.06 - 2021.06
                            </p>
                        </div>
                        <p style={paragraphStyle}>
                            고수준 언어 중 가장 하드웨어와 가까운 C언어로 프로그래밍에 입문하면서, 많은 시행 착오를 겪었지만, C언어의 원리를 이해하기 위하여 책 등 다양한 매체를 함께 찾아보는 과정에서 비전공자에게 부족한 컴퓨터 동작 원리를 학습할 수 있었습니다. 기본적으로 언어를 이해하기 위한 학습 과정에서 기본적인 메모리구조(데이터가 쓰이고, 읽히는 방법)을 학습할 수 있었습니다. 또한 바이너리 데이터가 데이터형에 따라 동일한 데이터가 다르게 해석되는 과정을 많이 겪으면서 데이터 해석에 대한 이해를 얻을 수 있었습니다. 한편 간접주소지정 방식인 포인터로 참조형에 대한 이해를 얻게 되어 다른 언어에서 메모리에 어떤 데이터가 저장되는지 판단하는 기준을 배울 수 있었습니다.   
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h5>SKKU University</h5></Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        <div>
                            <p>
                                성균관대학교 신소재공학부 졸업
                            </p>
                            <p>
                                2010.03 - 2021.08 (GPA:3.97)
                            </p>
                        </div>
                        <p style={paragraphStyle}>
                            많은 방황과 좌절이 있던 시기이지만 이 시기를 통해 스스로 학습하는 방법을 터득할 수 있었던 소중한 기간이기도 합니다. 전공에 적응해보고자 전공을 공부하는 과정에서 스스로 찾아서 학습하고, 어려운 부분을 찾아서 이해하는 방법을 터득할 수 있었습니다. 또한 방황하던 시기에 다양한 분야의 책을 읽은 경험은 새로운 분야를 이해하는데 큰 도움이 되었습니다.  
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

