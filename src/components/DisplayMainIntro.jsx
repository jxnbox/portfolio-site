import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

const DisplayMainIntro = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <h1>Welcome, my name is Jan</h1>
                        <p className='bio-section'>
                        I'm a dedicated tech enthusiast with an unwavering passion for programming. As someone who finds joy in the ever-evolving world 
                        of technology, I am constantly exploring new horizons, learning, and embracing the challenges that come with the fast-paced digital
                        landscape. Whether it's crafting elegant code or staying abreast of the latest innovations, my journey in the tech realm is fueled
                        by curiosity and a genuine love for turning ideas into reality through the power of programming.
                        </p>
                    </Stack>
                </Col>
                <Col>
            
                </Col>
            </Row>
        </Container>
    )
}

export default DisplayMainIntro;