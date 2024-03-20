import "./Typography.css"
function Typography ({children,title}){
    if (title) {
        return <span className="component-h1">{children}</span>
    }
    return <span>{children}</span>
    
}
export default Typography
