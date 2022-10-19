import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';

function CardDesign({value}) {
  
  

  return (
      
      
        
          
           <Grid  item xs={12} sm={6} md={4}>
           <Card sx={{ maxWidth: 345 }}>
           
             <CardMedia
               component="img"
               height="140"
               image={value.images}
               alt="Image Not Found"
             />
             <CardContent>
               <Typography gutterBottom variant="h6" component="div"  sx={{color:"#673ab7"}}>
             <b><span>&#8377;</span>{value.price}</b><small>/month</small>
         
             <FavoriteBorderIcon sx={{float:"right",color:"#673ab7"}}/>
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
             {value.location}
               </Typography>
               <Typography variant="body2" color="text.secondary">
               {value.address}
               </Typography>
             </CardContent>
             <Divider orientation="horizontal" variant="middle" flexItem />
             <CardActions>
              <BedroomParentIcon sx={{m:1,color:"#673ab7"}}/><Typography  sx={{fontSize:12 , color:"#673ab7"}}>{value.bedroom} Beds</Typography>
              <BathtubIcon sx={{color:"#673ab7"}}/><Typography  sx={{fontSize:12 , color:"#673ab7"}}>{value.bathroom} Bathroom</Typography>
             <CropLandscapeIcon sx={{color:"#673ab7"}}/><Typography  sx={{fontSize:12 , color:"#673ab7"}}>{value.squareArea} <span>&#13217;</span></Typography>
             </CardActions>
           </Card>
           </Grid>
       
       
        
          
    
    
  )

        }
export default CardDesign