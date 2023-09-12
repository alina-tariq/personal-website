import { Element } from "react-scroll";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv, content } from "../assets/js/standardStyle";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { GiHockey, GiBasketballBall } from "react-icons/gi";

export default function About() {
    return (
        <Element id='/about' name='/about'>
            <div className={section}>
                <div className="w-full h-full flex flex-row-reverse flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                about
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv.concat(" md:text-left text-center")}>
                        <h3 className={content}>
                            Why, hello again! :)<br />
                            <br />
                            I'm Alina, a multidisciplinary developer who's passionate about accessibility and diversity.
                            I used to work with brain code to help understand language processing in children, but now I 
                            mostly work with computer code to help build dynamic and innovative products.<br />
                            <br />
                            I started my programming journey back in 2010, but opted to take the scenic route to a
                            CS degree. While this detour involved dissecting sheep brains and inducing schizophrenia in lab
                            rats (all in the name of research, worry not), it also helped equip me with a fresh
                            perspective along with a knack for problem-solving and analytical thinking. <br />
                            <br />
                            When I'm not busy coding bugs into existence, 
                            I enjoy breaking out of an escape room with friends, listening to audiobooks as I crochet, 
                            and rooting for my favourite sports teams through all the
                            heartbreak they have caused me. 
                            <br />
                            <br />
                            <div className="pt-2 font-Caveat lg:text-2xl xs:text-xl text-lg font-bold">
                                <div className="pb-2">
                                    <BookOpenIcon className="xl:h-8 xl:w-8 h-6 w-6 inline-block text-amber-500 md:mr-2 mr-1"/>
                                    Currently Reading: Red Rising by Pierce Brown 
                                    <span className="text-amber-500"> & </span> 
                                    Us Against You by Fredrik Backman
                                </div>
                                <div className="pb-2">
                                    <GiBasketballBall className="xl:h-8 xl:w-8 h-6 w-6 inline-block text-amber-500 md:mr-2 mr-1"/> 
                                    #WeTheNorth
                                </div>
                                <div>
                                    <GiHockey className="xl:h-8 xl:w-8 h-6 w-6 inline-block text-amber-500 md:mr-2 mr-1"/>
                                    #LeafsForever, #FindAWay 
                                </div>
                            </div> 
                            
                        </h3>
                    </div>
                </div>
            </div>
        </Element>
    );
}