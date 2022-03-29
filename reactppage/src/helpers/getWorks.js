
export const getWorks = async() => {
    const url = 'http://127.0.0.1:8000/workslist/'
    const resp = await fetch( url );
    const { data } = await resp.json();

    const works = data.map( info => {
      return {
        type: info.type,
        id: info.id,
        titleeng: info.attributes.titleeng,
        titleesp: info.attributes.titleesp,
        img: info.attributes.img,
        uploadimg: info.attributes.uploadimg,
        texteng: info.attributes.texteng,
        textesp: info.attributes.textesp,
        linktogit: info.attributes.linktogit
      }
    })
    return works;
    
  };
