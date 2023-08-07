import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv, content } from "../assets/js/standardStyle";

export default function Contact() {
    return (
        <Element id='/contact' name='/contact'>
            <div className={section}>
                <div className="w-full h-full flex flex-row-reverse flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                let's connect
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv}>
                        <h3 className={content}>
                            See something that piqued your interest? Then, why not get in touch? We can chat about my
                            previous work experience, the product your team is working on, or even the curse plaguing your
                            favourite sports team. Thanks for stopping by! 
                        </h3>
                    </div>
                </div>
            </div>
        </Element>
    );
}


