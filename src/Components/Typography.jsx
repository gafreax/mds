import "./Typography.css"
function Typography ({children,componentType, color={color:"black"}}){
    switch(componentType) {
        case "h1" : 
            return <span style={color} className="component-h1">{children}</span>
        case "h3" :
            return <span style={color} className="component-h3">{children}</span>
        case "h5" :
            return <span style={color} className="component-h5">{children}</span>
        case "paragraph" :
            return <p style={color}>{children}</p>
        case "span" :
        default :
          return <span style={color}>{children}</span>    
    }
    
}
export default Typography
