import React, {useState,useEffect} from 'react'
import './App.css';
import createPersistedState from 'use-persisted-state';
import Menubar from './Menubar';
import About from './About';
import Works from './Works';
import Contact from './Contact'
import Foot from './Foot';
import Head from './Head'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import api from './apis/projects.js';

import data from './languajes.json'
import WorkView from './WorkView';

function App() {

  const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects  = async () =>{
        const response = await api.get('')
        setProjectInfo(response.data.data)
    }

    useEffect(()=>{
        fetchProjects()
    },[])
  
  const useColorMenuState = createPersistedState('colormenu');
  const [colormenu, setColorMenu] = useColorMenuState(["onenav","links"]);

  const usePageLinkState = createPersistedState('pagelink');
  const [pagelink, setPagelink] = usePageLinkState("/");

  const useWorkImgState = createPersistedState('workimg');
  const useWorkTitleState = createPersistedState('worktitle');
  const useWorkTextState = createPersistedState('worktext');
  const useWorkGitState = createPersistedState('workgit');
  const [workimg, setWorkImg] = useWorkImgState('');
  const [worktitle, setWorkTitle] = useWorkTitleState('');
  const [worktext, setWorkText] = useWorkTextState('');
  const [workgit, setWorkGit] = useWorkGitState('');

  const useWorkTitleEngState = createPersistedState('worktitleeng');
  const useWorkTextEngState = createPersistedState('worktexteng');
  const [worktitleeng, setWorkTitleEng] = useWorkTitleEngState('');
  const [worktexteng, setWorkTextEng] = useWorkTextEngState('');


  const onclickmenu = (e) => {
    const id = e.currentTarget.id
    setPagelink("/"+id)
    if(id == "works" || id == "contact"){
      setColorMenu(["onenavw","linksw"])
    } else {
      setColorMenu(["onenav","links"])
    }
  }

  const onclickbutton = (e) => {
    let id = e.currentTarget.id

    projectInfo.map(project => {if(id === project.attributes.titleeng){
                                setWorkImg(project.attributes.img)
                                setWorkTitleEng(project.attributes.titleeng)
                                setWorkTextEng(project.attributes.texteng)
                                setWorkTitle(project.attributes.titleesp)
                                setWorkText(project.attributes.textesp)
                                setWorkGit(project.attributes.linktogit)}
                                else if(id === project.attributes.titleesp){
                                setWorkImg(project.attributes.img)
                                setWorkTitleEng(project.attributes.titleeng)
                                setWorkTextEng(project.attributes.texteng)
                                setWorkTitle(project.attributes.titleesp)
                                setWorkText(project.attributes.textesp)
                                setWorkGit(project.attributes.linktogit)}
                                })

    id = id.replace(/\s+/g, '-').toLowerCase()
    setPagelink("/"+id)
  }

  const useLanguajeState = createPersistedState('languaje');
  const [languaje, setLanguaje] = useLanguajeState(data.english);

  const onclick = (e) => {
    const id = e.currentTarget.id
    if (id == "spanish"){
      setLanguaje(data.spanish)
    } else {
      setLanguaje(data.english)
    }
  }

  return (
    <div className="App">
      <Head 
        title = {languaje.about.pagetitle}
      />
      <Router>
        <Menubar 
          onclickmenu = {onclickmenu}
          navclass = {colormenu[0]}
          links = {colormenu[1]}
          about = {languaje.about.menu[0]}
          works = {languaje.about.menu[1]}
          contact = {languaje.about.menu[2]}
        />
          <Routes> 
            <Route exact path="/" element={<About 
              onclickmenu = {onclickmenu}
              title = {languaje.about.title[0]}
              subtitle = {languaje.about.title[1]}

              subtitlecenter = {languaje.about.presentation[0]}
              center = {languaje.about.presentation[1]}

              hobbies1 = {languaje.about.hobbies[0]}
              hobbies2 = {languaje.about.hobbies[1]}
              hobbies3 = {languaje.about.hobbies[2]}
              hobbies4 = {languaje.about.hobbies[3]}

              recall = {languaje.about.recall[0]}
              worksb = {languaje.about.recall[1]}
              contactb = {languaje.about.recall[2]}

              cv = {languaje.about.cv[0]}
              cvb = {languaje.about.cv[1]}
            />}/>
              
            <Route exact path="/works" element={<Works 
              title = {languaje.works.title[0]}
              subtitle = {languaje.works.title[1]}

              subtitlecenter = {languaje.works.wiktd[0]}
              center = {languaje.works.wiktd[1]}
              center1 = {languaje.works.wiktd[2]}
              center2 = {languaje.works.wiktd[3]}
              center3 = {languaje.works.wiktd[4]}

              workst = {languaje.works.myworks[0]}
              worksst = {languaje.works.myworks[1]}

              ofcorse1 = {languaje.works.final[0]}
              ofcorse2 = {languaje.works.final[1]}
              
              languaje = {languaje}
              spanishlang = {data.spanish}
              
              projectinfo = {projectInfo}

              onclickbutton = {onclickbutton}

            />}/>

            <Route exact path="/contact" element={<Contact 
              contact = {languaje.contact}
            />}/>

            <Route exact path={pagelink} element={<WorkView
              languaje = {languaje}
              spanishlang = {data.spanish}
              englishlang = {data.english}
              img = {workimg}
              titleeng = {worktitleeng}
              texteng = {worktexteng}
              title = {worktitle}
              text = {worktext}
              gitlink = {workgit}
            />}/>
                

          </Routes>
      </Router>

      <Foot 
        onclick = {onclick}
      />
    </div>
  );
}

export default App;
