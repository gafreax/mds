import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button"
import Element from "../Components/Element"

function Toolbar({ currentState }) {
    const navigate = useNavigate()
    const [state, dispatch] = currentState

    return <>
        <Element columns={4}>
            <Button
                buttonState={state.card ? "active" : "normal"}
                onClick={() => { dispatch({type: "card"}); navigate("/home-card") } }
            >
                Toggle Card
            </Button>
            <Button
                buttonState={state.inputText ? "active" : "normal"}
                onClick={() => { dispatch({type: "inputText"}); navigate("/home-input") }}
            >
                Toggle InputText
            </Button>
            <Button
                buttonState={state.typography ? "active" : "normal"}
                onClick={() => dispatch({type: "typography"})}
            >
                Toggle Typography
            </Button>
            <Button
                buttonState={state.grid ? "active" : "normal"}
                onClick={() => dispatch({type: "grid"})}
            >
                Toggle Grid
            </Button>
        </Element>
        <Element columns={6} className="hidden_on_print">
            <Button
                buttonState={state.counter ? "active" : "normal"}
                onClick={() => dispatch({type: "counter"})}
            >
                Toggle Counter
            </Button>
            <Button
                buttonState={state.pageExample ? "active" : "normal"}
                onClick={() => dispatch({type: "pageExample"})}
            >
                Toggle PageExample
            </Button>
            <Button buttonState="disabled">Button Disabled</Button>
        </Element>
    </>
}

Toolbar.propTypes = {
    currentState: PropTypes.object.isRequired
}

export default Toolbar