import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import HouseIcon from '@mui/icons-material/House';



const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background:"white",color:"#673ab7",}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HouseIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#673ab7',
              textDecoration: 'none',
            }}
          >
            reunion
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,color:"#673ab7"}}>
            
            <Button
              sx={{ my: 2, color: '#673ab7', display: 'block' }}
            >
              Rent
            </Button>
            <Button 
            
              sx={{ my: 2, color: '#673ab7', display: 'block' }}
            >
              Buy
            </Button>
            <Button 
              sx={{ my: 2, color: '#673ab7', display: 'block' }}
            >
              Sell
            </Button>
            <Button >
            

        <NativeSelect 
 sx={{my: 2, color: '#673ab7', display: 'block'}}
 disableUnderline
           >
  <option value="">Manage Property</option>
  <option value="">Manage Property</option>
  <option value="">Manage Property</option>
  <option value="">Manage Property</option>
  <option value="">Manage Property</option>
  <option value="">Manage Property</option>
</NativeSelect>
</Button> 
<Button >
            

        <NativeSelect 
 sx={{my: 2, color: '#673ab7', display: 'block'}}
 disableUnderline
           >
  <option value="">Resources</option>
  <option value="">Resources</option>
  <option value="">Resources</option>
  <option value="">Resources</option>
  <option value="">Resources</option>
  <option value="">Resources</option>
</NativeSelect>
</Button> 
         
        </Box>
            </Menu>
          </Box>

          <HouseIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#673ab7',
              textDecoration: 'none',
            }}
          >
            reunion
          </Typography>

       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,color:"#673ab7"}}>
            
              <Button
                sx={{ my: 2, color: '#673ab7', display: 'block' }}
              >
                Rent
              </Button>
              <Button 
              
                sx={{ my: 2, color: '#673ab7', display: 'block' }}
              >
                Buy
              </Button>
              <Button 
                sx={{ my: 2, color: '#673ab7', display: 'block' }}
              >
                Sell
              </Button>
              <Button >
              
 
          <NativeSelect 
   sx={{my: 2, color: '#673ab7', display: 'block'}}
   disableUnderline
             >
    <option value="">Manage Property</option>
    <option value="">Manage Property</option>
    <option value="">Manage Property</option>
    <option value="">Manage Property</option>
    <option value="">Manage Property</option>
    <option value="">Manage Property</option>
  </NativeSelect>
</Button> 
<Button >
              
 
          <NativeSelect 
   sx={{my: 2, color: '#673ab7', display: 'block'}}
   disableUnderline
             >
    <option value="">Resources</option>
    <option value="">Resources</option>
    <option value="">Resources</option>
    <option value="">Resources</option>
    <option value="">Resources</option>
    <option value="">Resources</option>
  </NativeSelect>
</Button> 
           
          </Box>
          
            
            <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
           <Button variant="outlined" sx={{borderColor:"#673ab7",color:'#673ab7',marginRight: 1 }}>Login</Button>
            <Button variant='contained' sx={{background:"#673ab7"}}>Sign Up</Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
