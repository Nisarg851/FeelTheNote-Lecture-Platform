import "./MainHeader.css";

import FeelTheNotesIcon from "../../../../assets/FeelTheNotesIcon.png";

const MainHeader = () => {
    return (
        <div className="header-container">
            <div className="header-logo-container">
                <img id="logo" src={FeelTheNotesIcon} alt=""/>
                <h1>Feel The Notes</h1>
            </div>
        </div>
    );
}

export default MainHeader;