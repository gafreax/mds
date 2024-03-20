import './App.css';
import Typography from './Components/Typography';
import Card from './Components/Card';

function App() {
  return (
    <>
      <Typography>Typography:normal</Typography>
      <br/>
      <Typography color={{color:"#519c11"}}>Typography color</Typography>
      <br/>
      <Typography componentType="h1">Typography:title</Typography>
      <Card title="card title" image="./SimpleCode.jpg">Card</Card>
    </>
  )
}

export default App;

