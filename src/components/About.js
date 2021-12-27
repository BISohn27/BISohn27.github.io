import Carousel from 'react-bootstrap/Carousel';
import '../css/About.css';
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

export default function About() {
    return(
        <div id="About">
            <div id="aboutHeader">
                <h1>About</h1>
                <span id="aboutHeaderSpan">
                    "늦깍이 개발자 손병일"
                </span>
            </div>
            <Carousel style={{width:"50%"}}>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/img/20180529_164208.jpg"}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/img/socialanlaysis.jpg"}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/img/20180529_161935.jpg"}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/img/20180529_162002.jpg"}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/img/20180529_161626.jpg"}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            <div id="aboutTextWrap">
                <div id="aboutUpperQuote"><FaQuoteLeft/></div>
                <div id="aboutParagraphWrap">
                    <p>
                        컴퓨터와는 관련이 없는 신소재공학부를 수료한 후, 3개월 간의 유럽여행, 
                        많은 여행지 중 독일 뮌헨에 있는 한 자동차 박물관은 잔잔해지던 마음의 연못에 <span className="emphasizingFont"> 진짜로 하고 싶은 일이 무엇인지</span> 다시금 생각해보라는 돌을 던진 곳이었습니다.
                    </p>
                    <p>
                        1층에서부터 꼭대기 층까지 이어진 긴 나선형 계단 한편에는
                        자체적으로 지구온난화를 비롯한 환경 문제를 분석한 내용이 있고,
                        계단을 따라 올라가며 자동차가 환경에 미치는 영향을 구조 별로 분석해 놓은 후,
                        이를 해결하기 위한 방안을 연구한 자료들이 계단을 따라 나란히 줄지어 있습니다.    
                    </p>
                        그리고 가장 꼭대기 층엔, 연구로 완성된 결실이 실제로 자리잡고 있습니다.
                    <p>
                        다양한 분야의 사람들이 모여, 사회의 현안을 다양한 측면에서 분석하고, 서로가 가진 전문 기술을 합쳐 문제를 해결해 나가는 연대기는 저에게 많은 생각거리를 던져 주었습니다.
                    </p>
                    <p>
                        그 후 우연히 동생을 통해 접한 프로그래밍은 다양한 분야의 사람들이 모여, 사회 문제들을 분석하고, 해결 방안을 고민하는 공학 분야로
                        <span className="emphasizingFont"> 사회에 조금이라도 가치 있는 일</span>을, <span className="emphasizingFont"> 내가 매일 매일 하는 작업들이 누군가에게 작은 도움이 되는 보람을 느낄 수 있는 일</span>을 소프트웨어 개발로 도전하기 위하여 늦은 나이에 프로그래밍을 시작하게 되었습니다. 
                    </p>
                    <p>
                        새로운 분야에 도전하는 어려운 길을 들어서게 했던 <span className="emphasizingFont"> 설레임과 열정을 아로새겨 계속 성장하는 사람</span>이 되고 싶습니다.
                        그래서 제가 앞으로 참여하는 프로젝트가 <span className="emphasizingFont"> 누군가에게 작게라도 도움이 되기를</span> 바랍니다.
                    </p>
                </div>
                <div id="aboutLowerQuote"><FaQuoteRight/></div>
            </div>
        </div>
    );
}