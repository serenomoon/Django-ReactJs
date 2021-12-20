import {Helmet} from "react-helmet";

const Head = (props) => {
    return(
        <Helmet>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>

            {/* Google Fonts*/}
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Montserrat:wght@100&family=Sacramento&display=swap&family=Rubik&display=swap" rel="stylesheet"></link>

            {/* Boostrap */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>        
        
            <link rel="icon" href="img/favicon.ico"></link>

            {/* Font Awesome */}
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-zrnmn8R8KkWl12rAZFt4yKjxplaDaT7/EUkKm7AovijfrQItFWR7O/JJn4DAa/gx" crossorigin="anonymous"></link>
            <script src="https://use.fontawesome.com/f8fac27731.js"></script>
            <title>{props.title}</title>
        </Helmet>
    )
}

export default Head;