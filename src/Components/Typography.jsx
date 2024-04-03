import PropType from "prop-types"
import Colors from "./Colors"
import "./Typography.css"

function Typography ({ children, componentType, color=Colors.default, background=Colors.backgroundDefault }){

    const style = {
        ...color,
        ...background
    }

    switch(componentType) {
        case "h1" : 
            return <h1 style={style} className="mds-component-h1">{children}</h1>
        case "h2" : 
            return <h2 style={style} className="mds-component-h2">{children}</h2>
        case "h3" :
            return <h3 style={style} className="mds-component-h3">{children}</h3>
        case "h5" :
            return <h5 style={style} className="mds-component-h5">{children}</h5>
        case "paragraph" :
            return <p style={style}>{children}</p>
        case "span" :
        default :
            return <span style={style}>{children}</span>    
    }
    
}

Typography.propTypes = {
    children: PropType.string.isRequired,
    componentType: PropType.string.isRequired,
    color: PropType.object,
    background: PropType.object,
}

export default Typography
