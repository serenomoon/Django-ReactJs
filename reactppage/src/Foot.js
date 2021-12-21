import './Foot.css'

const Foot = (props) => {
    return(
        <>
         {/* <!-- FOOT --> */}
          <div class="foot container-fluid fixed-bottom">
            <div class="foot-row">
              <div class="footbtn foot-col-linkedin col-3">
                <a class="btn btn-outline-danger" href="https://www.linkedin.com/in/saulo-fernandez-146a98197/" role="button"><i class="fab fa-linkedin"></i></a>
              </div>
              <div class="footbtn foot-col-github col-3">
                <a class="btn btn-outline-danger" href="https://github.com/serenomoon" role="button"><i class="fab fa-github-square"></i></a>
              </div>
              <div class="footbtn foot-col-flags col-3">
                <a id="english" onClick={props.onclick} role="button"><img class="flags" src="/static/img/reino-unido.png" alt="ingles"></img></a>
              </div>
              <div class="footbtn foot-col-flags col-3">
                <a id="spanish" onClick={props.onclick} role="button"><img class="flags" src="/static/img/espana.png" alt="español"></img></a>
              </div>
            </div>
            <p class="foot-p">Saulo Fernandez ©</p>
          </div>
        </>
    )
}

export default Foot;