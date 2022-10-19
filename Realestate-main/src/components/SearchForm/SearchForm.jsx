import * as React from 'react';
import Box from '@mui/material/Box';
import {Button ,Grid} from '@mui/material'
import { Container } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from 'react'; 
import { Typography } from "@mui/material"


export default function SearchForm({handleSubmit,dataSearch}) {
  

 
  console.log(dataSearch)
  const submitValue=(e)=>{
   
    handleSubmit(formValue)
    console.log(formValue)
    e.preventDefault()
  }
  const defaultvalues={
    location:"",
    
    range:[],
    propertyType:""
  };
const [formValue,setFormvalue]= useState(defaultvalues)
const handleOnChange=(e)=>{
  const {name,value}=e.target;
  setFormvalue({
    ...formValue,
    [name]:value,
  })
  console.log(formValue)
}

 return (
    <Container >
      <Box sx={{m: 3}}>
        <Typography variant="h4">
           <b> Search properties to rent</b>
           
        </Typography>
        
    </Box>
    <Box
    
      component="form"
      sx={{
          m:1,mb:4
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitValue}
    >
      
      <Grid container >
     
      <Grid item xs={12} md={3} sx={{mr:2}}>
      <FormControl variant="standard" sx={{  minWidth: '100%' }}>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location"
          id="location"
          name='location'
          
          label="Location"
          onChange={handleOnChange}
        >
        
          {dataSearch[0].location.map((data,idx)=>(
            <MenuItem value={data}>{data}</MenuItem>
          ))}
          
         
        </Select>
      </FormControl>
        </Grid>
       
     
        <Grid item xs={12} md={3} sx={{mr:2}}>
        <FormControl variant="standard" sx={{  minWidth: '100%' }}>
        <InputLabel id="range">Price</InputLabel>
        <Select
          labelId="range"
          id="range"
          onChange={handleOnChange}
          name="range"
          label="range"          
        >
         
          {dataSearch[0].price.map((data,idx)=>(
            <MenuItem value={data}>{data[0]}-{data[1]}</MenuItem>
          ))}
        </Select>
      </FormControl></Grid>
        <Grid item xs={12} md={3} sx={{mr:2}}>
        <FormControl variant="standard" sx={{ minWidth: '100%'}}>
        <InputLabel id="propertyType">Property Type</InputLabel>
        <Select
          labelId="propertyType"
          id="propertyType"
          onChange={handleOnChange}
          name="propertyType"
          label="propertyType"
          
        >
          
          {dataSearch[0].propertyType.map((data,idx)=>(
            <MenuItem value={data}>{data}</MenuItem>
          ))}
          
        </Select>
      </FormControl></Grid>
    <Grid item xs={12} md={2}>
        <Button  size="small" type="submit" variant="contained" sx={{margin:2,backgroundColor:"#673ab7" }}>
          Search
        </Button>
        </Grid>
        
        </Grid>
        
    </Box>
    </Container>
  );
}
