import { useEffect, useState } from 'react';

import Container from './Components/Container';
import Counter from './Parts/Counter';
import Element from './Components/Element';
import PageExample from './Components/PageExample';
import Typography from './Components/Typography';
import GridExample from './Parts/GridExample';

import './App.css';
import Toolbar from './Parts/Toolbar';
import TypographyExample from './Parts/TypographyExample';
import CardExample from './Parts/CardExample';

const DEFAULT_VISIBLE_PARTS = {
  card: false,
  counter: false,
  grid: false,
  pageExample: false,
  typography: false
}

function App() {
  const [visibleParts, setVisibleParts] = useState(DEFAULT_VISIBLE_PARTS)


  useEffect(() => console.log("App renderizzata"))

  return <>
      <Container>
        <Element columns={12}>
          <Typography componentType="h1">Musa Desing System</Typography>
        </Element>
        <Toolbar currentState={[visibleParts, setVisibleParts]} />
        { visibleParts.typography && <Element columns={12}><TypographyExample /></Element> }
        { visibleParts.counter && <Element columns={12}><Counter /></Element> }        
        { visibleParts.card &&<CardExample /> }
        { visibleParts.pageExample && <Element columns={12}><PageExample /></Element> }
      </Container>
      { visibleParts.grid && <GridExample /> }
    </>
}

export default App;

