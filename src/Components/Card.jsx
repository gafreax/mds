// import PropTypes from 'prop-types';
// import { useState,useEffect } from 'react';
import "./Card.css"
import Colors from "./Colors";
import Typography from "./Typography";

function Card({children, image, title}) {
    // const [image2, setImage2] = useState("https://picsum.photos/id/29/200/300")

    // useEffect(() => {
    //     document.getElementById("myimg").src = image2
    // }, [image2])
    
    // function handleClick() {        
    //     if(image2 === "https://picsum.photos/id/28/200/300") {
    //         setImage2("https://picsum.photos/id/29/200/300")
    //     } else {
    //         setImage2("https://picsum.photos/id/28/200/300")
    //     }
    // }

    return (
    <div className="card">
        <img src={image} className="img" />
        <div className="card-body">
            <Typography componentType="h3" 
                color={Colors.inverse} 
                background={Colors.backgroundSecondary}>
                {title}
            </Typography>
            <Typography componentType="paragraph" 
                color={Colors.inverse} 
                background={Colors.backgroundSecondary}>
                {children}
            </Typography>
            {/* <button className="btn" onClick={() => handleClick()}>change image</button>
            <img id='myimg' className="img" /> */}
        </div>
    </div>
    );
}

// Card.propTypes = {
//     children: PropTypes.element.isRequired,
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// }

export default Card