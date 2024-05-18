import { useContext,useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import {Link} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");
  let user_id: string | undefined;

  if (token) {
    const decoded: any = jwtDecode(token);
    user_id = decoded.user_id;
  }
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    
        <AppBar position="fixed" >
          <Toolbar sx={{marginRight: isSmallScreen ? 0 : 1,
                        marginLeft: isSmallScreen ? 0 : 1,
                        marginTop: isSmallScreen ? 0 : 1,
                        marginBottom: isSmallScreen ? 0 : 1,}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href='/'>
                <img style={{ width: isSmallScreen? "4rem" : "0rem", padding: "0.5rem" }} src="../../logo192.png" alt="" />
              </Link>
            </Typography>
            <Box style={{display:"flex", gap:"1rem", justifyContent:"center",alignItems:"center", flexWrap:"wrap"}} sx={{}}>
                <Link className="nav-link" aria-current="page" href="/"  underline='none' color="inherit">Home</Link>
              {token === null &&
                <>
                    <Link className="nav-link" href="/login" underline='none' color="inherit">Login</Link>
                    <Link className="nav-link" href="/register"  underline='none' color="inherit">Register</Link>
                </>
              }
              {token !== null &&
                <>
                    <Link className="nav-link" href="/dashboard" underline='none' color="inherit">Dashboard</Link>
                    <Link className="nav-link" href="/watchlist" underline='none' color="inherit">Watchlist</Link>
                    <Link className="nav-link" onClick={logoutUser} underline='none' style={{cursor:'pointer'}} color="inherit">Logout</Link>
                </>
              }
            </Box>
          </Toolbar>
        </AppBar>
      
  );
}

export default Navbar;
