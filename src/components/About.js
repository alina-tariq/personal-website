import { Element } from "react-scroll";

export default function About() {
    return (
        <Element id='/about' name='/about'>
            <div className="border-b-4 border-amber-500 h-screen bg-gray-900 px-8 pb-8 pt-32">
                <div className="w-full h-full flex md:flex-row-reverse flex-col justify-center">
                    <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center">
                        <p className="text-stone-100 underline underline-offset-[20px]">
                            <h1 className="font-Sacramento text-8xl font-extrabold mx-auto
                            text-transparent p-10 bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                                about me
                            </h1>
                        </p>
                    </div>
                    <div className="md:w-3/5 w-full flex flex-col items-center justify-center text-center">
                        <h3 className="font-DaiBanna text-2xl font-bold mx-auto text-stone-100 pt-2 px-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit. Praesent pretium quam quam, in consectetur justo sollicitudin sit amet. 
                        </h3>
                    </div>
                </div>
            </div>
        </Element>
    );
}