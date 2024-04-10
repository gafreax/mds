import PropTypes from 'prop-types';
import Colors from "./Colors";
import Typography from "./Typography";
import "./Card.css"

function Card({children, image, title}) {

    return (
    <div className="card">
        <img src={image} className="img" alt='immagine'/>
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

Card.propTypes = {
    children: PropTypes.element.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card