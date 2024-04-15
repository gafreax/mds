import { useEffect, useState } from 'react';
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


function Home({show}) {
    const [visibleParts, setVisibleParts] = useState({
        card: show === "card",
        counter: false,
        grid: false,
        pageExample: false,
        typography: false,
        inputText: show === "input"
    })


    useEffect(() => console.log("App renderizzata"))

    return <>
        <Container>
            <Element columns={12}>
                <Typography componentType="h1">Musa Desing System</Typography>
            </Element>
            <Element columns={12}>
                <Typography ><Link to="/help">Help</Link></Typography>
            </Element>
            
            <Toolbar currentState={[visibleParts, setVisibleParts]} />
            {visibleParts.inputText && <InputTextExample />}
            {visibleParts.typography && <TypographyExample />}
            {visibleParts.counter && <Counter />}
            {visibleParts.card && <CardExample />}
            {visibleParts.pageExample && <PageExample />}
        </Container>
        {visibleParts.grid && <GridExample />}
    </>
}

export default Home;