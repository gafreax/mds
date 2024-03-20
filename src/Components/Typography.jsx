import "./Typography.css"
function Typography ({children,title}){
    if (title) {
        return <span className="title">{children}</span>
    }
    return <span>{children}</span>
    
}
export default Typography
