import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Container from '../Components/Container';
import Counter from '../Parts/Counter';
import Element from '../Components/Element';
import GridExample from '../Parts/GridExample';
import PageExample from '../Parts/PageExample';
import Typography from '../Components/Typography';

import CardExample from '../Parts/CardExample';
import Toolbar from '../Parts/Toolbar';
import TypographyExample from '../Parts/TypographyExample';
import InputTextExample from '../Parts/InputTextExample';

import '../Style/style.scss';

const initalState = {
    card: false,
    counter: true,
    grid: false,
    pageExample: false,
    typography: false,
    inputText: false
}

function reducer(state, action) {
    switch (action.type) {
        case "card": return { ...state, card: !state.card }
        case "counter": return { ...state, counter: !state.counter }
        case "grid": return { ...state, grid: !state.grid }
        case "pageExample": return { ...state, pageExample: !state.pageExample }
        case "typography": return { ...state, typography: !state.typography }
        case "inputText": return { ...state, inputText: !state.inputText }
        default: return initalState
    }
}

function Home({show}) {
    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => console.log("App renderizzata"))

    return <>
        <Container>
            <Element columns={12}>
                <Typography componentType="h1">Musa Desing System</Typography>
            </Element>
            <Element columns={12}>
                <Typography ><Link to="/help">Help</Link></Typography>
            </Element>
            
            <Toolbar currentState={[state, dispatch]} />
            {state.inputText && <InputTextExample />}
            {state.typography && <TypographyExample />}
            {state.counter && <Counter />}
            {state.card && <CardExample />}
            {state.pageExample && <PageExample />}
        </Container>
        {state.grid && <GridExample />}
    </>
}

export default Home;