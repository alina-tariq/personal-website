import { Element } from "react-scroll";
import { useForm, ValidationError } from '@formspree/react';
import { section, sectionTitleDiv, sectionTitleUnderline, sectionTitle, contentDiv, content } from "../assets/js/standardStyle";

export default function Contact() {
    const formArea = "block w-full p-2.5 text-sm shadow-sm rounded-lg text-gray-900";
    const formID = process.env.REACT_APP_FORM_ID;
    const [state, handleSubmit] = useForm(formID); 
    
    if (state.succeeded) {
        document.getElementById("submission").innerHTML = "Message sent :)";
    }

    return (
        <Element id='/contact' name='/contact'>
            <div className={section}>
                <div className="w-full h-full flex flex-row-reverse flex-wrap justify-center">
                    <div className={sectionTitleDiv}>
                        <p className={sectionTitleUnderline}>
                            <h1 className={sectionTitle}>
                                contact
                            </h1>
                        </p>
                    </div>
                    <div className={contentDiv}>
                        <section className={content.concat(" text-center")}>
                            <div className="px-10 xl:w-3/5 xs:w-3/4 w-full rounded-lg border-4 border-amber-500 inline-block">
                                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                                    <p>
                                        See something that piqued your interest? Then, why not get in touch? We can chat about my
                                        previous work experience, the product your team is working on, or even the curse plaguing your
                                        favourite sports team.
                                    </p>
                                    <div>
                                        <input type="text" id="name" className={formArea} placeholder="name" required />
                                    </div>
                                    <div>
                                        <input type="email" id="email" name="email" className={formArea} placeholder="email" required />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                    <div>
                                        <input type="text" id="subject" className={formArea} placeholder="subject" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <textarea id="message" name="message" rows="5" className={formArea} placeholder="message" required />
                                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                                    </div>
                                    <button
                                        type="submit" 
                                        disabled={state.submitting}
                                        className="py-2 px-3 text-sm rounded-lg font-bold bg-gradient-to-br from-regal-blue to-regal-purple"
                                    >
                                        Send message
                                    </button>
                                </form>
                                <p id="submission" className="text-base pt-5 font-bold text-amber-500"></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Element>
    );
}


