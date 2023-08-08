import { content } from "../assets/js/standardStyle";

export default function Footer() {
    return (
        <div className="h-auto bg-gray-900 md:pt-10 pt-5">
            <div className={content.concat(" text-amber-500 text-center pb-4 font-DaiBanna")}>
                <div>
                    Coded with
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="url(#grad)"
                        className="inline-block w-6 h-6 mx-1"
                    >
                        <defs>
                            <linearGradient id="grad" gradientTransform="rotate(80)">
                                <stop offset="0%" style={{ stopColor: "#4f46e5", stopOpacity: "1" }} />
                                <stop offset="100%" style={{ stopColor: "#e11d48", stopOpacity: "1" }} />
                            </linearGradient>
                        </defs>
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    by yours truly. Built using React.js and TailwindCSS.
                </div>
            </div>
        </div>
    );
}