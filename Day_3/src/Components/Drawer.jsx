import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import './assign.css';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function TemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
    darkTheme: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDarkTheme = (event) => {
    event.stopPropagation(); 
    setState((prevState) => ({ ...prevState, darkTheme: !prevState.darkTheme }));
  };

  const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" secondary="Ragunath@777" />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
    <Link to="/EmployeeStatusDashboard" className="tx" style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
    <List sx={{ marginTop: 53 }}>
      <ListItem disablePadding>
        <ListItemButton onClick={toggleDarkTheme}>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary="Dark Theme" />
        </ListItemButton>
      </ListItem>
      <Divider/>
      <Link to="/settings" className="tx" style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
      <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </ListItem>
    </Link>
    <Divider />
    <Link to="/" className="tx" style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem></Link>
    </List>
  </Box>
  );

  const theme = createTheme({
    palette: {
      mode: state.darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button color="inherit" onClick={toggleDrawer(anchor, true)} style={{ background: 'transparent', boxShadow: 'none' }}>
              <MenuIcon style={{ color: 'inherit' }} />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
}