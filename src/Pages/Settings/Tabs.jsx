import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardContent } from '@mui/material';
import Profile from './Profile/Profile';
import PersonalInfo from './Personal-information/PersonalInfo';
import Theme from './Theme/Theme';

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: '#141414',
      '&.Mui-selected': {
        color: '#635ee7',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#30c1d1',
      },
    }),
  );
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTab() {
  const [value, setValue] = React.useState(0);
  const [firstName, setFirstName] = React.useState('');
  const [firstText,setFirstText] = React.useState('John');
  const [secondName, setSecondName] = React.useState('');
  const [secondText,setSecondText] = React.useState('Denis');
  const [jobTitle,setJobTitle] = React.useState('Sale Manager');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{minHeight: 84 + "vh"}}>
        <CardContent>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Profile" {...a11yProps(0)} />
          <StyledTab label="Personal Details" {...a11yProps(1)} />
          <StyledTab label="Preferences" {...a11yProps(2)} />
        </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        <Profile   firstText={firstText}  secondText={secondText} jobTitle={jobTitle}/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
        <PersonalInfo firstName={firstName}  setFirstName={setFirstName} setFirstText={setFirstText}
        secondName={secondName} setSecondName={setSecondName} setSecondText={setSecondText}
        setJobTitle={setJobTitle}/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
        <Theme/>
        </CustomTabPanel>
    </Box>
        </CardContent>
       
    </Card>
  );
}