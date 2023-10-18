import * as React from 'react';
import './SideBar.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useNavigate } from 'react-router';
import { useAppStore } from '../../AppStore';
import { Context } from '../../Context/Context';


export default function SideBar() {
  const theme = useTheme();
  const {themes} = React.useContext(Context);
  const open = useAppStore((state)=> state.dopen);
  const [activeLink, setActiveLink] = React.useState(() => {
    return localStorage.getItem('activeLink') || 'null';
  });
  const navigate = useNavigate();
  
  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    background: themes === 'light' ? '#f5f5f5' : '#31315c',
    color: themes === 'light' ?  '#141414' : '#f5f5f5',
  });
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: themes === 'light' ? '#f5f5f5' : '#31315c',
  color: themes === 'light' ?  '#141414' : '#f5f5f5',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

  const handleLinkClick = (item) => {
    localStorage.setItem('activeLink', item);
    setActiveLink(item);
  };
  React.useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
        setActiveLink(storedActiveLink);
    }
    }, []);
  return (
    <Box sx={{ display: 'flex' }}>
    <Box height={70}>
      <CssBaseline/>
      <Drawer variant="permanent" open={open}>
      <DrawerHeader>
          <IconButton onClick={()=> setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/*Home*/}
        <List className={`${activeLink === '/home' ? 'active' : ''}`}  onClick={()=>handleLinkClick('/home')}>
          <ListItem disablePadding sx={{ display: 'block' }} 
          onClick={()=>navigate('/home')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
              <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <HomeRoundedIcon style={{color: themes === 'light' ?  '#6c6c6c' : '#f5f5f5'}}/> 
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
          </ListItem>
        </List>

        {/*Products */}
        <List   className={`${activeLink === '/products' ? 'active' : ''}`} onClick={()=>handleLinkClick("/products")}>
          <ListItem disablePadding sx={{ display: 'block' }}
          onClick={()=>navigate('/products')}>
            <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
            >
            <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
            >
            <ShoppingCartRoundedIcon style={{color: themes === 'light' ?  '#6c6c6c' : '#f5f5f5'}}/> 
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        {/*Analytics*/}
        <List className={`${activeLink === '/analytics' ? 'active' : ''}`}  onClick={()=>handleLinkClick('/analytics')}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/analytics')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                 <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <QueryStatsRoundedIcon style={{color: themes === 'light' ?  '#6c6c6c' : '#f5f5f5'}}/> 
                </ListItemIcon>
                <ListItemText primary="Analytics" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        {/*Settings*/}
        <List className={`${activeLink === '/settings' ? 'active' : ''}`}  onClick={()=>handleLinkClick('/settings')}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/settings")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
              <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <SettingsRoundedIcon style={{color: themes === 'light' ?  '#6c6c6c' : '#f5f5f5'}}/> 
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      </Box>
      </Box>
    </Box>
   
  );
}