import { useRef, useState } from "react";
import CallPageFooter from "../SubComponents/Footer/CallPageFooter/CallPageFooter";
import "./CallPage.css";

let displayOptions = {video:false, audio: false};

const CallPage = () => {

    const [cameraStream, setCameraStream] = useState(false);
    const [screenStream, setScreenStream] = useState(false);
    const [streamMediaOnTop, setStreamMediaOnTop] = useState(false);

    const videoRef = useRef();

    const removeVideoTracks = () => {
        if(videoRef.current.srcObject){
            videoRef.current.srcObject.getVideoTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    }

    const userCameraCapture = async cameraIsOn => {
        if(videoRef.current.srcObject){
            removeVideoTracks();
            displayOptions = {...displayOptions, video: false};
        }
        if(cameraIsOn){
            displayOptions = {...displayOptions, video: true};
            let stream = await navigator.mediaDevices.getUserMedia(displayOptions);
            setCameraStream(true);
            setStreamMediaOnTop(false);
            videoRef.current.srcObject = stream;
        }else{
            setCameraStream(false);
            if(screenStream){
                setStreamMediaOnTop(true);
                displayOptions = {...displayOptions, video: true};
                videoRef.current.srcObject = await navigator.mediaDevices.getDisplayMedia(displayOptions);
            }else{
                videoRef.current.srcObject = null;
            }
        }
    }

    const userAudioCapture = async audioIsOn => {
        if(audioIsOn)
            displayOptions = {...displayOptions, audio: true};
        else
            displayOptions = {...displayOptions, audio: false};

        if(streamMediaOnTop){
            videoRef.current.srcObject = await navigator.mediaDevices.getDisplayMedia(displayOptions);
        }else if(cameraStream){
            videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia(displayOptions);
        }else{
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    }

    const userScreenCapture = async screenCaptureOn => {
        if(videoRef.current.srcObject){
            removeVideoTracks();
            displayOptions = {...displayOptions, video: false};
        }
        if(screenCaptureOn){
            displayOptions = {...displayOptions, video: true};
            let stream = await navigator.mediaDevices.getDisplayMedia(displayOptions);
            setScreenStream(true);
            setStreamMediaOnTop(true);
            videoRef.current.srcObject = stream;
        }else{
            setScreenStream(false);
            setStreamMediaOnTop(false);
            if(cameraStream){
                displayOptions = {...displayOptions, video: true};
                videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia(displayOptions);;
            }else{
                videoRef.current.srcObject = null;
            }
        }
    }

    return(
        <div className="container">
            <video id="video-call" ref={videoRef} autoPlay/>
            <CallPageFooter cameraButtonToggle={userCameraCapture} audioButtonToggle={userAudioCapture} presentationButtonToggle={userScreenCapture}/>
        </div>
    );
}

export default CallPage;