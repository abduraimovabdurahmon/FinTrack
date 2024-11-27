// BottomNav.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Search, Notifications, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/search');
        break;
      case 2:
        navigate('/notifications');
        break;
      case 3:
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        boxShadow: 3,
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
      <BottomNavigationAction label="Notifications" icon={<Notifications />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
    </BottomNavigation>
  );
};

export default BottomNav;
