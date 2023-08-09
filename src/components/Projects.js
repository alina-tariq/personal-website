import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv, content } from "../assets/js/standardStyle";

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
                        <h3 className={content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit. Praesent pretium quam quam, in consectetur justo sollicitudin sit amet. 
                        </h3>
                    </div>
                </div>
            </div>
        </Element>
    );
}