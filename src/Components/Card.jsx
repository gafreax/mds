import "./Card.css"
import Colors from "./Colors";
import Typography from "./Typography";

function Card({children,image,title}) {
    return (
    <div className="card">
        <img src={image}  className="img"/>
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
        </div>
    </div>
    );
}

export default Card