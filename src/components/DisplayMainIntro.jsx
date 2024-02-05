import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const DisplayMainIntro = () => {
    return (
        <div className='bio-div'>
            <Container>
                <Row>
                    <Col className='selfie-div'>
                        <div className='selfie-img'></div>
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <h1 className='bio-section-h1'>&lt;Fr<span className='h1-title-span'>o</span>ntend Devel<span className='h1-title-span'>o</span>per <span className='h1-title-span'>/</span>&gt; 💻</h1>
                            <p className='bio-section'>
                            Hello, I'm Jan, a tech enthusiast passionate about programming. I love exploring new tech trends, learning, and tackling challenges 
                            in the fast-paced digital world. Whether writing code or staying updated on innovations, my tech journey is fueled by curiosity 
                            and a genuine love for bringing ideas to life through programming.
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DisplayMainIntro;