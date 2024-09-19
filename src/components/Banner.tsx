import { IoArrowDownOutline } from "react-icons/io5";
import RoundBtn from './../assets/artifacts/round_btn.png';
import { CiDesktopMouse2 } from "react-icons/ci";
import ShinyButton from "./magicui/shiny-button";
import { fullpageApi } from "@fullpage/react-fullpage";
import { motion } from "framer-motion"


export default function Banner(props: { route: fullpageApi }) {
    return (
        <section className='banner px-5 md:px-10 lg:px-20 section'>
            <div className="space-y-4 md:space-y-7">
                <motion.div
                    initial={{
                        translateY: 200,
                        opacity: 0
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    transition={{
                        ease: 'linear',
                        duration: .5,
                    }}
                >
                    <ShinyButton
                        className="bg-white/20 backdrop-blur inline-block rounded-xl py-2.5 px-6"
                        text="Read the Latest News from Creele Studios" />
                </motion.div>

                <motion.h1
                    initial={{
                        translateY: 200,
                        opacity: 0
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    transition={{
                        ease: 'linear',
                        duration: .5,
                        delay: .2
                    }}
                >
                    Africa Stories, <br /> Global Pulse
                </motion.h1>
                <motion.p
                    initial={{
                        translateY: 20,
                        opacity: 0
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    transition={{
                        ease: 'linear',
                        duration: .5,
                        delay: .3
                    }}
                    className='lg:max-w-5xl max-w-xl mx-auto md:text-lg text-sm'>Creele is a family entertainment and trans-media production studio. Our mission is to magnificently portray the  <br className="xl:block hidden" />
                    creative brilliance of Africa through breathtaking storytelling of our rich heritage
                    <br className="xl:block hidden" />  using animated, interactive entertainment, sound and motion pictures</motion.p>
            </div>
            <div className="absolute bottom-8 left-1/2 animate-bouncing">
                <button
                    onClick={() => props.route.moveSectionDown()}
                    className="relative flex items-center justify-center md:h-24 md:w-24 h-20 w-20 mouse group/mouse">
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
