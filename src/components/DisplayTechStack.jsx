import Container from 'react-bootstrap/Container';
import jsIcon from "../pictures/javascript-1 (1).svg";
import htmlIcon from "../pictures/html-1.svg";
import cssIcon from "../pictures/css-3.svg";
import reactIcon from "../pictures/react-2.svg";
import nodeJSIcon from "../pictures/nodejs-1.svg";
import materialUIIcon from "../pictures/material-ui-1.svg"
import Stack from 'react-bootstrap/Stack';

const DisplayTechStack = () => {
    const icons = [jsIcon, htmlIcon, cssIcon, reactIcon, nodeJSIcon, materialUIIcon]

    return (
        <Container className="techstack-div">
            <Stack gap={3} >
                <h6 className='tech-stack-title'>Tech Stack</h6>
                <ul className='techstack-icons'>
                    {icons.map(icon => {
                        return (
                            <li className='icon' key={icon}>
                                <img src={icon} alt="icon logo"/>
                            </li>
                        )
                    })}
                </ul>
            </Stack>
        </Container>
    );
};

export default DisplayTechStack;

