import './Analytics.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GeoChart from '../../Charts/GeoChart';
import PieChart from '../../Charts/PieChart';
import HorizontalBarChart from '../../Charts/HorizontalBarChart';
import CountUp from 'react-countup';
import { useAppStore } from '../../AppStore';

export default function Analytics() {
    const open = useAppStore((state)=>state.dopen);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}
        className='box'>
        {/*first grid */}
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Stack spacing={2}>
            <Stack spacing={2} direction="row">
                <Card sx={{ minWidth:open ? "200px" : "287px", height: 100 }}
                style={{marginLeft:open ? "15rem" : "4rem"}}
                className='gradient'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <div className='visitors'>
                    <span>Visitors</span>
                </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <div className='visitor-count'>
                <span className='visit-count'><CountUp delay={0.4} end={24630} duration={0.6}/></span>
                <span>Since last day</span>
                </div>
                </Typography>
                </CardContent>
                </Card>
                <Card sx={{ minWidth:open ? "200px" : "287px", height: 100 }} className='lightgradient'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <div className='visitors'>
                    <span>Visitors</span>
                </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <div className='visitor-count'>
                <span className='visit-count'><CountUp delay={0.4} end={44630} duration={0.6}/></span>
                <span>Since last week</span>
                </div>
                </Typography>
                </CardContent>
                </Card>
            </Stack>
            <Stack spacing={2} direction="row">
                <Card sx={{ minWidth:open ?  "200px" : "287px", height: 100 }}
                style={{marginLeft:open ? "15rem" : "4rem"}}
                className='gradient'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <div className='visitors'>
                    <span>Visitors</span>
                </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <div className='visitor-count'>
                <span className='visit-count'><CountUp delay={0.4} end={54630} duration={0.6}/></span>
                <span>Since last month</span>
                </div>
                </Typography>
                </CardContent>
                </Card>
                <Card sx={{ minWidth:open ?  "200px" : "287px", height: 100 }} className='lightgradient'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <div className='visitors'>
                    <span>Visitors</span>
                </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <div className='visitor-count'>
                <span className='visit-count'><CountUp delay={0.4} end={64630} duration={0.6}/></span>
                <span>Since last year</span>
                </div>
                </Typography>
                </CardContent>
                </Card>
            </Stack>
            </Stack>
            </Grid>
            <Grid item xs={8}>
                <Card sx={{ maxWidth: 100 + "%",height: 215 }} 
                style={{marginLeft: "16rem"}}
                >
                <CardContent className='horizontal-div'>
                    <HorizontalBarChart/>
                </CardContent>
                </Card>
            </Grid>
        </Grid>

        {/*Second grid with box*/}
        <Box height={20}>
        <Grid container spacing={2} >
            <Grid item xs={9}>
            <Card sx={{ height: 50 + "vh",marginLeft:open ?  "15rem": "4rem",marginTop: "15px"}}
            >
            <CardContent>
               <GeoChart/>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ height: 50 + "vh",marginTop: "15px"}}>
                <CardContent className='pie-div'>
                    <PieChart/>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Box>
        </Box>
    )
}