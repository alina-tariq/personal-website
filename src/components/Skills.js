import { useRef, useState, useEffect } from 'react'
import { useHover } from '@react-hooks-library/core'
import { Element } from "react-scroll";
import { AndroidstudioPlain, AndroidstudioOriginal, AngularjsPlain, AngularjsOriginal, CPlain, COriginal, Css3Plain, Css3Original, DjangoPlain, Html5Plain, Html5Original, JavaPlain, JavaOriginal, JavascriptPlain, JavascriptOriginal, JiraPlain, JiraOriginal, JupyterPlainWordmark, PythonPlain, PythonOriginal, PhpPlain, PhpOriginal, GithubOriginal, JupyterOriginalWordmark, ReactOriginal} from 'devicons-react';
import { CircleStackIcon } from "@heroicons/react/24/outline";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv } from "../assets/js/standardStyle";
import { badgeSectionDiv, badgeSectionPadding, badgeSectionTitle, badgeDiv, badgeImage, badgeColour, badgeText} from "../assets/js/skillsStyle";

export default function Skills() {
    const androidStudioRef = useRef(null);
    const angularRef = useRef(null);
    const cRef = useRef(null);
    const cssRef = useRef(null);
    const djangoRef = useRef(null);
    const githubRef = useRef(null);
    const htmlRef = useRef(null);
    const javaRef = useRef(null);
    const javascriptRef = useRef(null);
    const jiraRef = useRef(null);
    const jupyterRef = useRef(null);
    const pythonRef = useRef(null);
    const phpRef = useRef(null);
    const reactRef = useRef(null);
    const sourcetreeRef = useRef(null);
    const sqlRef = useRef(null);
    
    const androidStudioHovered = useHover(androidStudioRef)
    const angularHovered = useHover(angularRef)
    const cHovered = useHover(cRef)
    const cssHovered = useHover(cssRef)
    const djangoHovered = useHover(djangoRef)
    const githubHovered = useHover(githubRef)
    const htmlHovered = useHover(htmlRef)
    const javaHovered = useHover(javaRef)
    const javascriptHovered = useHover(javascriptRef)
    const jiraHovered = useHover(jiraRef)
    const jupyterHovered = useHover(jupyterRef)
    const pythonHovered = useHover(pythonRef)
    const phpHovered = useHover(phpRef)
    const reactHovered = useHover(reactRef)
    const sourcetreeHovered = useHover(sourcetreeRef)
    const sqlHovered = useHover(sqlRef)
    
    const [isMdScreen, setIsMdScreen] = useState(true);
    
    // sets icon size depending on screen size
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.matchMedia("(min-width: 850px)").matches) {
                setIsMdScreen(true);
            } else {
                setIsMdScreen(false);
            }
        });
    }, []);

    const badgeSize = isMdScreen ? "4em" : "3em";

    return (
        <Element id='/skills' name='/skills'>
            <div className={section}>
                <div className="w-full h-full flex flex-row flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                skills
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv}>
                        <div className={badgeSectionDiv}>
                            <div className={badgeSectionTitle}>
                                Languages:
                            </div>
                            <div className={badgeDiv}>
                                <div className={badgeImage} ref={javaRef}>
                                    {javaHovered 
                                        ? <JavaOriginal colour={badgeColour} size={badgeSize} />
                                        : <JavaPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>Java</p>
                                </div>
                                <div className={badgeImage} ref={pythonRef}>
                                    {pythonHovered 
                                        ? <svg 
                                            viewBox="0 0 48 48"
                                            height={badgeSize}
                                        >
                                            <linearGradient id="goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1" x1="10.458" x2="26.314" y1="12.972" y2="26.277" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#26abe7"></stop><stop offset="1" stop-color="#086dbf"></stop></linearGradient><path fill="url(#goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1)" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><linearGradient id="goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2" x1="35.334" x2="23.517" y1="37.911" y2="21.034" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feb705"></stop><stop offset="1" stop-color="#ffda1c"></stop></linearGradient><path fill="url(#goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2)" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                                        </svg>
                                        : <svg 
                                            viewBox="0,0,256,256"
                                            height={badgeSize}
                                        >
                                            <defs>
                                                <linearGradient x1="10.458" y1="12.972" x2="26.314" y2="26.277" gradientUnits="userSpaceOnUse" id="color-1_l75OEUJkPAk4_gr1">
                                                    <stop offset="0" stop-color="#ffffff"></stop>
                                                    <stop offset="1" stop-color="#ffffff"></stop>
                                                </linearGradient>
                                                <linearGradient x1="35.334" y1="37.911" x2="23.517" y2="21.034" gradientUnits="userSpaceOnUse" id="color-2_l75OEUJkPAk4_gr2">
                                                    <stop offset="0" stop-color="#ffffff"></stop>
                                                    <stop offset="1" stop-color="#ffffff"></stop>
                                                </linearGradient>
                                            </defs>
                                            <g transform="scale(5.33333,5.33333)">
                                                <path fill={badgeColour} d="M24.047,5c-1.555,0.005 -2.633,0.142 -3.936,0.367c-3.848,0.67 -4.549,2.077 -4.549,4.67v3.963h9v2h-9.342h-4.35c-2.636,0 -4.943,1.242 -5.674,4.219c-0.826,3.417 -0.863,5.557 0,9.125c0.655,2.661 2.098,4.656 4.735,4.656h3.632v-5.104c0,-2.966 2.686,-5.896 5.764,-5.896h7.236c2.523,0 5,-1.862 5,-4.377v-8.586c0,-2.439 -1.759,-4.263 -4.218,-4.672c0.061,-0.006 -1.756,-0.371 -3.298,-0.365zM19.063,9c0.821,0 1.5,0.677 1.5,1.502c0,0.833 -0.679,1.498 -1.5,1.498c-0.837,0 -1.5,-0.664 -1.5,-1.498c0,-0.822 0.663,-1.502 1.5,-1.502z"></path>
                                                <path fill={badgeColour} d="M23.078,43c1.555,-0.005 2.633,-0.142 3.936,-0.367c3.848,-0.67 4.549,-2.077 4.549,-4.67v-3.963h-9v-2h9.343h4.35c2.636,0 4.943,-1.242 5.674,-4.219c0.826,-3.417 0.863,-5.557 0,-9.125c-0.656,-2.661 -2.099,-4.656 -4.736,-4.656h-3.632v5.104c0,2.966 -2.686,5.896 -5.764,5.896h-7.236c-2.523,0 -5,1.862 -5,4.377v8.586c0,2.439 1.759,4.263 4.218,4.672c-0.061,0.006 1.756,0.371 3.298,0.365zM28.063,39c-0.821,0 -1.5,-0.677 -1.5,-1.502c0,-0.833 0.679,-1.498 1.5,-1.498c0.837,0 1.5,0.664 1.5,1.498c0,0.822 -0.664,1.502 -1.5,1.502z"></path>
                                            </g>
                                        </svg>
                                    }
                                    <p className={badgeText}>Python</p>
                                </div>
                                <div className={badgeImage} ref={cRef}>
                                    {cHovered 
                                        ? <COriginal colour={badgeColour} size={badgeSize} />
                                        : <CPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>C</p>
                                </div>
                                <div className={badgeImage} ref={htmlRef}>
                                    {htmlHovered 
                                        ? <Html5Original colour={badgeColour} size={badgeSize} />
                                        : <Html5Plain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>HTML</p>
                                </div>
                                <div className={badgeImage} ref={cssRef}>
                                    {cssHovered 
                                        ? <Css3Original colour={badgeColour} size={badgeSize} />
                                        : <Css3Plain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>CSS</p>
                                </div>
                                <div className={badgeImage} ref={javascriptRef}>
                                    {javascriptHovered 
                                        ? <JavascriptOriginal colour={badgeColour} size={badgeSize} />
                                        : <JavascriptPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>JavaScript</p>
                                </div>
                                <div className={badgeImage} ref={phpRef}>
                                    {phpHovered 
                                        ? <PhpOriginal colour={badgeColour} size={badgeSize} />
                                        : <PhpPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>PHP</p>
                                </div>
                                <div className={badgeImage} ref={sqlRef}>
                                    {sqlHovered 
                                        ? <CircleStackIcon fill={"#0ea5e9"} color={"black"} height={badgeSize} />
                                        : <CircleStackIcon fill={badgeColour} color={"black"} height={badgeSize} />
                                    }
                                    <p className={badgeText}>SQL</p>
                                </div>
                            </div>
                        </div>

                        <div className={badgeSectionDiv.concat(badgeSectionPadding)}>
                            <div className={badgeSectionTitle}>
                                Web Frameworks:
                            </div>
                            <div className={badgeDiv}>
                                <div className={badgeImage} ref={reactRef}>
                                    {reactHovered
                                        ? <ReactOriginal size={badgeSize} />
                                        :<svg 
                                            viewBox="0 0 128 128" 
                                            height={badgeSize}
                                        >
                                            <g fill={badgeColour}>
                                                <circle cx="64" cy="64" r="11.4" />
                                                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                                            </g>
                                        </svg>
                                    }
                                    <p className={badgeText}>React</p>
                                </div>
                                <div className={badgeImage} ref={angularRef}>
                                    {angularHovered
                                        ? <AngularjsOriginal size={badgeSize} />
                                        : <AngularjsPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>Angular JS</p>
                                </div>
                                <div className={badgeImage} ref={djangoRef}>
                                    {djangoHovered
                                        ? <svg 
                                            viewBox="0 0 128 128" 
                                            height={badgeSize}
                                            className="rounded-lg bg-gray-100 border-2 border-gray-100"
                                        >
                                            <g fill="#082f20">
                                                <path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path><path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z" />
                                            </g>
                                        </svg>
                                        : <DjangoPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>Django</p>
                                </div>
                            </div>
                        </div>

                        <div className={badgeSectionDiv.concat(badgeSectionPadding)}>
                            <div className={badgeSectionTitle}>
                                Tools:
                            </div>
                            <div className={badgeDiv}>
                                <div className={badgeImage} ref={androidStudioRef}>
                                    {androidStudioHovered 
                                        ? <AndroidstudioOriginal size={badgeSize} />
                                        : <AndroidstudioPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>Android Studio</p>
                                </div>
                                <div className={badgeImage} ref={githubRef}>
                                    {githubHovered 
                                        ? <GithubOriginal className="rounded-full bg-white" size={badgeSize} />
                                        : <svg 
                                            viewBox="0 0 128 128" 
                                            height={badgeSize}
                                        >
                                            <g fill={badgeColour}>
                                                <path 
                                                    fillRule="evenodd" 
                                                    clipRule="evenodd" 
                                                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
                                                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                                            </g>
                                        </svg>
                                    }
                                    <p className={badgeText}>GitHub</p>
                                </div>
                                <div className={badgeImage} ref={jiraRef}>
                                    {jiraHovered
                                        ? <JiraOriginal size={badgeSize} />
                                        : <JiraPlain color={badgeColour} size={badgeSize} />
                                    }
                                    <p className={badgeText}>JIRA</p>
                                </div>
                                <div className={badgeImage} ref={jupyterRef}>
                                    {jupyterHovered
                                        ? <JupyterOriginalWordmark className="bg-white" size={badgeSize} />
                                        : <JupyterPlainWordmark color={badgeColour} size={badgeSize} />
                                    }
                                    
                                    <p className={badgeText}>Jupyter Notebook</p>
                                </div>
                                <div className={badgeImage} ref={sourcetreeRef}>
                                    {sourcetreeHovered
                                        ? <svg 
                                            viewBox="0 0 48 48"
                                            height={badgeSize}
                                          >
                                            <path fill="#2684ff" d="M40.65,19.652C40.65,10.456,33.194,3,23.998,3C15.801,2.988,8.815,8.946,7.533,17.042	S11.201,32.962,19,35.485v8.344C19,44.476,19.524,45,20.171,45h7.658C28.476,45,29,44.476,29,43.829v-8.338	C35.879,33.276,40.642,26.879,40.65,19.652z M23.998,25.279c-3.109,0-5.63-2.521-5.63-5.63s2.521-5.63,5.63-5.63	s5.63,2.521,5.63,5.63S27.107,25.279,23.998,25.279z"></path><linearGradient id="lgQxOMjijNeFEHZ9gijeza_Qu2sYlfDM0qZ_gr1" x1="32.213" x2="32.213" y1="35.497" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0052cc"></stop><stop offset=".044" stop-color="#0255cf"></stop><stop offset=".464" stop-color="#1c77f2"></stop><stop offset=".732" stop-color="#2684ff"></stop></linearGradient><path fill="url(#lgQxOMjijNeFEHZ9gijeza_Qu2sYlfDM0qZ_gr1)" d="M23.875,3v11.026c3.109,0,5.63,2.521,5.63,5.63s-2.521,5.63-5.63,5.63	c1.365,0,2.674,0.542,3.639,1.507c0.965,0.965,1.507,2.274,1.507,3.639v5.065c7.802-2.523,12.606-10.35,11.323-18.449	C39.062,8.949,32.075,2.989,23.875,3z"></path><path d="M26.239,24.813c-0.249,0.108-0.508,0.195-0.774,0.267c-0.469,0.126-0.959,0.2-1.468,0.2	c-0.001,0-0.002,0-0.003,0c-0.04,0.001-0.079,0.006-0.119,0.006c1.365,0,2.674,0.542,3.639,1.507s1.507,2.274,1.507,3.639v5.051	c0.163-0.053,0.318-0.118,0.478-0.175c0.167-0.06,0.335-0.119,0.5-0.183v-4.749C30,27.858,28.441,25.702,26.239,24.813z" opacity=".05"></path><path d="M25.466,25.079c-0.469,0.126-0.959,0.2-1.468,0.2c-0.001,0-0.002,0-0.003,0	c-0.04,0.001-0.079,0.006-0.119,0.006c1.365,0,2.674,0.542,3.639,1.507s1.507,2.274,1.507,3.639v5.051	c0.163-0.053,0.318-0.118,0.478-0.175v-4.933C29.5,27.85,27.788,25.723,25.466,25.079z" opacity=".07"></path>
                                        </svg>
                                        : <svg 
                                            viewBox="0,0,256,256"
                                            height={badgeSize}
                                        >
                                            <defs>
                                                <linearGradient 
                                                    x1="32.213" 
                                                    y1="35.497" 
                                                    x2="32.213" 
                                                    y2="3" 
                                                    gradientUnits="userSpaceOnUse" 
                                                    id="color-1_Qu2sYlfDM0qZ_gr1"
                                                >
                                                    <stop offset="0" stop-color="#ffffff"></stop>
                                                    <stop offset="0.044" stop-color="#ffffff"></stop>
                                                    <stop offset="0.464" stop-color="#ffffff"></stop>
                                                    <stop offset="0.732" stop-color="#ffffff"></stop>
                                                </linearGradient>
                                            </defs>
                                            <g transform="scale(5.33333,5.33333)">
                                                <path fill={badgeColour} d="M40.65,19.652c0,-9.196 -7.456,-16.652 -16.652,-16.652c-8.197,-0.012 -15.183,5.946 -16.465,14.042c-1.282,8.096 3.668,15.92 11.467,18.443v8.344c0,0.647 0.524,1.171 1.171,1.171h7.658c0.647,0 1.171,-0.524 1.171,-1.171v-8.338c6.879,-2.215 11.642,-8.612 11.65,-15.839zM23.998,25.279c-3.109,0 -5.63,-2.521 -5.63,-5.63c0,-3.109 2.521,-5.63 5.63,-5.63c3.109,0 5.63,2.521 5.63,5.63c0,3.109 -2.521,5.63 -5.63,5.63z"></path>
                                                <path fill={badgeColour} d="M23.875,3v11.026c3.109,0 5.63,2.521 5.63,5.63c0,3.109 -2.521,5.63 -5.63,5.63c1.365,0 2.674,0.542 3.639,1.507c0.965,0.965 1.507,2.274 1.507,3.639v5.065c7.802,-2.523 12.606,-10.35 11.323,-18.449c-1.282,-8.099 -8.269,-14.059 -16.469,-14.048z"></path>
                                                <path fill={badgeColour} d="M26.239,24.813c-0.249,0.108 -0.508,0.195 -0.774,0.267c-0.469,0.126 -0.959,0.2 -1.468,0.2c-0.001,0 -0.002,0 -0.003,0c-0.04,0.001 -0.079,0.006 -0.119,0.006c1.365,0 2.674,0.542 3.639,1.507c0.965,0.965 1.507,2.274 1.507,3.639v5.051c0.163,-0.053 0.318,-0.118 0.478,-0.175c0.167,-0.06 0.335,-0.119 0.5,-0.183v-4.749c0.001,-2.518 -1.558,-4.674 -3.76,-5.563z"></path>
                                                <path fill={badgeColour} d="M25.466,25.079c-0.469,0.126 -0.959,0.2 -1.468,0.2c-0.001,0 -0.002,0 -0.003,0c-0.04,0.001 -0.079,0.006 -0.119,0.006c1.365,0 2.674,0.542 3.639,1.507c0.965,0.965 1.507,2.274 1.507,3.639v5.051c0.163,-0.053 0.318,-0.118 0.478,-0.175v-4.933c0,-2.524 -1.712,-4.651 -4.034,-5.295z"></path>
                                            </g>
                                        </svg>
                                    }   
                                    <p className={badgeText}>Source Tree</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </Element>
    );
}