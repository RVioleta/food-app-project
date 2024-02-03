import Menu from "./Menu";
import {Grid } from "@mui/material";


const Settings = ( ) => {
    return (
        <div>
        <Grid container spacing={3}>
     <Grid item xs={2}>
       <Menu page="settings" />
     </Grid>

     <Grid item xs={10}>
       <h2>This is settings page</h2>
     </Grid>
   </Grid>
     </div>
    )
};
export default Settings;