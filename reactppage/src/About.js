import './About.css';
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const About = (props) => {
    return(
        <>
        {/* <!--TOP--> */}

        <Container fluid>

            <div class="fondo">
                <div class="fadein">
                  <img id="f1" src="/static/img/tarde.jpg" alt="tarde"></img>
                  <img id="f2" src="/static/img/noche.jpg" alt="noche"></img>
                  <img id="f3" src="/static/img/tarde.jpg" alt="tarde"></img>
                  <img id="f4" src="/static/img/dia.jpg" alt="dia"></img>
                </div>
            </div>

            <div class="presentacion">
              <img class="imgprofile" src="/static/img/favicon.png" alt="profile"></img>
              <h1 class="title">{props.title}</h1>
              <h3>{props.subtitle}</h3>
            </div>

        </Container>



        {/* <!--CENTER--> */}
        <div class="center-container">
            <img class="imgprofile" src="/static/img/elbaron.jpg" alt="profile"></img>
            <h1>{props.subtitlecenter}</h1>
            <p>{props.center}</p>
        </div>

        <img class="separador" src="/static/img/corner.png" alt="separador"></img>

        {/* <!-- Hobbies --> */}
        <div class="row hobbies">

            <div class="hobbies-rows col-lg-3 col-md-6 col-sm-12">
              <div class="imghobbiesw">
                <img src="/static/img/watching.gif" alt="movies"></img>
              </div>
              <div class="imghobbies_textl">
                <p>{props.hobbies1}</p>
              </div>
            </div>
        
            <div class="hobbies-rows col-lg-3 col-md-6 col-sm-12">
              <div class="imghobbiesmus">
                <img src="/static/img/music.gif" alt="movies"></img>
              </div>
              <div class="imghobbies_textr">
                <p>{props.hobbies2}</p>
              </div>
            </div>
        
            <div class="hobbies-rows col-lg-3 col-md-6 col-sm-12">
              <div class="imghobbiesr">
                <img src="/static/img/read.gif" alt="movies"></img>
              </div>
              <div class="imghobbies_textl">
                <p>{props.hobbies3}</p>
              </div>
            </div>
        
            <div class="hobbies-rows col-lg-3 col-md-6 col-sm-12">
              <div class="imghobbiesp">
                <img src="/static/img/programing.gif" alt="movies"></img>
              </div>
              <div class="imghobbies_textr">
                <p>{props.hobbies3}</p>
              </div>
            </div>

        </div>

        <img class="bichito-img" src="/static/img/bichito2.png" alt="profile"></img>

        {/* <!-- RECALL --> */}
        <Container fluid className="recall">
            <Row className="recall-row">
              <Col lg="6" sm="12" className="recall-col">
                <p>{props.recall}</p>
              </Col>
              <Col lg="6" sm="12" className="recall-col">
                <a class="btn btn-outline-danger" id="works" onClick={props.onclickmenu}><Link to="/works">{props.worksb}</Link></a>
                <a class="btn btn-outline-danger" id="contact" onClick={props.onclickmenu}><Link to="/contact">{props.contactb}</Link></a>
              </Col>
            </Row>
        </Container>


        {/* <!-- CURRICULUM --> */}
        <div class="cv container-fluid">
            <div class="cv-row row">
              <div class="cv-col col-6">
                <p>{props.cv}</p>
              </div>
              <div class="cv-col col-6">
                <img class="cv-img" src="/static/img/bichito1.png" alt="profile"></img>
                <a href="/static/img/Saulo FI CV English.pdf" class="cv-bt btn btn-outline-danger">{props.cvb}</a>
              </div>
            </div>
        </div>

        
      </>
    )
}

export default About;