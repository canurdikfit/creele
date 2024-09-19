import RectangleBtn from '@/assets/artifacts/rectangular_btn.png';
import LadyFire from '@/assets/images/lady_fire.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

export default function About() {
    return (
        <section className='section about md:items-end justify-end'>
            <div className="relative z-10 grid mt-auto lg:grid-cols-2 items-center w-screen max-h-screen overflow-hidden">
                <div className='px-5 md:pl-12 lg:pl-20 xl:pl-28 xl:pt-44 text-left'>
                    <motion.h2
                        initial={{
                            translateY: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: 'linear',
                            duration: .5
                        }}
                    >Who We Are</motion.h2>
                    <motion.p
                        initial={{
                            translateY: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: 'linear',
                            duration: .5,
                            delay: .2
                        }}
                        className='max-w-xl md:text-xl xl:text-2xl opacity-80 mb-2'>Creele Animation Studios  is a family entertainment and trans-media production studio. Our mission is to magnificently portray the creative brilliance of Africa through breathtaking storytelling of our rich heritage using animated, interactive entertainment, sound and motionpictures.</motion.p>
                    <Link to={'/about'}>
                        <motion.button
                            initial={{
                                translateY: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{
                                ease: 'linear',
                                duration: .5,
                                delay: .3
                            }}
                            className='relative xl:h-28 xl:w-52 md:h-20 md:w-40 h-16 w-36'>
                            <img
                                src={RectangleBtn}
                                alt="Button"
                                sizes="100%"
                                className='btn_designed'
                            />
                            <h6 className='relative z-10 xl:text-2xl md:text-xl text-lg btn_text_border'>Learn More</h6>
                        </motion.button>
                    </Link>
                </div>
                <div className="relative h-fit overflow-hidden items-end justify-end hidden md:flex">
                    <img
                        src={LadyFire}
                        alt="Lady Art"
                        sizes="100%"
                        className='object-contain object-right-bottom max-h-[550px] xl:max-h-full h-full'
                    />
                </div>
            </div>
        </section>
    )
}
