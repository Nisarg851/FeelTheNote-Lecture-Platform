import MainHeader from './components/Header/MainHeader';
import ImageCarousel from './components/IndexImageCarouselContainer/ImageCarousel';
import MeetInitiator from './components/IndexStartMeetingContainer/MeetInitiator';
import {Grid, Box} from '@mui/material';
import './App.css'

const App = () => {
  return(
    <Box>
      <Grid container rowSpacing={{md:14}}>
        <Grid item xs={12}>
          <MainHeader/> 
        </Grid>
        <Grid item xs={12} md={6}>
          <MeetInitiator/>
        </Grid>
        <Grid item xs={12} md={5}>
          <ImageCarousel/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
