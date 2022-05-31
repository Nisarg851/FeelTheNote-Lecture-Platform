import { Button, Container, Grid, TextField } from "@mui/material";
import "./MeetInitiator.css"

const MeetInitiator = () => {
    return(
        <Container sx={{width:"80%"}} style={{backgroundColor:"red"}}>
            <h1> Welcome back,</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium assumenda at nam ut ex architecto quibusdam nobis aut amet exercitationem illum porro unde minima eius officia corrupti libero, fugiat dignissimos consequuntur maxime? Deserunt, quia. Nihil asperiores unde accusamus consequuntur a corporis, beatae dicta possimus? Voluptates mollitia harum magnam animi?</h4>
            <Grid container columnSpacing={2} rowSpacing={2}
                justifyContent="start"
                alignItems="center">
                <Grid item xs={12} md="auto">
                    <Button variant="contained" color="primary" sx={{height:"100%"}}>New meeting</Button>
                </Grid>
                <Grid item xs={12} md="auto">
                <TextField id="outlined-basic" label="Enter a code or Link" variant="outlined" size="small"/>
                </Grid>
                <Grid item xs={12} md="auto">
                    <Button>Join</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MeetInitiator;