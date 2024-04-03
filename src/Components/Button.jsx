import "./Button.css"

function calcBtnClasses(buttonState) {
    switch(buttonState) {
        case "active":
            return "mds-btn mds-btn-active"
        case "disabled":
            return "mds-btn mds-btn-disable"
        default:
            return "mds-btn"
    }
}
function Button({children, onClick, buttonState}) {
    const btnClassName = calcBtnClasses(buttonState)
    
    return <button 
        className={btnClassName}
        disabled={buttonState === "disabled"}  
        onClick={onClick}
        >
            {children}
        </button>
}

export default Button