import './WorkView.css';

const WorkView = ({ languaje, spanishlang, title, img, text, gitlink, titleeng, texteng}) => {
    {if(languaje == spanishlang){
        return(
        <>
        <div className='workdiv'>
            <h1>{title}</h1>
            <div>
                <img className='workimg' src={img}></img>
                <p className='worktext'>{text}</p>
                <a className='worklink' href={gitlink}>A Github!</a>
            </div>
        </div>
        <img className='workbackground' src='/static/img/workviewback.png'></img>
        </>
        
    )}else{
        return(
        <>
        <div className='workdiv'>
            <h1>{titleeng}</h1>
            <div>
                <img className='workimg' src={img}></img>
                <p className='worktext'>{texteng}</p>
                <a className='worklink' href={gitlink}>To Github!</a>
            </div>
        </div>
        <img className='workbackground' src='/static/img/workviewback.png'></img>
        </>
    )}}
};

export default WorkView;