import { Element } from "react-scroll";

export default function Experience() {
    return (
        <Element id='/experience' name='/experience'>
            <div className="h-auto bg-gray-900 md:pt-28 pt-24">
                <div className="w-full h-full flex flex-row flex-wrap justify-center">
                    <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center">
                        <p className="text-stone-100 underline underline-offset-[10px]">
                            <h1 className="font-Sacramento xl:text-8xl sm:text-7xl text-6xl font-extrabold mx-auto
                            text-transparent pb-5 px-8 bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                                experience
                            </h1>
                        </p>
                    </div>
                    <div className="md:w-3/5 flex flex-col items-center justify-center text-left
                    font-Merriweather md:pl-0 pl-10">
                        <ol class="relative border-l-4 border-amber-500 mt-2">
                            <li class="lg:mt-10 md:mt-8 mt-5 mb-5 ml-6 text-white">
                                <span class="absolute flex items-center justify-center rounded-full ring-4 ring-amber-500
                                lg:w-14 lg:h-14 lg:-left-7 sm:w-12 sm:h-12 sm:-left-6 w-12 h-12 -left-6">
                                    <img
                                        className="rounded-full w-full"
                                        src={require("../assets/cognixion.jpeg")}
                                        alt="Cognixion Logo"
                                    />
                                </span>
                                <h3 class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm font-bold">Cognixion</h3>
                                <p class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm">Software Developer</p>
                                <div className="xl:text-base lg:text-sm text-xs pl-8 pt-2 flex flex-wrap">
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        Java
                                    </span>
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        Python
                                    </span>
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        C/C++
                                    </span>
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        C#
                                    </span>
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        Django
                                    </span>
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        Three.js
                                    </span>
                                </div>
                            </li>
                            <li class="mb-5 ml-6 text-white">
                                <span class="absolute flex items-center justify-center rounded-full ring-4 ring-amber-500
                                lg:w-14 lg:h-14 lg:-left-7 w-12 h-12 -left-6">
                                    <img
                                        className="rounded-full w-full"
                                        src={require("../assets/rcmp.jpeg")}
                                        alt="RCMP Logo"
                                    />
                                </span>
                                <h3 class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm font-bold">Royal Canadian Mounted Police</h3>
                                <p class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm">Junior Programmer Analyst</p>
                                <div className="xl:text-base lg:text-sm text-xs pl-8 pt-2 flex flex-wrap">
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple
                                    font-bold mr-2 mb-2 px-2 py-1 rounded">
                                        Java
                                    </span>
                                </div>
                            </li>
                            <li class="mb-5 ml-6 text-white">
                                <span class="absolute flex items-center justify-center rounded-full ring-4 ring-amber-500
                                lg:w-14 lg:h-14 lg:-left-7 sm:w-12 sm:h-12 sm:-left-6 w-12 h-12 -left-6">
                                    <img
                                        className="rounded-full w-full"
                                        src={require("../assets/cognixion.jpeg")}
                                        alt="Cognixion Logo"
                                    />
                                </span>
                                <h3 class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm font-bold">Cognixion</h3>
                                <p class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm">Software Developer Intern</p>
                                <div className="xl:text-base lg:text-sm text-xs pl-8 pt-2 flex flex-wrap">
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple  font-bold 
                                    mr-2 mb-2 px-2 py-1 rounded">
                                        Python
                                    </span>
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple  font-bold 
                                        mr-2 mb-2 px-2 py-1 rounded">
                                        C/C++
                                    </span>
                                </div>
                            </li>
                            <li class="xs:mb-5 mb-2 ml-6 text-white">
                                <span class="absolute flex items-center justify-center rounded-full ring-4 ring-amber-500
                                lg:w-14 lg:h-14 lg:-left-7 sm:w-12 sm:h-12 sm:-left-6 w-12 h-12 -left-6">
                                    <img
                                        className="rounded-full w-full"
                                        src={require("../assets/sickkids.jpeg")}
                                        alt="SickKids Logo"
                                    />
                                </span>
                                <h3 class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm font-bold">The Hospital for Sick Children</h3>
                                <p class="mx-8 xl:text-xl lg:text-lg sm:text-base text-sm">Research Analyst</p>
                                <div className="xl:text-base lg:text-sm text-xs pl-8 pt-2 flex flex-wrap">
                                    <span class="bg-gradient-to-br from-regal-blue to-regal-purple font-bold 
                                    mr-2 mb-2 px-2 py-1 rounded">
                                        MATLAB
                                    </span>
                                </div>
                            </li>
                        </ol>
                        {/* <h3 className="font-DaiBanna text-2xl font-bold mx-auto text-stone-100 pt-2 px-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit. Praesent pretium quam quam, in consectetur justo sollicitudin sit amet. 
                        </h3> */}
                    </div>
                </div>
            </div>
        </Element>
    );
}
