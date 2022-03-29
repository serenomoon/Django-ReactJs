import React from 'react';
import './App.css';
import createPersistedState from 'use-persisted-state';
import Menubar from './components/Menubar';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Foot from './components/Foot';
import Head from './components/Head'
import WorkView from './components/WorkView';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { useGetInfo } from './hooks/useGetInfo';
import {english, spanish} from './languajes.json';

const App = () => {

  const {data} = useGetInfo() //Get data from api

  const useColorMenuState = createPersistedState('colormenu'); //change navs colors
  const [colormenu, setColorMenu] = useColorMenuState(["onenav","links"]);

  const usePageLinkState = createPersistedState('pagelink');
  const [pagelink, setPagelink] = usePageLinkState("/");

  const useWorkState = createPersistedState(workdata);
  const [workdata, setWorkData] = useWorkState({
      workimg: '',
      worktitle: '',
      worktitleeng: '',
      worktext: '',
      worktexteng: '',
      workgit: ''
});

  const useLanguajeState = createPersistedState('languaje');
  const [languaje, setLanguaje] = useLanguajeState(english);


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

    data.map(dat => {
                      let imgsplit = null
                      let str = dat.uploadimg
                        if (str == null){
                          imgsplit = dat.img
                        } else {
                          let splitted = str.split('newpage');
                          imgsplit = splitted[1];
                        }
                      setWorkData({
                        workimg: imgsplit,
                        worktitle: dat.titleesp,
                        worktitleeng: dat.titleeng,
                        worktext: dat.textesp,
                        worktexteng: dat.texteng,
                        workgit: dat.linktogit
                        })
                    });
                                
    id = id.replace(/\s+/g, '-').toLowerCase()
    setPagelink("/"+id)
  }

  

  const onclick = (e) => {
    const id = e.currentTarget.id
    if (id == "spanish"){
      setLanguaje(spanish)
    } else {
      setLanguaje(english)
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
              cvpdf = {languaje.about.cvpdf}
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
              spanishlang = {spanish}

              onclickbutton = {onclickbutton}
            />}/>

            <Route exact path="/contact" element={<Contact 
              contact = {languaje.contact}
            />}/>

            <Route exact path={pagelink} element={<WorkView
              languaje = {languaje}
              spanishlang = {spanish}
              englishlang = {english}
              img = {workdata.workimg}
              titleeng = {workdata.worktitleeng}
              texteng = {workdata.worktexteng}
              title = {workdata.worktitle}
              text = {workdata.worktext}
              gitlink = {workdata.workgit}
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
