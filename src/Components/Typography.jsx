import Colors from "./Colors"
import "./Typography.css"

function Typography ({ children,componentType, color=Colors.default, background=Colors.backgroundDefault }){

    
    const style = {
        ...color,
        ...background
    }


    switch(componentType) {
        case "h1" : 
            return <h1 style={style} className="component-h1">{children}</h1>
        case "h3" :
            return <h3 style={style} className="component-h3">{children}</h3>
        case "h5" :
            return <h5 style={style} className="component-h5">{children}</h5>
        case "paragraph" :
            return <p style={style}>{children}</p>
        case "span" :
        default :
            return <span style={style}>{children}</span>    
    }
    
}
export default Typography
