import "./Layout.css"

function Element({children, columns}) {
    return <div className={columns}> {children} </div>
}

export default Element