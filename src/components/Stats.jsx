import Menu from "./Menu";
import { Grid } from "@mui/material";


const Stats = () => {
    return (
        <div>
           <Grid container spacing={3}>
        <Grid item xs={2}>
          <Menu page="stats" />
        </Grid>

        <Grid item xs={10}>
          <h2>This is stats page</h2>
        </Grid>
      </Grid>
        </div>
    )
};
export default Stats;