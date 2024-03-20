import './App.css';
import Typography from './Components/Typography';
import Card from './Components/Card';

function App() {
  return (
    <>
      <Typography>Typography:normal</Typography>
      <br/>
      <Typography title={true}>Typography:title</Typography>
      <Card title="title" image="./SimpleCode.jpg">Card</Card>
    </>
  )
}

export default App;

