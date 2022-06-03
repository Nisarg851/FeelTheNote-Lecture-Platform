import { useState } from "react";

import Videocam from "@mui/icons-material/Videocam";
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CallEndIcon from '@mui/icons-material/CallEnd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid, IconButton } from "@mui/material";
import "./CallPageFooter.css";

const CallPageFooter = props => {

    const [cameraIsOn, toggleCamera] = useState(false);
    const [audioIsOn, toggleAudio] = useState(false);
    const [presentationIsOn, togglePresentation] = useState(false);

    const audioButtonToggle = () => {
        props.audioButtonToggle(!audioIsOn);
        toggleAudio(!audioIsOn);
    }
    
    const cameraButtonToggle = () => {
        console.log("click method: before click: "+cameraIsOn);
        props.cameraButtonToggle(!cameraIsOn);
        toggleCamera(!cameraIsOn);
        // console.log("click method: after click: "+cameraIsOn);
    }

    const presentationButtonToggle = () => {
        props.presentationButtonToggle(!presentationIsOn);
        togglePresentation(!presentationIsOn);
    }

    return(
        <div className="footer">
            <h4 className="id-time-code">You</h4>
            <Grid container
                justifyContent="space-between">
                    <Grid item className="id-time-code" display={{xs:"none", md:"flex", alignItems:"center"}} md={2}>
                        <b id="time">1:21{'\u00A0'}</b>
                        <span>{'\u00A0'}|{'\u00A0'}</span>
                        <b id="meeting-code">{'\u00A0'}abc-defg-hij</b>
                    </Grid>
                    <Grid item xs={10} md={6}
                        container
                        justifyContent={{xs:"start",md:"center"}}>
                            <button className={(audioIsOn ? "active-button" : "inactive-button")+" icon-button"}
                                onClick={audioButtonToggle}>
                                    {audioIsOn ? <MicIcon/> : <MicOffIcon/>}
                            </button>
                            <button className={(cameraIsOn ? "active-button" : "inactive-button")+" icon-button"}
                                onClick={cameraButtonToggle}>
                                    {cameraIsOn ? <Videocam/> : <VideocamOffIcon/>}
                            </button>
                            <button className={(presentationIsOn ? "active-button" : "inactive-button")+" icon-button"}
                                onClick={presentationButtonToggle}>
                                <PresentToAllIcon/>
                            </button>
                            <button className="inactive-button icon-button">
                                <CallEndIcon/>
                            </button>
                        {/* <IconButton 
                            aria-label="Audio" 
                            component="span"
                            className="active-button"
                            onClick={audioButtonToggle}>
                                <MicIcon/>
                        </IconButton> */}
                        {/* <IconButton 
                            aria-label="Videocam" 
                            component="span"
                            sx={{backgroundColor:"red", color:"white", margin:"0.5rem"}}
                            onClick={cameraButtonToggle}>
                            <Videocam/>
                        </IconButton>
                        <IconButton 
                            aria-label="Presentation" 
                            component="span"
                            sx={{backgroundColor:"red", color:"white", margin:"0.5rem"}}
                            onClick={presentationButtonToggle}>
                                <PresentToAllIcon/>
                        </IconButton>
                        <IconButton 
                            aria-label="Callend" 
                            component="span"
                            sx={{backgroundColor:"red", color:"white", margin:"0.5rem"}}>
                                <CallEndIcon/>
                        </IconButton> */}
                    </Grid>
                    <Grid item xs={2} 
                        container
                        justifyContent="end">
                        <IconButton 
                            aria-label="More" 
                            component="span"
                            sx={{color:"black", margin:"0.5rem", float:"right", backgroundColor:"white"}}>
                            <MoreVertIcon/>
                        </IconButton>
                    </Grid>
            </Grid>
        </div>
    );
}

export default CallPageFooter;