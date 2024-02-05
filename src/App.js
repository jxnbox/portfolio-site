import './App.css';
import DisplayMainIntro from './components/DisplayMainIntro.jsx';
import DisplayTechStack from './components/DisplayTechStack.jsx';
import Nav from './components/Nav.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container className='main-container'>
        <Row>
          <Col>
            <DisplayMainIntro />
          </Col>
        </Row>
        <Row>
          <Col>
            <DisplayTechStack />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
