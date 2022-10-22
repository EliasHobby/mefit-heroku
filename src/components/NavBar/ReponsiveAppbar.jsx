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
  const user = JSON.parse(localStorage.getItem("user"));
  let profilePictureUrl;
  if (user.profilePicture) {
    profilePictureUrl = user.profilePicture;
  } else {
    profilePictureUrl = "https://i.pinimg.com/736x/3d/cd/4a/3dcd4af5bc9e06d36305984730ab7888.jpg"
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(keycloak.subject) // keycloak.subject is the keycloak UUID
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    keycloak.logout();
  }

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
              href="/"
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

          {/* User Profile Icon */}
          {!!keycloak.authenticated && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: '1rem' }}>
                {keycloak.tokenParsed.name}
              </Typography>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Button onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                    <img style={{ height: 40, width: 40, borderRadius: 360, objectFit: 'cover' }} src={profilePictureUrl} alt="" />
                  </Button>
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
                      <NavLink to={"/" + setting}>
                        <Button sx={{ width: '100%' }}>
                          {setting}
                        </Button>
                      </NavLink>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <Button textAlign="center" style={{ textDecoration: 'none' }} onClick={() => handleLogout()}>Logout</Button>
                  </MenuItem>
                </Menu>
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
