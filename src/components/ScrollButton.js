import React, { useState, useEffect } from 'react';
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollButton() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    return(
        <div class="fixed bottom-10 right-10 rounded-full md:h-12 md:w-12 h-10 w-10 flex items-center justify-center
        border-4 border-solid border-gray-200 bg-gray-200" style={{ display: isVisible ? 'flex' : 'none' }} 
        onClick={scroll.scrollToTop}>
           <button class="md:w-8 w-6 justify-center items-center">
               <ChevronDoubleUpIcon />
           </button>
       </div>
    );

}