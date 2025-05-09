import React from "react";
import BannerForAbout from "./BannerForAbout";
import WhoWeAre from "./WhoWeAre";
import MissionAndVision from "./MissionAndVision";
import Contact from "../../components/Contact";

const About = () => {
    return (
        <div>
            
            <BannerForAbout></BannerForAbout>
            <WhoWeAre></WhoWeAre>
            <MissionAndVision></MissionAndVision>
            <Contact></Contact>
            
        </div>
    );
};

export default About;
