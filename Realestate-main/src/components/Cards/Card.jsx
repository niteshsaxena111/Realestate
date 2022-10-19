import { Container } from '@mui/system';
import * as React from 'react';
import CardDesign from './CardDesign';
import {  Grid } from '@mui/material';
const compare=(value,search)=>{
  console.log(value,search)
  if((value.location === search.location) &&  (value.type === search.propertyType) &&((value.price>search.range[0] )&& (value.price<=search.range[1] ))){
return (
  
  <CardDesign value={value}/>
  
)
  } 
 
}

function Cards({data,search}) {
  
  console.log(search)
  
 if(Object.keys(search).length===0){
  return(
    <Container>
      <Grid container spacing={3}>
    {data.map((value,idx)=>(
<CardDesign value={value}/>
    ))}
    </Grid>
   </Container> 
  )
 }
 else{
  return(
    <Container>
    <Grid container spacing={3}> 
{data.map((value,idx)=>(
  
      compare(value,search)
    ))}
    </Grid> 
    </Container>
  )
      
  
 }
 

        }
export default Cards