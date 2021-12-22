import ProjectImg from './ProjectImg';
import '../css/Project.css';

export default function Project(){
    const personalImgSourceArr=['shopping',];
    const teamImgSourceArr=['qr','travel'];
    const personalImgHeaderArr=['쇼핑몰'];
    const teamImgHeaderArr=['내 손안의 키오스크','여행 후기'];
    const personalImgTextArr=['멀티캠퍼스 과정에서 배운 자바웹 프로그래밍 기술들을 단계별로 적용하여 기본적인 쇼핑몰 기능들을 구현한 개인 프로젝트'];
    const teamImgTextArr=['오프라인 좌석에서 QR코드 키오스크 장비 없이 인증을 통한 비대면 통합 주문 시스템을 구현','여행 후기를 올릴 수 있는 사이트'];
    return(
        <div id="Projects">
            <h1 id="projectHeader">Projects</h1>
            <div>
                <h5 className="projectArticleHeader">개인 프로젝트</h5>
                <div className="projectContentWrap">
                    {personalImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} text={personalImgTextArr[idx]} header={personalImgHeaderArr[idx]}/>))}
                </div>
            </div>
            <div>
                <h5 className="projectArticleHeader">팀 프로젝트</h5>
                <div className="projectContentWrap">
                    {teamImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} header={teamImgHeaderArr[idx]} text={teamImgTextArr[idx]}/>))}
                    {/* <img className="projectImg" src="/img/qr.jpg" width="50%" alt="qr" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}/>
                    <img className="projectImg" src="/img/travel.jpg" width="50%" alt="travel" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}/> */}
                </div>
            </div>
        </div>
    );
}


{/* <Row xs={1} md={2} className="g-4">
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row> */}