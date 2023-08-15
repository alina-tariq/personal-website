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
                        {/* <h3 className={content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit. Praesent pretium quam quam, in consectetur justo sollicitudin sit amet. 
                        </h3> */}
                        <div className="flex flex-wrap justify-center text-center px-2">
                            <div class="md:w-60 w-52 rounded-lg shadow m-6">
                                <div className="bg-white flex border-4 rounded-t-lg border-amber-500 items-center justify-center text-center">
                                    <a href="https://github.com/alina-tariq/CrochetCompanion">
                                        <img class="md:h-56 h-40 rounded-t-lg" src={require("../assets/img/crochetCompanion.png")} alt="" />
                                    </a>
                                </div>
                                <div class="h-[16rem] flex flex-col px-3 py-4 border-x-4 rounded-b-lg border-b-4 border-amber-500 justify-center text-center">
                                    <a href="https://github.com/alina-tariq/CrochetCompanion">
                                        <h5 class="mb-2 md:text-xl text-lg font-bold tracking-tight text-white">Crochet Companion</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-sm text-white">An app designed to keep track of all things crochet.</p>
                                    <div class="items-center justify-center px-2 pt-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#swift</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#swiftui</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-60 w-52 rounded-lg shadow m-6">
                                <div className="bg-[#282828] flex border-4 rounded-t-lg border-amber-500 items-center justify-center text-center">
                                    <a href="https://github.com/alina-tariq/mastermind">
                                        <img class="md:h-56 h-40 rounded-t-lg" src={require("../assets/img/mastermind.png")} alt="" />
                                    </a>
                                </div>
                                <div class="h-[16rem] flex flex-col px-3 py-4 border-x-4 rounded-b-lg border-b-4 border-amber-500 justify-center text-center">
                                    <a href="https://github.com/alina-tariq/mastermind">
                                        <h5 class="mb-2 md:text-xl text-lg font-bold tracking-tight text-white">Mastermind</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-sm text-white">A command line version of the logic game Mastermind.</p>
                                    <div class="items-center justify-center px-2 pt-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#python</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-60 w-52 rounded-lg shadow m-6">
                                <div className="bg-[#4b674b] flex border-4 rounded-t-lg border-amber-500 items-center justify-center text-center">
                                    <a href="https://github.com/alina-tariq/smartcustomerservices">
                                        <img class="md:h-56 h-40 rounded-t-lg" src={require("../assets/img/scs.png")} alt="" />
                                    </a>
                                </div>
                                <div class="h-[16rem] flex flex-col px-3 py-4 border-x-4 rounded-b-lg border-b-4 border-amber-500 justify-center text-center">
                                    <a href="https://github.com/alina-tariq/smartcustomerservices">
                                        <h5 class="mb-2 md:text-xl text-lg font-bold tracking-tight text-white">Smart Customer Services</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-sm text-white">A online grocery shopping website.</p>
                                    <div class="items-center justify-center px-2 pt-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#angularjs</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#php</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#sql</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-60 w-52 rounded-lg shadow m-6">
                                <div className="bg-[#b6a5b6] flex border-4 rounded-t-lg border-amber-500 items-center justify-center text-center">
                                    <a href="https://github.com/alina-tariq/mindtrack">
                                        <img class="md:h-56 h-40 rounded-t-lg" src={require("../assets/img/mindtrack.png")} alt="" />
                                    </a>
                                </div>
                                <div class="h-[16rem] flex flex-col px-3 py-4 border-x-4 rounded-b-lg border-b-4 border-amber-500 justify-center text-center">
                                    <a href="https://github.com/alina-tariq/mindtrack">
                                        <h5 class="mb-2 md:text-xl text-lg font-bold tracking-tight text-white">MindTrack</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-sm text-white">A website to help you track your mental health.</p>
                                    <div class="items-center justify-center px-2 pt-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#php</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#sql</span>
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