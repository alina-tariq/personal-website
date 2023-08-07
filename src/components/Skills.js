import { Element } from "react-scroll";
import { AndroidstudioPlain, AngularjsPlain, CPlain, Css3Plain, DjangoPlain, Html5Plain, JavaPlain, JavascriptPlain, JiraPlain, JupyterPlainWordmark, PythonPlain, PhpPlain } from 'devicons-react';
import { CircleStackIcon } from "@heroicons/react/24/outline";
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv } from "../assets/js/standardStyle";
import { badgeSectionDiv, badgeSectionPadding, badgeSectionTitle, badgeDiv, badgeImage, badgeSize, badgeColour, badgeText} from "../assets/js/skillsStyle";

export default function Skills() {

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
                                <div className={badgeImage}>
                                    <JavaPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>Java</p>
                                </div>
                                <div className={badgeImage}>
                                    <PythonPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>Python</p>
                                </div>
                                <div className={badgeImage}>
                                    <CPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>C</p>
                                </div>
                                <div className={badgeImage}>
                                    <Html5Plain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>HTML</p>
                                </div>
                                <div className={badgeImage}>
                                    <Css3Plain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>CSS</p>
                                </div>
                                <div className={badgeImage}>
                                    <JavascriptPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>JavaScript</p>
                                </div>
                                <div className={badgeImage}>
                                    <PhpPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>PHP</p>
                                </div>
                                <div className={badgeImage}>
                                    <CircleStackIcon color={badgeColour} height={badgeSize}/>
                                    <p className={badgeText}>SQL</p>
                                </div>
                            </div>
                        </div>

                        <div className={badgeSectionDiv.concat(badgeSectionPadding)}>
                            <div className={badgeSectionTitle}>
                                Web Frameworks:
                            </div>
                            <div className={badgeDiv}>
                                <div className={badgeImage}>
                                    <svg viewBox="0 0 128 128" height={badgeSize}>
                                        <g fill={badgeColour}><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                                    </svg>
                                    <p className={badgeText}>React</p>
                                </div>
                                <div className={badgeImage}>
                                    <AngularjsPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>Angular JS</p>
                                </div>
                                <div className={badgeImage}>
                                    <DjangoPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>Django</p>
                                </div>
                            </div>
                        </div>

                        <div className={badgeSectionDiv.concat(badgeSectionPadding)}>
                            <div className={badgeSectionTitle}>
                                Tools:
                            </div>
                            <div className={badgeDiv}>
                                <div className={badgeImage}>
                                    <AndroidstudioPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>Android Studio</p>
                                </div>
                                <div className={badgeImage}>
                                    <svg viewBox="0 0 128 128" height={badgeSize}>
                                        <g fill={badgeColour}><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                                    </svg>
                                    <p className={badgeText}>GitHub</p>
                                </div>
                                <div className={badgeImage}>
                                    <JiraPlain color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>JIRA</p>
                                </div>
                                <div className={badgeImage}>
                                    <JupyterPlainWordmark color={badgeColour} size={badgeSize} />
                                    <p className={badgeText}>Jupyter Notebook</p>
                                </div>
                                <div className={badgeImage}>
                                    <svg viewBox="0 0 128 128" height={badgeSize}>
                                        <path fill={badgeColour} d="M64 .73C29.114.73.73 29.113.73 64S29.114 127.27 64 127.27c34.888 0 63.27-28.384 63.27-63.27S98.887.73 64 .73zm3.335 120.17v-10.988l27.44-13.9a1.955 1.955 0 001.073-1.747v-6.29a5.98 5.98 0 003.99-6.258 5.978 5.978 0 10-11.892 1.225 5.97 5.97 0 003.99 5.03v5.09l-24.6 12.46v-10.22l10.843-5.017a1.957 1.957 0 001.135-1.773l.02-17.026 20.07-11.276c.617-.346 1-1 1-1.706V53.76a5.974 5.974 0 00-2.57-11.59 5.975 5.975 0 00-1.344 11.59v3.606l-20.07 11.27c-.617.35-1 1-1 1.706l-.02 16.92-8.068 3.73V54.2l16.884-8.257a1.95 1.95 0 001.097-1.755v-6.29a5.978 5.978 0 003.99-6.26 5.976 5.976 0 00-6.56-5.33 5.975 5.975 0 00-5.332 6.56 5.964 5.964 0 003.99 5.027v5.07l-14.068 6.877V28.598a5.977 5.977 0 10-7.902-5.03 5.97 5.97 0 003.988 5.028V63.24l-9.943-5.224V42.28a1.95 1.95 0 00-.767-1.552l-6.802-5.21a5.978 5.978 0 10-2.61 2.928l6.265 4.802V59.2c0 .728.404 1.395 1.048 1.733l12.81 6.73v12.724l-21.37-9.884.292-7.742a1.956 1.956 0 00-1.063-1.815l-9.797-5.025c.147-.63.2-1.292.13-1.97a5.978 5.978 0 00-11.892 1.227 5.977 5.977 0 006.56 5.33 5.91 5.91 0 003.1-1.268l9.004 4.616-.295 7.8c-.03.79.417 1.52 1.133 1.85L63.42 84.7v9.084a1.98 1.98 0 000 .516v26.693a57.53 57.53 0 01-6.093-.387V97.66c0-.766-.445-1.46-1.14-1.778l-15.182-6.987a5.974 5.974 0 00-6.563-6.527 5.976 5.976 0 104.924 10.08l14.047 6.463v21.092C27.022 115.028 6.992 91.815 6.992 64c0-31.434 25.574-57.01 57.01-57.01 31.433 0 57.006 25.576 57.006 57.01 0 30.315-23.787 55.17-53.674 56.902z"></path>
                                    </svg>
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