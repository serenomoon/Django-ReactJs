import './Works.css';
import { Link } from 'react-router-dom';
import React, {useState,useEffect} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import api from './apis/projects.js';

const Works = (props) => {

    const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects  = async () =>{
        const response = await api.get('')
        setProjectInfo(response.data.data)
    }

    useEffect(()=>{
        fetchProjects()
    },[])


    return(
        <>
        {/* TOP */}

        <div class="container-work">
          <div class="presentacion-work">
            <div class="imgworkrad">
              <img class="imgwork" src="/static/img/worksback1.jpg" alt="profile"></img>
            </div>
            <h1 class="title">{props.title}</h1>
            <h3>{props.subtitle}</h3>
          </div>
        </div>

        {/* CENTER */}
        <div class="center-container-work">
          <img class="imgprofile-work" src="/static/img/clouds.png" alt="profile"></img>
          <h1>{props.subtitlecenter}</h1>
          <p>{props.center}</p>
        </div>

       {/* What Know */}
        <div class="row wknow">

          <div class="wknow-rows col-lg-3 col-md-12 col-sm-12">
            <img src="/static/img/html.png" alt="movies"></img>
            <div class="imgwknow_textl">
              <p>{props.center1}</p>
            </div>
          </div>

          <div class="wknow-rows col-lg-4 col-md-12 col-sm-12">
            <img src="/static/img/python.png" alt="movies"></img>
            <div class="imgwknow_textr">
              <p>{props.center2}
              </p>
            </div>
          </div>

          <div class="wknow-rows col-lg-4 col-md-12 col-sm-12">
            <img src="/static/img/photoshop.png" alt="movies"></img>
            <div class="imgwknow_textl">
              <p>{props.center3}</p>
            </div>
          </div>

        </div>

        <img class="imgcorte-work" src="/static/img/clouds.png" alt="profile"></img>

        {/* Workscall */}
        <div class="workscall container-fluid">
          <div class="workstitle">
            <h1>{props.workst}</h1>
            <p>{props.worksst}</p>
          </div>

          <div class="row works">

            {projectInfo.map(project => {
                    if(!project){
                        return <div>Loading..</div>
                    } else {
                      if( props.languaje == props.spanishlang ){
                        let titleslug = project.attributes.titleesp;
                        titleslug = titleslug.replace(/\s+/g, '-').toLowerCase();
                        return (
                            <div class="works-rows col-lg-4 col-md-12 col-sm-12">
                              <img src={project.attributes.img} alt="work"></img>
                                <div class="works_textr">
                                  <h3>{project.attributes.titleesp}</h3>
                                  <p>{project.attributes.textesp}</p>
                                  <Link onClick={props.onclickbutton} id={project.attributes.titleesp} className="button-53" to={"/"+titleslug}>Ver Mas</Link>
                                  {/* <a href={project.attributes.linktogit}>A GitHub!</a> */}
                                </div>
                            </div>
                          )} else {
                            let titleslug = project.attributes.titleeng;
                            titleslug = titleslug.replace(/\s+/g, '-').toLowerCase();
                            return (
                              <div class="works-rows col-lg-4 col-md-12 col-sm-12">
                                <img src={project.attributes.img} alt="work"></img>
                                  <div class="works_textr">
                                    <h3>{project.attributes.titleeng}</h3>
                                    <p>{project.attributes.texteng}</p>
                                    <Link onClick={props.onclickbutton} id={project.attributes.titleeng} className="button-53" to={"/"+titleslug}>See More</Link>
                                    {/* <a href={project.attributes.linktogit}>To GitHub!</a> */}
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
              <p class="ofcorse-p1">{props.ofcorse1}</p>
            </div>
            <div class="ofcorse-col col-lg-4 col-md-4 col-sm-12">
              <img class="ofcorse-img" src="/static/img/ofcorse.png" alt="profile"></img>
            </div>
            <div class="ofcorse-col col-lg-4 col-md-4 col-sm-12">
              <p class="ofcorse-p2">{props.ofcorse2}</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Works;