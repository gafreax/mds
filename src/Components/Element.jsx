import PropTypes from "prop-types"

import Colors from "./Colors"

function Element({children, columns, color=Colors.default, className, background=Colors.backgroundDefault}) {
    const style = {
        ...color,
        ...background
    }

    return <div style={style} className={`mds-col-${columns} ${className}`}> 
        {children}
    </div>
}

Element.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
    columns: PropTypes.number.isRequired,
    background: PropTypes.oneOf([
        Colors.backgroundDefault,
        Colors.backgroundInverse,
        Colors.backgroundPrimary,
        Colors.backgroundSecondary
    ]),
    color: PropTypes.oneOf([
        Colors.default,
        Colors.inverse,
        Colors.primary,
        Colors.secondary
    ]),
    className: PropTypes.string
}

export default Element