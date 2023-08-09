import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv, content } from "../assets/js/standardStyle";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export default function About() {
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
        <Element id='/about' name='/about'>
            <div className={section}>
                <div className="w-full h-full flex flex-row-reverse flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                about me
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv.concat(" md:text-left text-center")}>
                        <h3 className={content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit. Praesent pretium quam quam, in consectetur justo sollicitudin sit amet. 
                        </h3>
                    </div>
                </div>
            </div>
        </Element>
    );
}