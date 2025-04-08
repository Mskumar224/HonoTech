import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [anchorElCompany, setAnchorElCompany] = React.useState(null);

  const handleServicesClick = (event) => setAnchorElServices(event.currentTarget);
  const handleCompanyClick = (event) => setAnchorElCompany(event.currentTarget);
  const handleClose = () => {
    setAnchorElServices(null);
    setAnchorElCompany(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'primary.main', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Toolbar sx={{ py: 2 }}>
          <Button component={Link} to="/" sx={{ flexGrow: 1, textAlign: 'left', p: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
              Hono Technology
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1, color: '#FFFFFF' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/explore" sx={{ mx: 1, color: '#FFFFFF' }}>
            Explore
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 1, color: '#FFFFFF' }}>
            About Us
          </Button>
          <Button color="inherit" onClick={handleServicesClick} sx={{ mx: 1, color: '#FFFFFF' }}>
            Services
          </Button>
          <Menu anchorEl={anchorElServices} open={Boolean(anchorElServices)} onClose={handleClose}>
            {[
              'App Development', 'Data Engineering & Analysis', 'IT-Resources', 'Full Stack Development',
              'Infrastructure Services', 'Application Management', 'IT Consulting Services', 'IT Security',
              'Testing', 'Mobile Apps', 'Cloud Computing', 'Quality Assurance', 'Offshore Software Development', 'Web Development'
            ].map((service) => (
              <MenuItem
                key={service}
                onClick={handleClose}
                component={Link}
                to={`/services/${service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              >
                {service}
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit" onClick={handleCompanyClick} sx={{ mx: 1, color: '#FFFFFF' }}>
            Company
          </Button>
          <Menu anchorEl={anchorElCompany} open={Boolean(anchorElCompany)} onClose={handleClose}>
            {['About Us', 'Our Goals', 'Our Team', 'Our Philosophy', 'Privacy Policy'].map((item) => (
              <MenuItem
                key={item}
                onClick={handleClose}
                component={Link}
                to={`/company/${item.toLowerCase().replace(/ /g, '-')}`}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit" component={Link} to="/careers" sx={{ mx: 1, color: '#FFFFFF' }}>
            Careers
          </Button>
          <Button color="inherit" component={Link} to="/blog" sx={{ mx: 1, color: '#FFFFFF' }}>
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ mx: 1, color: '#FFFFFF' }}>
            Contact
          </Button>
          <Button color="inherit" href="https://zvertexai.com" target="_blank" sx={{ mx: 1, color: '#FFFFFF' }}>
            Zvertex AI
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;