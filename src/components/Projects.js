import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv, content } from "../assets/js/standardStyle";
import { cardDiv, imageDiv, image, textDiv, title, description, tagDiv, tag } from "../assets/js/projectsStyle";

export default function Projects() {
    return (
        <Element id='/projects' name='/projects'>
            <div className={section}>
                <div className="w-full h-full flex flex-row-reverse flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                projects
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv}>
                        {/* <h3 className={content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit. Praesent pretium quam quam, in consectetur justo sollicitudin sit amet. 
                        </h3> */}
                        <div className="flex flex-wrap justify-center text-center px-2">
                            <div className={cardDiv}>
                                <div className={"bg-white " + imageDiv}>
                                    <a href="https://github.com/alina-tariq/CrochetCompanion">
                                        <img className={image} src={require("../assets/img/crochetCompanion.png")} alt="" />
                                    </a>
                                </div>
                                <div className={textDiv}>
                                    <a href="https://github.com/alina-tariq/CrochetCompanion">
                                        <h5 className={title}>Crochet Companion</h5>
                                    </a>
                                    <p className={description}>An app designed to keep track of all things crochet.</p>
                                    <div className={tagDiv}>
                                        <span className={tag}>#swift</span>
                                        <span className={tag}>#swiftui</span>
                                        <span className={tag}>#realm</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cardDiv}>
                                <div className={"bg-[#282828] " + imageDiv}>
                                    <a href="https://github.com/alina-tariq/mastermind">
                                        <img className={image} src={require("../assets/img/mastermind.png")} alt="" />
                                    </a>
                                </div>
                                <div className={textDiv}>
                                    <a href="https://github.com/alina-tariq/mastermind">
                                        <h5 className={title}>Mastermind</h5>
                                    </a>
                                    <p className={description}>A command line, multi-level version of the classic logic game Mastermind.</p>
                                    <div className={tagDiv}>
                                        <span className={tag}>#python</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cardDiv}>
                                <div className={"bg-[#4b674b] " + imageDiv}>
                                    <a href="https://github.com/alina-tariq/smartcustomerservices">
                                        <img className={image} src={require("../assets/img/scs.png")} alt="" />
                                    </a>
                                </div>
                                <div className={textDiv}>
                                    <a href="https://github.com/alina-tariq/smartcustomerservices">
                                        <h5 className={title}>Smart Customer Services</h5>
                                    </a>
                                    <p className={description}>A online grocery shopping website.</p>
                                    <div className={tagDiv}>
                                        <span className={tag}>#angularjs</span>
                                        <span className={tag}>#html/css</span>
                                        <span className={tag}>#php</span>
                                        <span className={tag}>#sql</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cardDiv}>
                                <div className={"bg-[#b6a5b6] " + imageDiv}>
                                    <a href="https://github.com/alina-tariq/mindtrack">
                                        <img className={image} src={require("../assets/img/mindtrack.png")} alt="" />
                                    </a>
                                </div>
                                <div className={textDiv}>
                                    <a href="https://github.com/alina-tariq/mindtrack">
                                        <h5 className={title}>MindTrack</h5>
                                    </a>
                                    <p className={description}>A website to help you track your mental health.</p>
                                    <div className={tagDiv}>
                                        <span className={tag}>#html/css</span>
                                        <span className={tag}>#javascript</span>
                                        <span className={tag}>#php</span>
                                        <span className={tag}>#sql</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cardDiv}>
                                <div className={"bg-[#156e9d] " + imageDiv}>
                                    <a href="https://github.com/alina-tariq/personal-website">
                                        <img className={image} src={require("../assets/img/website.png")} alt="" />
                                    </a>
                                </div>
                                <div className={textDiv}>
                                    <a href="https://github.com/alina-tariq/personal-website">
                                        <h5 className={title}>Personal Website</h5>
                                    </a>
                                    <p className={description}>A website designed to display my portfolio.</p>
                                    <div className={tagDiv}>
                                        <span className={tag}>#react.js</span>
                                        <span className={tag}>#tailwindcss</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}