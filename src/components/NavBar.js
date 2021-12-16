import {Navbar,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NavBar.css';

export default function NavBar(){
    return(
        <Navbar bg="light" variant="dark" expand="lg" id="sideNav" style={{padding:"0"}}>
            <Container fluid id='navContationer'>
                <Navbar.Brand href="#top" id="navBrand">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/img/profile.jpg" alt="..." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <div id="navBarWrap">
                    <Navbar.Collapse id="navbarScroll" className="navWrap">
                        <Nav
                            className="flex-column"
                            style={{ maxWidth: '100px',}}
                            navbarScroll
                        >
                            <Nav.Link href="#About"><span className="fontWrap">About</span></Nav.Link>
                            <Nav.Link href="#Education"><span className="fontWrap">Education</span></Nav.Link>
                            <Nav.Link href="#Skills"><span className="fontWrap">Skills</span></Nav.Link>
                            <Nav.Link href="#Projects"><span className="fontWrap">Projects</span></Nav.Link>
                            <Nav.Link href="https://tide-anteater-5bc.notion.site/Today-I-Learned-c1fc5994da534a098bd9d8733072d27b"><span className="fontWrap">Blog</span></Nav.Link>
                            <Nav.Link href="#Contact"><span className="fontWrap">Contact</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Clarence Taylor</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav> */