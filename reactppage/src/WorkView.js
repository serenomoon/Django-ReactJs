import './WorkView.css';

const WorkView = (props) => {
    {if(props.languaje == props.spanishlang){
        return(
        <>
        <div className='workdiv'>
            <h1>{props.title}</h1>
            <div>
                <img className='workimg' src={props.img}></img>
                <p className='worktext'>{props.text}</p>
                <a className='worklink' href={props.gitlink}>A Github!</a>
            </div>
        </div>
        <img className='workbackground' src='/static/img/workviewback.png'></img>
        </>
        
    )}else{
        return(
        <>
        <div className='workdiv'>
            <h1>{props.titleeng}</h1>
            <div>
                <img className='workimg' src={props.img}></img>
                <p className='worktext'>{props.texteng}</p>
                <a className='worklink' href={props.gitlink}>To Github!</a>
            </div>
        </div>
        <img className='workbackground' src='/static/img/workviewback.png'></img>
        </>
    )}}
};

export default WorkView;