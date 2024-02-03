import Menu from "./Menu";
import { MenuItem, Button, Grid } from "@mui/material";

const Progress = ( ) => {
    return (
        <div>
           <Grid container spacing={3}>
        <Grid item xs={2}>
          <Menu page="progress" />
        </Grid>

        <Grid item xs={10}>
          <h2>This is Progres page</h2>
        </Grid>
      </Grid>
        </div>
    )
};
export default Progress;