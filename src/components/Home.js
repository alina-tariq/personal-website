import ScrollButton from "./ScrollButton";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <div className="border-b-4 border-amber-500 h-screen bg-gray-900 grid grid-cols-1 grid-flow-row 
            px-8 pb-8 pt-32">
            <div className="flex flex-col items-center justify-end text-center pt-10">
                {/* <img
                        className="rounded-full border-4 border-stone-100 bg-gradient-to-t from-red-500
                        to-gray-900 w-56"
                        alt="me"
                        src={require("../assets/meiconnoborder.png")}
                    /> */}
                <h1 className="font-Sacramento lg:text-9xl md:text-8xl text-7xl font-extrabold mx-auto
                    text-transparent pt-10 pb-20 px-16 bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                    <TypeAnimation
                        sequence={[
                            'hey there i\'m alina!',
                            () => { },
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                        speed={40}
                    />
                </h1>
                <h3 className="font-DaiBanna text-2xl font-bold mx-auto text-stone-100 pt-10 pb-28 px-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ligula, sed efficitur nulla lobortis quis. Duis pellentesque sit amet mi a laoreet. Proin quam lectus, ultricies eget massa et, gravida semper elit.
                </h3>
            </div>
            <ScrollButton />
        </div>
    );
}

