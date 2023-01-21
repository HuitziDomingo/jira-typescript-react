import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import AllInboxIcon from '@mui/icons-material/AllInbox'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

export const SideBar = () => {

    const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']
    return (
        <Drawer
            anchor="bottom"
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ height: '50vh' }}>
                <Box sx={{ padding: '20px 10px' }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, key) => (
                            <ListItem key={key} button>
                                <ListItemIcon>
                                    {key % 2 ? <AllInboxIcon /> : <AlternateEmailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List>
                <Divider/>
                <List>
                    {
                        menuItems.map((text, key) => (
                            <ListItem key={key} button>
                                <ListItemIcon>
                                    {key % 2 ? <AllInboxIcon /> : <AlternateEmailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
