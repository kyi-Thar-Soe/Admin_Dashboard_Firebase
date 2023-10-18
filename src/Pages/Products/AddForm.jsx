import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CurrencyPoundRoundedIcon from '@mui/icons-material/CurrencyPoundRounded';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase_config";
import Swal from "sweetalert2";
import { useAppStore } from "../../AppStore";

export default function AddForm({handleClose}) {
    const setRows = useAppStore((state)=> state.setRows);
    const empCollectionRef = collection(db, "Product");
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [category,setCategory] = useState("");
    const categories = [
        {
          value: 'Mobile',
          label: 'Mobile',
        },
        {
          value: 'Laptop',
          label: 'Laptop',
        },
        {
          value: 'Electronics',
          label: 'Electronics',
        },
        {
          value: 'Other',
          label: 'Other',
        },
      ];
    const handleName = (event) => {
        setName(event.target.value)
    };
    const handlePrice = (event) => {
        setPrice(event.target.value)
    };
    const handleCategory = (event) => {
        setCategory(event.target.value)
    };
    const createUser = async() => {
      await addDoc(empCollectionRef,{
        name: name,
        price: Number(price),
        category: category,
        date: String(new Date()),
      });
      getUsers();
      handleClose();
      Swal.fire("Submitted!","Your file has been submitted.","success")
    }
    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return(
        <>
        <Box sx={{m : 2}}/>
        <Typography variant="h5" align="center">
            Add Product
        </Typography>
        <IconButton style={{position : "absolute",top: "0",right: "0"}} onClick={handleClose}>
            <CloseRoundedIcon/>
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12} >
            <TextField id="outlined-basic" label="Name" variant="outlined" size="small" sx={{minWidth: "100%"}} onChange={handleName} value={name}/>
            </Grid>
            <Grid item xs={6} >
            <TextField id="outlined-basic" type="number" label="Price" variant="outlined" size="small" sx={{minWidth: "100%"}} onChange={handlePrice} value={price}         InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <CurrencyPoundRoundedIcon />
            </InputAdornment>
          ),
        }}/>
            </Grid>
            <Grid item xs={6} >
            <TextField id="outlined-basic" label="Category" variant="outlined" size="small" sx={{minWidth: "100%"}} onChange={handleCategory} value={category} select>
            {categories.map((option, index) => (
            <MenuItem key={option.value + index} value={option.value}>
      {option.label}
            </MenuItem>
        ))}
            </TextField>
            </Grid>
            <Grid item xs={12} >
            <Typography variant="h5" align="center">
                <Button variant="contained" onClick={createUser} sx={{marginTop: "20px"}}>
                    Submit
                </Button>
            </Typography>
            </Grid>
        </Grid>
        <Box sx={{m : 4}}/>
        </>
    )
}