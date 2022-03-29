import './Works.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useGetInfo } from '../hooks/useGetInfo';

const Works = ({title, subtitle, subtitlecenter, center, center1, center2, center3, workst, worksst, languaje, spanishlang, onclickbutton, ofcorse1, ofcorse2}) => {

    const {data} = useGetInfo()

    return(
        <>
        {/* TOP */}

        <div class="container-work">
          <div class="presentacion-work">
            <div class="imgworkrad">
              <img class="imgwork" src="/static/img/worksback1.jpg" alt="profile"></img>
            </div>
            <h1 class="title">{title}</h1>
            <h3>{subtitle}</h3>
          </div>
        </div>

        {/* CENTER */}
        <div class="center-container-work">
          <img class="imgprofile-work" src="/static/img/clouds.png" alt="profile"></img>
          <h1>{subtitlecenter}</h1>
          <p>{center}</p>
        </div>

       {/* What Know */}
        <div class="row wknow">

          <div class="wknow-rows col">
            <img src="/static/img/html.png" alt="movies"></img>
            <div class="imgwknow_textl">
              <p>{center1}</p>
            </div>
          </div>

          <div class="wknow-rows col">
            <img src="/static/img/djangologo.png" alt="movies"></img>
            <div class="imgwknow_textr">
              <p>{center2}
              </p>
            </div>
          </div>

          <div class="wknow-rows col">
            <img src="/static/img/reactlogo.png" alt="movies"></img>
            <div class="imgwknow_textl">
              <p>{center3}</p>
            </div>
          </div>

        </div>

        <img class="imgcorte-work" src="/static/img/clouds.png" alt="profile"></img>

        {/* Workscall */}
        <div class="workscall container-fluid">
          <div class="workstitle">
            <h1>{workst}</h1>
            <p>{worksst}</p>
          </div>

          <div class="row works">

            {data.map(dat => {
                    if(!dat){
                        return <div>Loading..</div>
                    } else {
                      if( languaje == spanishlang ){
                        let titleslug = dat.titleesp;
                        titleslug = titleslug.replace(/\s+/g, '-').toLowerCase();
                        
                        let imgsplit = null
                        let str = dat.uploadimg
                        if (str == null){
                          imgsplit = dat.img 
                        }else{
                          let splitted = str.split('newpage');
                          imgsplit = splitted[1];
                        }
                        
                        return (
                            <div class="works-rows col-lg-4 col-md-12 col-sm-12">
                              <img src={imgsplit} alt="work"></img>
                                <div class="works_textr">
                                  <h3>{dat.titleesp}</h3>
                                  <p>{dat.textesp}</p>
                                  <Link onClick={onclickbutton} id={dat.titleesp} className="button-53" to={"/"+titleslug}>Ver Mas</Link>
                                </div>
                            </div>
                          )} else {
                            let titleslug = dat.titleeng;
                            titleslug = titleslug.replace(/\s+/g, '-').toLowerCase();
                            
                            let imgsplit = null
                            let str = dat.uploadimg
                            if (str == null){
                              imgsplit = dat.img 
                            }else{
                              let splitted = str.split('newpage');
                              imgsplit = splitted[1];
                            }

                            return (
                              <div class="works-rows col-lg-4 col-md-12 col-sm-12">
                                <img src={imgsplit} alt="work"></img>
                                  <div class="works_textr">
                                    <h3>{dat.titleeng}</h3>
                                    <p>{dat.texteng}</p>
                                    <Link onClick={onclickbutton} id={dat.titleeng} className="button-53" to={"/"+titleslug}>See More</Link>
                                  </div>
                              </div>
                            )
                          }}
                })}
          </div>
        </div>


        {/* OFCORSE */}
        <div class="ofcorse container-fluid">
          <div class="ofcorse-row row">
            <div class="ofcorse-col col-lg-4 col-md-4 col-sm-12">
              <p class="ofcorse-p1">{ofcorse1}</p>
            </div>
            <div class="ofcorse-col col-lg-4 col-md-4 col-sm-12">
              <img class="ofcorse-img" src="/static/img/ofcorse.png" alt="profile"></img>
            </div>
            <div class="ofcorse-col col-lg-4 col-md-4 col-sm-12">
              <p class="ofcorse-p2">{ofcorse2}</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Works;