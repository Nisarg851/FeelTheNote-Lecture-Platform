import {v4 as uuid} from "uuid";

import { Button, Container, Grid, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Meeting.css"

import {getRequest, postRequest} from "../../../APIs/apiRequest";
import {BASE_URL, SET_CALL_ID, GET_CALL_ID} from "../../../APIs/apiEndPoint";

const Meeting = () => {

    const [callId, setCallId] = useState();
    const navigate = useNavigate();

    const startCall = async () => {
        const uniqueId = uuid().slice(0,8);
        const url = BASE_URL + SET_CALL_ID + "/" + uniqueId;
        console.log(url);
        await postRequest(url,{peerId : "peer Unique ID from Peer.js"})
                .then(data => console.log(data.message))
                .catch(err => console.log("Error in request: "+err));

        navigate(`/${uniqueId}#init`)
    }

    const joinCall = async () => {
        const url = BASE_URL + GET_CALL_ID + "/" + callId;
        // console.log(url);
        await getRequest(url)
                .then(data => console.log(data));
        navigate(`/${callId}`);
    }

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
                        startIcon={<VideocamIcon/>}
                        onClick={startCall}>
                            New meeting
                    </Button>
                </Grid>
                <Grid item xs={12} md="auto">
                    <TextField id="outlined-basic" 
                        placeholder="Enter a code or Link"
                        variant="outlined" 
                        size="small"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <KeyboardRoundedIcon />
                              </InputAdornment>
                            ),
                        }}
                        onChange={(event) => setCallId(event.target.value)}/>
                </Grid>
                <Grid item xs={12} md="auto">
                    <Button onClick={joinCall}>Join</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Meeting;