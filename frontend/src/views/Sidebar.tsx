import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home,Layers } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const drawerWidth = 240;
const Sidebar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  return (
      <Drawer
        variant="permanent"
        anchor="left"
        className="bg-light"
      sx={{
        visibility :isSmallScreen ? 'visible' : 'hidden' ,
        width: isSmallScreen ?drawerWidth : '0px',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginTop:'100px' },
      }}
      >
        <div className="sidebar-sticky mt-4">
          <List>
            <ListItem  component="a" href="/dashboard">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="My Dashboard" />
            </ListItem>
            <ListItem  component="a" href="/watchlist">
              <ListItemIcon>
                <Layers />
              </ListItemIcon>
              <ListItemText primary="My Watchlist" />
            </ListItem>
          </List>
        </div>
      </Drawer>
  );
}

export default Sidebar;
