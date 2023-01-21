import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton size='large' edge='start'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6'>Open Jira</Typography>
            </Toolbar>
        </AppBar>
    )
}
