import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle  } from "../assets/js/standardStyle";
import { orgLogo, orgLogoShape, orgName, posTitle, langDiv, langCard, timeline, firstExp, midExp, lastExp } from "../assets/js/experienceStyle";

export default function Experience() {
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
                    <div className="md:w-3/5 flex flex-col items-center justify-center text-left
                    font-Merriweather md:pl-0 pl-12">
                        <ol class={timeline}>
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

