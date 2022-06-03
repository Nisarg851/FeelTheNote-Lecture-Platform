import { useRef } from "react";
import CallPageFooter from "../SubComponents/Footer/CallPageFooter/CallPageFooter";
import "./CallPage.css";

let displayOptions = {video:false, audio: false};

const CallPage = () => {

    const videoRef = useRef();

    const userCameraCapture = async cameraIsOn => {
        // console.log("camera: "+cameraIsOn);
        if(cameraIsOn){
            try {
                if(displayOptions==null)
                    displayOptions = {video:false, audio: false};
                videoRef.current.srcOject = await navigator.mediaDevices.getUserMedia({...displayOptions,video:{ cursor:"always" }});
            } catch (error) {
                console.log("An Error occured: "+error);
            }
        }else{
            try {
                if(displayOptions.audio){
                    videoRef.current.srcOject = await navigator.mediaDevices.getUserMedia({...displayOptions,video:false});
                }else{
                    videoRef.current.srcOject.getTracks().forEach(track => {
                        track.stop();
                    });
                    videoRef.current.srcOject = null;
                }
            } catch (error) {
                console.log("An Error occured: "+error);
            }
        }
    }

    const userAudioCapture = async audioIsOn => {
        if(audioIsOn){
            try {
                if(displayOptions==null)
                    displayOptions = {video:false, audio: false};
                videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({...displayOptions,audio:true});
            } catch (error) {
                console.log("An Error occured: "+error);
            }
        }else{
            try {
                if(displayOptions.video!=null){
                    videoRef.current.srcObject = await navigator.mediaDevices.getDisplayMedia({...displayOptions,audio:false});
                }else{
                    videoRef.current.srcObject.getTracks().forEach(track => {
                        track.stop();
                    });
                    videoRef.current.srcObject = null;
                }
            } catch (error) {
                console.log("An Error occured: "+error);
            }
        }
    }

    const userScreenCapture = async screenCaptureOn => {
        if(screenCaptureOn){
            try {
                if(displayOptions==null)
                    displayOptions = {video:false, audio: false};
                videoRef.current.srcObejct = await navigator.mediaDevices.getDisplayMedia({...displayOptions,video:{ cursor:"always" }});
            } catch (error) {
                console.log("An Error occured: "+error);
            }
        }else{
            try {
                if(displayOptions.audio){
                    videoRef.current.srcObject = await navigator.mediaDevices.getDisplayMedia({...displayOptions,video:false});
                }else{
                    videoRef.current.srcObject.getTracks().forEach(track => {
                        track.stop();
                    });
                    videoRef.current.srcObject = null;
                }
            } catch (error) {
                console.log("An Error occured: "+error);
            }
        }
    }

    return(
        <div className="container">
            <video id="video-call" ref={videoRef} controls autoPlay/>
            <CallPageFooter cameraButtonToggle={userCameraCapture} audioButtonToggle={userAudioCapture} presentationButtonToggle={userScreenCapture}/>
        </div>
    );
}

export default CallPage;