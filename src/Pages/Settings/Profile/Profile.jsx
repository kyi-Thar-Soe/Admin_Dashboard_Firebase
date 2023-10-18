import './Profile.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import profileImage from '../../../assets/profile.png';
function createData(name,icon,info) {
  return { name,icon,info };
}

const rows = [
  createData('John Denis','Sale Manager'),
  createData('',<EmailRoundedIcon/>,'john156@gmail.com'),
  createData('',<StayCurrentPortraitIcon/>,'(+95) 999 999 9999'),
  createData('',<LocationOnRoundedIcon/>,'Myanmar'),
];
const secondRows = [
  createData('About me'),
  createData("Hello, I'm John Denis, your dedicated Sales Manager. I've been part of this team for 3 years and I'm passionate about driving growth, achieving targets, and ensuring customer satisfaction. I bring a unique set of skills and experiences to the table.", 'Details'),
  createData('Full Name: ','John Denis'),
  createData('Zip code: ','1111'),
  createData('Website: ','https://tricksuweb.com/'),
];

export default function Profile({ firstText,secondText,jobTitle }) {
    return (
        <Box height={20}>
        <Grid container spacing={2} >
        <Grid item xs={3} >
            <TableContainer component={Paper}>
            <Table aria-label="caption table">
            <TableBody>
            <img src={profileImage} alt='profile-img'/>
            {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name === 'John Denis'?  <span className='text'>{firstText} {secondText}</span> : <span>{row.name}</span>}
                {row.icon === 'Sale Manager'?  <span className='sale-font'>{jobTitle}</span> : <span className='me-3'>{row.icon}</span>}
                <span>{row.info}</span>
               </TableCell>
            </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
        </Grid>
        <Grid item xs={9} >
          <TableContainer component={Paper}>
          <Table aria-label="caption table">
          <TableBody>
          {secondRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
               <span className={row.name === 'About me' ? 'about-font' : 'padding'}>{row.name}</span>
               <span className={row.icon === 'Details' ? 'detail-font' : 'margin'}>{row.icon}</span>
            </TableCell>
            </TableRow>
          ))}
          </TableBody>
          </Table>
          </TableContainer>
        </Grid>
        </Grid>
        </Box>
    )
}