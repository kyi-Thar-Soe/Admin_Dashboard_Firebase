import './PersonalInfo.css';
import { Box, Button, Card, CardContent, Divider, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRef } from 'react';

const userType = [
    { label: 'Super admin' },
    { label: 'Admin'},
  ];
export default function PersonalInfo({firstName,setFirstName,setFirstText,secondName,setSecondName,setSecondText,setJobTitle}){
    const jobTitleRef = useRef(null);
    const handleSave = () => {
        setFirstText(firstName);
        setSecondText(secondName);
        setJobTitle(jobTitleRef.current.value);
    };
    return(
        <>
        <Box height={20}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <h5>Personal Information</h5>
                        <Divider className="divider"/>
                        <div className='mt-4 d-flex'>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" className='me-2'  
                        value={firstName}
                        onChange={(event)=>setFirstName(event.target.value)}/>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"
                        value={secondName}
                        onChange={(event)=>setSecondName(event.target.value)}
                        />
                        </div>
                        <TextField
                        id="outlined-multiline-static"
                        placeholder="Bio"
                        multiline
                        rows={4}
                        fullWidth
                        className='mt-4'/>
                        <div className='d-flex mt-4'>
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={userType}
                        sx={{ width: 200 }}
                        size='small'
                        renderInput={(params) => <TextField {...params} label="User Type" />}
                        />
                        <TextField id="outlined-basic" label="Title" variant="outlined" size="small" className='ms-2' inputRef={jobTitleRef}/>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <h5>Content Information</h5>
                        <Divider className="divider"/>
                        <div className='mt-4 d-flex'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" className='me-2'/>
                        <TextField id="outlined-basic" type="number" label="Phone Number" variant="outlined" size="small"/>
                        </div>
                        <TextField id="outlined-basic" label="Website" variant="outlined" size="small" className='mt-4' fullWidth/>
                        <TextField
                        id="outlined-multiline-static"
                        placeholder="Address"
                        multiline
                        rows={4}
                        fullWidth
                        className='mt-4'/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <div className='d-flex justify-content-end mt-3 gap-3'>
        <Button sx={{color: "gray",border: "1px solid gray"}}>Cancel</Button>
        <Button variant="contained" color='success' onClick={handleSave}>Save</Button>
        </div>
        </Box>
       
        </>
    )
}