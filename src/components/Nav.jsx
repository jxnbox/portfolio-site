import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Nav = () => {
    const pages = ["About", "Projects", "Contact"]

    return (
        <AppBar position="static" style={{
            "backgroundColor" : "white",
            "color" : "black"
    }}>
            <Container>
                <Toolbar disableGutters>
                    {pages.map(page => {
                        return <Typography
                        variant='h6'
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                        {page}
                        </Typography>
                    })}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;