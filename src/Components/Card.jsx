import "./Card.css"
import Typography from "./Typography";

function Card({children,image,title}) {
    return (
    <div className="card">
        <img src={image}  className="img"/>
        <div className="card-body">
            <Typography componentType="h3" color={{color:"white"}}>
                {title}
            </Typography>
            <Typography componentType="paragraph" color={{color:"white"}}>
                {children}
            </Typography>
        </div>
    </div>
    );
}

export default Card