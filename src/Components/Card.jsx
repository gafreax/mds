import "./Card.css"

function Card({children,image,title}) {
    return (
    <div className="card">
        <img src={image}  className="img"/>
        <div className="card-body">
            <h5 className="title">{title}</h5>
            <p className="text">{children}</p>
        </div>
    </div>
    );
}

export default Card