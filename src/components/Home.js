import { useEffect, useCallback, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollDown from "./ScrollDown";
import ScrollButton from "./ScrollButton";
import { gsap } from "gsap";

export default function Home() {
    const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])
    const fadeIn = useRef();
    let greeting = "font-Sacramento lg:text-9xl xs:text-8xl text-7xl font-[800] mx-auto text-transparent pt-5 md:pb-8 pb-4 xs:px-16 px-5 bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 md:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] sm:drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]";

    // scrolls back to top on page refresh
    useEffect(() => {
      window.onbeforeunload = function () {
        resetWindowScrollPosition()
      }
    }, [resetWindowScrollPosition])

    // fades in introduction
    useEffect(() => {
        gsap.to(fadeIn.current, {opacity: 1, duration: 3, delay: 1.75});
    })

    if (/iPad|iPhone|iPod/.test(window.navigator.userAgent)) {
        greeting += " tracking-tighter";
    }

    return (
        <div className="h-screen bg-gradient-to-b from-sky-700 to-gray-900 grid grid-cols-1 grid-flow-row 
            px-8 pb-8 sm:pt-32 pt-24">
            <div className="flex flex-col items-center justify-center text-center">
                <div>
                    <h1 className={greeting}>
                        <TypeAnimation
                            sequence={[
                                '',
                                0,
                                'hey',
                                0,
                                'hey there',
                                0,
                                'hey there i\'m',
                                0,
                                'hey there i\'m alina!',
                                0,
                                () => { },
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            speed={25}
                            omitDeletionAnimation={true}
                        />
                    </h1>
                </div>
                {/* introduction div */}
                <div className="flex flex-col opacity-0" ref={fadeIn}>
                    <h3 className="font-Merriweather sm:text-2xl xs:text-xl xxs:text-lg text-base font-bold mx-auto text-white
                    md:pt-10 xs:pt-6 pt-4 md:pb-0 pb-2 lg:px-32 md:px-10 px-4">
                        software developer<br />
                        toronto, canada
                    </h3>
                </div>
                <ScrollDown />
            </div>
            <ScrollButton />
        </div>
    );
}
