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
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import Link from '@mui/material/Link';
import { useKeycloak } from '@react-keycloak/web';
import { NavLink } from 'react-router-dom';

const pages = ['Dashboard', 'Programs', 'Workouts', 'Exercises'];
const settings = ['Profile'];

const ResponsiveAppBar = () => {
  const { keycloak } = useKeycloak();
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


  // const printCurrentUser = () => {
  //   console.log(keycloak.tokenParsed.preferred_username)
  //   console.log(keycloak.tokenParsed.given_name)
  //   console.log(keycloak.tokenParsed.family_name)
  //   console.log(keycloak.tokenParsed.name)
  //   console.log(keycloak.tokenParsed.roles)
  //   if (keycloak.tokenParsed.roles.includes("admin")) {
  //     console.log("User is an admin")
  //   } else console.log("User is NOT an admin")
  // }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Start desktop view */}
          <FitnessCenterOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* User is not logged in */}
          {!keycloak.authenticated && (
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/dashboard"
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
              MeFit
            </Typography>
          )}
          {/* User is logged in */}
          {!!keycloak.authenticated && (
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/dashboard"
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
              MeFit
            </Typography>
          )}
          {/* End desktop view */}

          {/* Start Mobile view */}
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
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Link href={"/" + page} textalign="center" style={{ textDecoration: 'none' }}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <FitnessCenterOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          {/* User is not logged in */}
          {!keycloak.authenticated && (
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MeFit
            </Typography>
          )}

          {/* User is logged in */}
          {!!keycloak.authenticated && (
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/dashboard"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MeFit
            </Typography>
          )}
          {/* End mobile view */}

          {/* Desktop Navigation Links */}
          {!!keycloak.authenticated && (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
              {pages.map((page) => (
                <NavLink
                  to={"/" + page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{ marginRight: '1rem', color: 'white', display: 'block', textDecoration: 'none' }}
                >
                  {page}
                </NavLink>
              ))}
              {(!!keycloak.tokenParsed.roles.includes("admin") || !!keycloak.tokenParsed.roles.includes("contributor")) && (
                <NavLink to="/Contributors"
                  key={"contributors"}
                  onClick={handleCloseNavMenu}
                  style={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>
                  Contributors
                </NavLink>
              )}
            </Box>
          )}

          {/* Login button */}
          {/* <Box sx={{ flexGrow: 0 }}>
            {!keycloak.authenticated && (
              <Button color="primary" variant="contained" onClick={() => keycloak.login() }>Login</Button>
            )}
          </Box> */}

          {/* User Profile Icon */}
          {!!keycloak.authenticated && (
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Typography sx={{mr: '1rem'}}>
                {keycloak.tokenParsed.name}
              </Typography>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={keycloak.tokenParsed.name} src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <NavLink to={"/" + setting} textalign="center" style={{ textDecoration: 'none', color: '#1976d2' }}>{setting}</NavLink>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <Button textalign="center" style={{ textDecoration: 'none' }} onClick={() => keycloak.logout()}>Logout</Button>
                  </MenuItem>
                </Menu>
                {/* <Button variant="contained" onClick={() => printCurrentUser()}>Print user</Button> */}
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
ResponsiveAppBar.propTypes = {};
export default ResponsiveAppBar;
