import { useEffect, useState } from 'react';

import Button from './Components/Button';
import Card from './Components/Card';
import Container from './Components/Container';
import Colors from './Components/Colors';
import Counter from './Components/Counter';
import Element from './Components/Element';
import PageExample from './Components/PageExample';
import Typography from './Components/Typography';

import './App.css';

const DEFAULT_VISIBLE_PARTS = {
  card: false,
  counter: false,
  pageExample: false
}

function App() {
  const [visibleParts, setVisibleParts] = useState(DEFAULT_VISIBLE_PARTS)


  useEffect(() => console.log("App renderizzata"))

  return <Container>
      <Element columns="mds-col-12">
        <Typography componentType="h1">Typography:title</Typography>
      </Element>
      <Element columns="mds-col-3">
          <Typography>Typography:normal</Typography><br/>
      </Element>
      <Element columns="mds-col-3">
        <Typography color={Colors.primary}>Typography:color primary</Typography><br/>
      </Element>
      <Element columns="mds-col-3">
        <Typography color={Colors.secondary}>Typography:color secondary</Typography><br/>
      </Element>
      <Element columns="mds-col-3">
        <Typography background={Colors.backgroundInverse} color={Colors.inverse}>Typography:color secondary</Typography><br/>
      </Element>
      <Element columns="mds-col-12">
        <Button
          buttonState={ visibleParts.counter ? "active" : "normal" } 
          onClick={() => setVisibleParts({...visibleParts, counter: !visibleParts.counter })}
        >
          Toggle Counter
        </Button>
        <Button
          buttonState={ visibleParts.pageExample? "active": "normal" }
          onClick={() => setVisibleParts({...visibleParts, pageExample: !visibleParts.pageExample })}
        >
          Toggle PageExample
        </Button>
        { visibleParts.pageExample && <PageExample /> }
        <Button
          buttonState="disabled"
          onClick={() => setVisibleParts({...visibleParts, card: !visibleParts.card })}
        >
          Toggle Card
        </Button>
        { visibleParts.card && <Card title="card title" image="./SimpleCode.jpg">Card</Card> }
      </Element>
      <Element columns="mds-col-12">
        { visibleParts.counter && <Counter /> }
      </Element>
    </Container>
}

export default App;

