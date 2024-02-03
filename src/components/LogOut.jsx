import Menu from "./Menu";
import { MenuItem, Button, Grid } from "@mui/material";

const LogOut = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Menu page="logout" />
        </Grid>

        <Grid item xs={10}>
          <h2>Do you want to log out?</h2>
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "20px", 
            padding: "15px 30px" }}
          >
            Log out
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default LogOut;
