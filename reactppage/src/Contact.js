import './Contact.css'

const Contact = (props) => {
    return(
        <>
        {/* TOP */}
        <div class="container-fluid-contact">

          <div class="row justify-content-center">
            <div class="imgh1 col-lg-4 col-md-4 col-sm-6">
              <div class="presentacion-contact">
                <div class="imgworkrad-contact">
                  <img class="imgwork-contact" src="/static/img/contactback.jpg" alt="profile"></img>
                </div>
                <h1 class="title">{props.contact}</h1>
              </div>
            </div>
            <div class="imgsueltas-col col-lg-4 col-md-4 col-sm-6">
              <div class="imgsueltas">
                <a class="btn btn-outline-danger" href="https://www.linkedin.com/in/saulo-fernandez-146a98197/" role="button"><i class="fab fa-linkedin"></i></a>
                <a class="btn-github btn btn-outline-danger" href="https://github.com/serenomoon" role="button"><i class="fab fa-github-square"></i></a>
                <a class="btn-instagram btn btn-outline-danger" href="https://www.instagram.com/threetombs/" role="button"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-outline-danger" href="mailto:saulofernandezibar@gmail.com?Subject=Contacto%20desde%20tu%20web%20personal" role="button"><i class="far fa-envelope"></i></a>
              </div>
            </div>
          </div>

        </div>
        </>
    )
}

export default Contact;