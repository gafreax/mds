import {useParams} from "react-router-dom";

import Container from "../Components/Container";
import Element from "../Components/Element";
import Typography from "../Components/Typography";

function Welcome() {
    const {firstname, lastname} = useParams()

    return <Container>
        <Element>
            <Typography componentType="h1">Welcome</Typography>
            <Typography componentType="h3">{firstname}, {lastname} </Typography>
        </Element>
    </Container>
}

export default Welcome;