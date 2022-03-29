import {Navbar, Container, Nav} from 'react-bootstrap'
import './Menubar.css';
import { Link } from 'react-router-dom';


const Menubar = ({navclass, onclickmenu, links, about, works, contact}) => {
    return(
        <>
          <Navbar className="menu" expand="lg">
            <Container className="menu-alinear">
              <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggler" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className={navclass} id="about" onClick={onclickmenu}><Link className={links} to="/">{about}</Link></Nav.Link>
                  <Nav.Link className={navclass} id="works" onClick={onclickmenu}><Link className={links} to="/works">{works}</Link></Nav.Link>
                  <Nav.Link className={navclass} id="contact" onClick={onclickmenu}><Link className={links} to="/contact">{contact}</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Menubar;