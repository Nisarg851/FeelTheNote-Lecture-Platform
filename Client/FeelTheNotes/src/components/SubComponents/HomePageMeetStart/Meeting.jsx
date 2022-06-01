import { Button, Container, Grid, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import "./Meeting.css"

const Meeting = () => {
    return(
        <Container sx={{width:"80%"}}>
            <h1> Welcome back,</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium assumenda at nam ut ex architecto quibusdam nobis aut amet exercitationem illum porro unde minima eius officia corrupti libero, fugiat dignissimos consequuntur maxime? Deserunt, quia. Nihil asperiores unde accusamus consequuntur a corporis, beatae dicta possimus? Voluptates mollitia harum magnam animi?</h4>
            <Grid container 
                columnSpacing={2}
                rowSpacing={2}
                justifyContent="start"
                alignItems="center">
                <Grid item xs={12} md="auto">
                    <Button variant="contained" 
                        color="primary"
                        sx={{height:"100%"}} 
                        startIcon={<VideocamIcon/>}>
                            New meeting
                    </Button>
                </Grid>
                <Grid item xs={12} md="auto">
                    <TextField id="outlined-basic" 
                        label="Enter a code or Link" 
                        variant="outlined" 
                        size="small"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <KeyboardRoundedIcon />
                              </InputAdornment>
                            ),
                        }}/>
                </Grid>
                <Grid item xs={12} md="auto">
                    <Button>Join</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Meeting;