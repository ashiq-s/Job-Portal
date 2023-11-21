import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    List,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
  import EmailIcon from '@material-ui/icons/Email';
  import LocationOnIcon from '@material-ui/icons/LocationOn';
  import PhoneIcon from '@material-ui/icons/Phone';
  import FavoriteIcon from '@material-ui/icons/Favorite';
  import InfoIcon from '@material-ui/icons/Info';

export default function Footer() {
  return (
    <Box style={{ marginBottom:"0px",zIndex:"1", marginTop:"155px", width:"100%", fontFamily:"sans-serif"}} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{  height: '200px' }} style={{marginTop:"30px", fontFamily:"sans-serif"}}>
        <Toolbar>
          <Typography sx={{ fontFamily:"garamond" }}>
            JobScapes
          </Typography>
          <a href="https://www.instagram.com/accounts/login/" color="black" style={{textDecoration:"none", paddingLeft:"850px"}}>Instagram</a>
          <a href="https://www.linkedin.com/login" color="black" style={{textDecoration:"none", paddingLeft:"40px"}}>LinkedIn</a>
          <a href="https://twitter.com/login?lang=en" color="black" style={{textDecoration:"none", paddingLeft:"40px"}}>Twitter</a>
        </Toolbar>
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
        <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="A Platform for job seekers and employers to connect, post job listings and find suitable candidates" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="VIT, Vellore Campus, Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="9XXXX-XXXX8" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="student@vitstudent.ac.in" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Developed By- Akanksha Chhabra, Ashiq S, Muni Kumar, Ridhima Taneja, Uday Bharat Khunt" />
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
}