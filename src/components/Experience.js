import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv } from "../assets/js/standardStyle";
import { orgLogo, orgLogoShape, orgName, posTitle, langDiv, langCard, timeline, firstExp, midExp, lastExp } from "../assets/js/experienceStyle";

export default function Experience() {
    const [isPC, setIsPC] = useState(true);

    // fixes spacing issue on non-PC devices
     useEffect(() => {
        if (window.screen.orientation == 'landscape.primary' && window.screen.width > 1024) {
            setIsPC(true);
        } else if (window.screen.orientation == 'potrait-primary' && window.screen.height > 1024) {
            setIsPC(true);
        } else {
            setIsPC(false);
        }
    }, []);
    
    isPC ? sectionTitle.concat(" tracking-normal") : sectionTitle.concat(" tracking-tighter");

    return (
        <Element id='/experience' name='/experience'>
            <div className={section}>
                <div className="w-full h-full flex flex-row flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                experience
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv.concat(" text-left md:pl-0 pl-12")}>
                        <ol className={timeline}>
                            <li className={firstExp}>
                                <span className={orgLogo}>
                                    <img
                                        className={orgLogoShape}
                                        src={require("../assets/img/cognixion.jpeg")}
                                        alt="Cognixion Logo"
                                    />
                                </span>
                                <h3 className={orgName}>Cognixion</h3>
                                <p className={posTitle}>Software Developer</p>
                                <div className={langDiv}>
                                    <span className={langCard}>
                                        Java
                                    </span>
                                    <span className={langCard}>
                                        Python
                                    </span>
                                    <span className={langCard}>
                                        C/C++
                                    </span>
                                    <span className={langCard}>
                                        C#
                                    </span>
                                    <span className={langCard}>
                                        Django
                                    </span>
                                    <span className={langCard}>
                                        Three.js
                                    </span>
                                </div>
                            </li>
                            <li className={midExp}>
                                <span className={orgLogo}>
                                    <img
                                        className={orgLogoShape}
                                        src={require("../assets/img/rcmp.jpeg")}
                                        alt="RCMP Logo"
                                    />
                                </span>
                                <h3 className={orgName}>Royal Canadian Mounted Police</h3>
                                <p className={posTitle}>Junior Programmer Analyst</p>
                                <div className={langDiv}>
                                    <span className={langCard}>
                                        Java
                                    </span>
                                </div>
                            </li>
                            <li className={midExp}>
                                <span className={orgLogo}>
                                    <img
                                        className={orgLogoShape}
                                        src={require("../assets/img/cognixion.jpeg")}
                                        alt="Cognixion Logo"
                                    />
                                </span>
                                <h3 className={orgName}>Cognixion</h3>
                                <p className={posTitle}>Software Developer Intern</p>
                                <div className={langDiv}>
                                    <span className={langCard}>
                                        Python
                                    </span>
                                    <span className={langCard}>
                                        C/C++
                                    </span>
                                </div>
                            </li>
                            <li className={lastExp}>
                                <span className={orgLogo}>
                                    <img
                                        className={orgLogoShape}
                                        src={require("../assets/img/sickkids.jpeg")}
                                        alt="SickKids Logo"
                                    />
                                </span>
                                <h3 className={orgName}>The Hospital for Sick Children</h3>
                                <p className={posTitle}>Research Analyst</p>
                                <div className={langDiv}>
                                    <span className={langCard}>
                                        MATLAB
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </Element>
    );
}

