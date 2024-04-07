import PropTypes from "prop-types"

import Button from "../Components/Button"
import Element from "../Components/Element"

function Toolbar({ currentState }) {
    const [state, setState] = currentState

    return <Element columns={12}>
        <Button
            buttonState={state.card ? "active" : "normal"}
            onClick={() => setState({ ...state, card: !state.card })}
        >
            Toggle Card
        </Button>
        <Button
            buttonState={state.typography ? "active" : "normal"}
            onClick={() => setState({ ...state, typography: !state.typography })}
        >
            Toggle Typography
        </Button>
        <Button
            buttonState={state.grid ? "active" : "normal"}
            onClick={() => setState({ ...state, grid: !state.grid })}
        >
            Toggle Grid
        </Button>
        <Button
            buttonState={state.counter ? "active" : "normal"}
            onClick={() => setState({ ...state, counter: !state.counter })}
        >
            Toggle Counter
        </Button>
        <Button
            buttonState={state.pageExample ? "active" : "normal"}
            onClick={() => setState({ ...state, pageExample: !state.pageExample })}
        >
            Toggle PageExample
        </Button>
        <Button buttonState="disabled">Button Disabled</Button>
    </Element>
}

Toolbar.propTypes = {
    currentState: PropTypes.object.isRequired
}

export default Toolbar