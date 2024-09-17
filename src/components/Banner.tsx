import { IoArrowDownOutline } from "react-icons/io5";
import RoundBtn from './../assets/artifacts/round_btn.png';
import { CiDesktopMouse2 } from "react-icons/ci";
import ShinyButton from "./magicui/shiny-button";
import { fullpageApi } from "@fullpage/react-fullpage";



export default function Banner(props: { route: fullpageApi }) {
    return (
        <section className='banner px-5 md:px-10 lg:px-20 section'>
            <div className="space-y-4 md:space-y-7">
                <ShinyButton
                    className="bg-white/20 backdrop-blur inline-block rounded-xl py-3 px-6"
                    text="Read the Latest News from Creele Studios" />

                <h1>Authentic Africa Stories, <br className="md:block hidden" /> Global Pulse</h1>
                <p className='lg:max-w-3xl max-w-xl mx-auto md:text-xl text-sm'>Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. </p>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button
                    onClick={() => props.route.moveSectionDown()}
                    className="relative flex items-center justify-center lg:h-28 lg:w-28 md:h-24 md:w-24 h-20 w-20 mouse group/mouse">
                    <img
                        src={RoundBtn}
                        alt="Button"
                        sizes="100%"
                        className="btn_designed"
                    />
                    <div className="mouse_down group-hover/mouse:scale-105">
                        <CiDesktopMouse2 className="md:text-2xl text-xl" />
                        <IoArrowDownOutline className="md:text-xs text-[10px] mouse_arrow_down" />
                    </div>
                </button>
            </div>
        </section>
    )
}
