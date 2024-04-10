import Colors from "../Components/Colors"
import Element from "../Components/Element"
import Typography from "../Components/Typography"

function TypographyExample() {
    return <>
        <Element columns={12}>
            <Typography componentType="h1">Typography:title</Typography>
        </Element>
        <Element columns={3}>
            <Typography>Typography:normal</Typography><br />
        </Element>
        <Element columns={3}>
            <Typography color={Colors.primary}>Typography:color primary</Typography><br />
        </Element>
        <Element columns={3}>
            <Typography color={Colors.secondary}>Typography:color secondary</Typography><br />
        </Element>
        <Element columns={3}>
            <Typography background={Colors.backgroundInverse} color={Colors.inverse}>Typography:color secondary</Typography><br />
        </Element>
    </>
}

export default TypographyExample