import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Nav = () => {
    const pages = ["About", "Projects", "Contact"]

    return (
        <AppBar position="static" style={{
            "backgroundColor" : "white",
            "color" : "white"
            }}>
            <Container>
                <nav className='nav-bar' >
                    {pages.map(page => {
                        return <Button
                        variant='h7'
                        key={page}
                        sx={{ 
                            my: 1, 
                            color: 'black', 
                            display: 'block',
                            paddingTop : "0", 
                            paddingBottom: "0", 
                            fontSize : "11px"
                        }}
                        >
                        {page}
                        </Button>
                    })}
                </nav>
            </Container>
        </AppBar>
    );
};

export default Nav;