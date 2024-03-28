import './App.css';
import Typography from './Components/Typography';
import Card from './Components/Card';
import Colors from './Components/Colors';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {
  const [counterVisible, setCounterVisible] = useState(true)

  return <>
      <Typography>Typography:normal</Typography><br/>
      <Typography color={Colors.primary}>Typography:color primary</Typography><br/>
      <Typography color={Colors.secondary}>Typography:color secondary</Typography><br/>
      <Typography background={Colors.backgroundInverse} color={Colors.inverse}>Typography:color secondary</Typography><br/>
      <Typography componentType="h1">Typography:title</Typography>
      <br />
      <button onClick={() => setCounterVisible(!counterVisible)}>Toggle Counter</button>
      { counterVisible && <Counter /> }
      <Card title="card title" image="./SimpleCode.jpg">Card</Card>
    </>
}

export default App;

