import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Project.css';

export default function Project(){
    return(
        <div id="projectWrap">
            <h1 id="projectHeader">Projects</h1>
            <div>
                <h5 className="projectArticleHeader">개인 프로젝트</h5>
                <Row xs={1} md={2} className="g-4">
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
                </Row>
            </div>
            <div>
                <h5 className="projectArticleHeader">팀 프로젝트</h5>
                <Row xs={1} md={2} className="g-4">
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
                </Row>
            </div>
        </div>
    );
}
