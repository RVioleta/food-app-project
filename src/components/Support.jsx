import {Grid, } from "@mui/material"
import Menu from "./Menu";


const Support = () => {
    return (
        <div>    

        <Grid container spacing={3}>
     <Grid item xs={2}>
       <Menu page="support"/>
     </Grid>

     <Grid item xs={10}>
       <h2>Do you need support?</h2>
     </Grid>
   </Grid>
     </div>
    )
};
export default Support;