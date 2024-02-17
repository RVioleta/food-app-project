import Menu from "./Menu";
import { MenuItem, Button, Grid, Link } from "@mui/material";

const LogOut = () => {

  const logout = () =>{
    localStorage.removeItem("token")
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Menu page="logout" />
        </Grid>

        <Grid item xs={10}>
          <h2 style={{marginTop:"100px", marginBottom:"50px"}}>Do you want to log out?</h2>
          {/* <ul>
            <li>
            <Link 
            to="/login/"           
            onclick ={logout()}
            sx={{
              background: "#A8DF8E",
              color: "black",
              textDecoration:'none',
              borderRadius: "25px",
              padding:'10px 20px',
              fontSize: "20px",
              marginTop:'50px',
            }}
          >
            Log Out
          </Link>
            </li>
          </ul> */}
          <button onClick={logout()} style={ {background: "#A8DF8E",
              color: "black",
              borderRadius: "25px",
              marginTop:'50px',}}>
          <a href="/login/" style={ {background: "#A8DF8E",
              color: "black",
              textDecoration:'none',
              borderRadius: "25px",
              padding:'10px 20px',
              fontSize: "20px",
              marginTop:'50px',}}>Log Out</a>
            </button>
         
        </Grid>
      </Grid>
    </div>
  );
};
export default LogOut;
