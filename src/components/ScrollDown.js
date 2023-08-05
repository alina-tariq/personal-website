import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef} from "react";
import { gsap } from "gsap";

export default function ScrollDown() {
    const scrollDown = useRef();

    useEffect(() => {
        gsap.to(scrollDown.current, {opacity: 1, duration: 1, delay: 2.5}); // fades in 2.5 seconds later
        gsap.to(scrollDown.current, { y: 15, ease: "power1.inOut", repeat: -1, yoyo: true }); // up and down motion
    });

    return (
        <div className="absolute bottom-0 lg:w-12 sm:w-10 w-8 text-stone-200 xs:pb-5 pb-3 opacity-0" ref={scrollDown}>
            <ChevronDownIcon />
        </div>
    );
}