import MainHeader from "../SubComponents/Header/HomeHeader/MainHeader";
import ImageCarousel from '../SubComponents/HomePageCarousel/ImageCarousel';
import Meeting from "../SubComponents/HomePageMeetStart/Meeting";
import {Grid, Box} from '@mui/material';
import './HomePage.css'


const HomePage = () => {
    return(
      <Box>
        <Grid container rowSpacing={{md:14}}>
          <Grid item xs={12}>
            <MainHeader/> 
          </Grid>
          <Grid item xs={12} md={6}>
            <Meeting/>
          </Grid>
          <Grid item xs={12} md={5}>
            <ImageCarousel/>
          </Grid>
        </Grid>
      </Box>
    );
  }
  
  export default HomePage;
  