import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Nav = () => {
    const pages = ["About", "Projects", "Contact"]

    return (
        <AppBar position="static" style={{
            "backgroundColor" : "white",
            "color" : "black"
    }}>
            <Container>
                <Toolbar className='nav-bar' disableGutters>
                    {pages.map(page => {
                        return <Button
                        variant='h7'
                        key={page}
                        sx={{ my: 1, color: 'black', display: 'block' }}
                        >
                        {page}
                        </Button>
                    })}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;