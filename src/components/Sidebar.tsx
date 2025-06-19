import {Box, List, ListItemButton, ListItemText, Stack, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [
    { label: 'App Discovery', path: '/discovery' },
    { label: 'App Inventory', path: '/inventory' },
    { label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
    return (
        <Stack minHeight={"100%"} direction={"column"} width={"240px"} spacing={2} bgcolor={"#393939"}>
            <Toolbar>
                <Box
                    component="img"
                    src="https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/6797b48d427a3acb97fd3b55_Logo.svg"
                    alt="Logo"
                    sx={{ mr: 2 }}
                />
            </Toolbar>
            <List>
                {navItems.map(({ label, path }) => (
                    <NavLink
                        to={path}
                        key={label}
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#1976d2' : 'inherit',
                        })}
                    >
                        <ListItemButton selected={window.location.pathname === path}>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </NavLink>
                ))}
            </List>
        </Stack>
    );
}
