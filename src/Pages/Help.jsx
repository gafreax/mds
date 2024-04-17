import { Link } from "react-router-dom";

import Element from "../Components/Element";
import Button from "../Components/Button";
import Container from "../Components/Container";
import Typography from "../Components/Typography";

function Help() {
    return <Container>
        <Element>
            <Typography componentType="h1">Help</Typography>
        </Element>
        <Element>
            <Typography componentType="paragraph">This is the help page</Typography>
        </Element>
        <Element>
            <Button><Link to="/">Go Home</Link></Button>
        </Element>
    </Container>
}
export default Help;