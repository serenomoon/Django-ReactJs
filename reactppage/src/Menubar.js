import {Navbar, Container, Nav} from 'react-bootstrap'
import './Menubar.css';
import { Link } from 'react-router-dom';


const Menubar = (props) => {
    return(
        <>
          <Navbar className="menu" expand="lg">
            <Container className="menu-alinear">
              <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggler" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className={props.navclass} id="about" onClick={props.onclickmenu}><Link className={props.links} to="/">{props.about}</Link></Nav.Link>
                  <Nav.Link className={props.navclass} id="works" onClick={props.onclickmenu}><Link className={props.links} to="/works">{props.works}</Link></Nav.Link>
                  <Nav.Link className={props.navclass} id="contact" onClick={props.onclickmenu}><Link className={props.links} to="/contact">{props.contact}</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Menubar;