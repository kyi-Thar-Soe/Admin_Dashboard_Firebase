import './Home.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import AccordionDash from '../../Components/Accordion/Accordion';
import BarChart from '../../Charts/BarChart';
import CountUp from 'react-countup';
import { useAppStore } from '../../AppStore';

export default function Home() {
    const open = useAppStore((state)=> state.dopen);
    const homeStyle = {
        marginLeft: open ? "15rem" : "4rem", // Adjust the values as needed
      };
    
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}
        className='box'>
        {/*first grid */}
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <Stack spacing={2} direction="row">
                <Card sx={{ minWidth:open? 40 + "%" : 51 + "%", height: 140 }}
                style={homeStyle}
                className='gradient'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <CreditCardRoundedIcon className='credit-icon'/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <div className='earning'>
                <span className='earning-price'>$<CountUp delay={0.2} end={500.00} duration={0.3}/></span>
                <span>Total Earning</span>
                </div>
                </Typography>
                </CardContent>
                </Card>
                <Card sx={{ minWidth:open? 40 + "%" : 51 + "%", height: 140 }} className='lightgradient'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <LocalMallRoundedIcon className='order-icon'/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <div className='order'>
                <span className='order-price'>$<CountUp delay={0.2} end={900.00} duration={0.3}/></span>
                <span>Total Order</span>
                </div>
                </Typography>
                </CardContent>
                </Card>
            </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2}>
                <Card sx={{ maxWidth: 345,height: 62 }} 
                style={{marginLeft:"5.8rem"}}
                className='lightgradient'>
                <CardContent>
                    <div className='income-div'>
                        <StorefrontRoundedIcon className='shop-icon'/>
                    <div className='income'>
                        <span className='income-price'>$ 203K</span>
                        <span className='income-title'>Total Income</span>
                    </div>
                    </div>
                </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345,height: 62 }} style={{marginLeft: "5.8rem"}} >
                <CardContent>
                    <div className='income-div'>
                        <StorefrontRoundedIcon className='shop-icon'/>
                    <div className='income'>
                        <span className='income-price'>$ 403K</span>
                        <span className='income-title'>Total Income</span>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </Stack>
            </Grid>
        </Grid>

        {/*Second grid with box*/}
        <Box height={20}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height: 60 + "vh", ...homeStyle,marginTop: "15px"}}>
            <CardContent>
                <BarChart/>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh",marginTop: "15px"}}>
                <CardContent>
                    <div className='popular-products'>
                        Popular Products
                    </div>
                    <AccordionDash/>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Box>
        </Box>
    )
}