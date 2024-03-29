// Holds all common styles to implement changes easier

// standard section title and section 
const section = "h-auto bg-gray-900 md:pt-28 pt-24";
const sectionTitleDiv = "md:w-2/5 w-full flex flex-col items-center justify-center text-center md:pb-0 pb-5";
const sectionTitleUnderline = "text-stone-100 underline underline-offset-[10px]";
let sectionTitle = "font-Sacramento xl:text-8xl sm:text-7xl text-6xl font-extrabold mx-auto text-transparent pt-2 pb-5 px-8 bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500";

if (/iPad|iPhone|iPod/.test(window.navigator.userAgent)) {
    sectionTitle += " tracking-tighter";
}

const contentDiv = "md:w-3/5 w-full flex flex-col items-center justify-center font-Merriweather text-white";
const content = "lg:text-lg sm:text-base text-sm mx-auto md:pt-2 md:px-16 sm:px-8 xxs:px-6 px-4";

export {
    section,
    sectionTitleDiv, 
    sectionTitleUnderline, 
    sectionTitle, 
    contentDiv, 
    content,
};