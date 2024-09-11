import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Img from './components/Img';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';

function App() {
  var firstname = ""
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Img />
          <Name />
          <Description />
          <Price />
        </Card.Body>
      </Card>
      <h1>{firstname.length !== 0 ? "Hello " + firstname : "hello there !"}</h1>

    </div>
  );
}

export default App;
