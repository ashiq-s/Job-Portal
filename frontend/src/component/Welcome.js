import { Grid, Typography } from "@material-ui/core";
// import { BottomNavigation } from '@mui/material';
import Untitled from './Untitled.png';
// import Footer from './footer';


const Welcome = (props) => {
  return (
    <>
    <Grid
      container
      item
      style={{minHeight: "93vh" }}
    >
      <Grid item>
      <img
      src={Untitled}
      style={{position:"absolute", maxWidth:"100%"}}
    />
      </Grid>
      <Grid item style={{color:"#f7f7f0", margin:"auto"}}>
        <Typography style={{position:"relative", textAlign:"center",fontSize:"40px",fontFamily:"garamond",fontWeight:"lighter",paddingBottom:"100px",letterSpacing:"6px"}}>Welcome to</Typography>
        <Typography style={{position:"relative",fontSize:"170px",fontFamily:"Helvetica-Oblique",letterSpacing:"20px"}}>JobScapes</Typography>
      </Grid>
      {/* <Grid item style={{backgroundColor:"#f7f7f0", maxWidth:"100%",  height:"200px"}}>
      <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
      </Grid>
       */}
       
    </Grid>
    {/* <Footer style={{color:"grey"}}/> */}
    
    </>
    
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
