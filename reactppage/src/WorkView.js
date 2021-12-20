import './WorkView.css';

const WorkView = (props) => {
    return(
        <div className='workdiv'>
            <h1>{props.title}</h1>
            <div>
                <img className='workimg' src={props.img}></img>
                <p className='worktext'>{props.text}</p>
                <a className='worklink' href='{props.gitlink}'>Github!</a>
            </div>
            <img className='workbackground' src='/static/img/workviewback.png'></img>
        </div>
        
    )
};

export default WorkView;