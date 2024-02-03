import "./Menu/Menu.css";
import HomeIcon from "@mui/icons-material/Home";
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
// import Item from '@mui/material'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import support from '../images/marija .png'
;

const Menu = (props) => {
  return (
    <div>
      <div className="navMenu">
        <h2 style={{ marginBottom: "50px" }}> FOOD APP</h2>

        <ul>
          <li className={`${props.page === "home" ? "active-link" : ""}`}>
            <Link to={"/"}>
              <HomeIcon
                style={{
                  marginLeft: "-30px",
                  marginTop: "2px",
                  position: "absolute",
                }}
              />{" "}
              Home
            </Link>
          </li>

          <li className={`${props.page === "progress" ? "active-link" : ""}`}>
            <Link to={"/progress/"}>
              <ModelTrainingIcon
                style={{
                  marginLeft: "-30px",
                  marginTop: "2px",
                  position: "absolute",
                }}
              />{" "}
              Progress
            </Link>
          </li>

          <li className={`${props.page === "stats" ? "active-link" : ""}`}>
            <Link to={"/stats/"}>
              <QueryStatsIcon
                style={{
                  marginLeft: "-30px",
                  marginTop: "2px",
                  position: "absolute",
                }}
              />{" "}
              Stats
            </Link>
          </li>

          <li className={`${props.page === "settings" ? "active-link" : ""}`}>
            <Link to={"/settings/"}>
              <SettingsIcon
                style={{
                  marginLeft: "-30px",
                  marginTop: "2px",
                  position: "absolute",
                }}
              />{" "}
              Settings
            </Link>
          </li>

          <li className={`${props.page === "logout" ? "active-link" : ""}`}>
            <Link to={"/logout/"}>
              <LogoutIcon
                style={{
                  marginLeft: "-30px",
                  marginTop: "2px",
                  position: "absolute",
                }}
              />{" "}
              Log Out
            </Link>
          </li>
        </ul>

        <div className="support">
          <p style={{ paddingTop: "15px" }}>support 24 / 7</p>
          <button className="support-button" >
          <Link to={"/support/"} style={{textDecoration:"none"}}>Start</Link>
          </button>
          <img
            src={support}
           
          />
        </div>
      </div>
    </div>
  );
};
export default Menu;
