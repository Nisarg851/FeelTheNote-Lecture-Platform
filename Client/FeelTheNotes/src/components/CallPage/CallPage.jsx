import { Grid } from "@mui/material";
import CallPageFooter from "../SubComponents/Footer/CallPageFooter/CallPageFooter";
import "./CallPage.css";

const CallPage = () => {
    return(
        <div className="container">
            <video id="video-call"/>
            <CallPageFooter/>
        </div>
    );
}

export default CallPage;