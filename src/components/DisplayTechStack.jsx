import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jsIcon from "../pictures/javascript-1 (1).svg";
import htmlIcon from "../pictures/html-1.svg";
import cssIcon from "../pictures/css-3.svg";
import reactIcon from "../pictures/react-2.svg";
import nodeJSIcon from "../pictures/nodejs-1.svg";
import materialUIIcon from "../pictures/material-ui-1.svg"

const DisplayTechStack = () => {
    return (
        <Container className="techstack-div">
            <ul className='techstack-icons'>
                <li className='icon'>
                    <img src={jsIcon} />
                </li>
                <li className='icon'>
                    <img src={htmlIcon} />
                </li>
                <li className='icon'>
                    <img src={cssIcon} />
                </li>
                <li className='icon'>
                    <img src={reactIcon} />
                </li>
                <li className='icon'>
                    <img src={nodeJSIcon} />
                </li>
                <li className='icon'>
                    <img src={materialUIIcon} />
                </li>
            </ul>
        </Container>
    );
};

export default DisplayTechStack;

