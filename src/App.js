import { useEffect, useState } from 'react';

import Container from './Components/Container';
import Counter from './Parts/Counter';
import Element from './Components/Element';
import GridExample from './Parts/GridExample';
import PageExample from './Components/PageExample';
import Typography from './Components/Typography';

import CardExample from './Parts/CardExample';
import Toolbar from './Parts/Toolbar';
import TypographyExample from './Parts/TypographyExample';
import InputTextExample from './Parts/InputTextExample';

import './Style/style.scss';

const DEFAULT_VISIBLE_PARTS = {
  card: false,
  counter: false,
  grid: false,
  pageExample: false,
  typography: false,
  inputText: false
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
          { visibleParts.inputText && <InputTextExample  />}
          { visibleParts.typography && <TypographyExample /> }
          { visibleParts.counter && <Counter /> }        
          { visibleParts.card && <CardExample /> }
          { visibleParts.pageExample && <PageExample /> }
      </Container>
      { visibleParts.grid && <GridExample /> }
    </>
}

export default App;

