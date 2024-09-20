import RectangleBtn from './../assets/artifacts/rectangular_btn.png';
import { HeadingOverlay } from './ui/HeadingOverlay';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

export default function OurProjects(props: {
    type?: string,
    heading: string,
    content: string,
    image: any,
    projectUrl: string
}) {
    return (
        <section className='padding our_projects xl:items-end pt-32 items-center md:pb-24 pb-16 justify-end'>
            <HeadingOverlay label='OUR PROJECTS' />
            <div className="relative z-10 grid items-end justify-center md:grid-cols-2 w-full md:gap-y-16 gap-5 max-[80vh] mt-auto md:mt-0">

                <div className='space-y-3 relative z-10'>
                    {
                        props.type && (
                            <motion.span
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
                                    duration: .3
                                }}

                                className='block w-fit py-1 text-sm lg:text-base px-6 bg-white/20 rounded-full font-medium'>{props.type}</motion.span>
                        )
                    }
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
                        className='relative inline-block after:absolute after:bottom-0 after:w-[35%] after:h-1 after:left-0 after:bg-[#FBD40D] after:rounded md:mb-4'>
                        {props.heading}
                    </motion.h2>
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
                        className='max-w-2xl lg:text-xl xl:text-2xl opacity-80'>
                        {props.content}
                    </motion.p>
                    <Link to={`/product/${props.projectUrl}`} className='inline-block'>
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
                            }} className='relative xl:h-28 xl:w-52 md:h-20 md:w-40 h-16 w-36'>
                            <img
                                src={RectangleBtn}
                                alt="Button"
                                sizes="100%"
                                className='btn_designed'
                            />
                            <h6 className='relative z-10 xl:text-2xl md:text-xl text-lg btn_text_border'>View Project</h6>
                        </motion.button>
                    </Link>
                </div>
                <div className='flex items-center justify-center md:justify-end'>
                    <img
                        src={props.image}
                        alt='Project'
                        sizes='100%'
                        className='h-full w-full object-contain object-center max-h-72 md:max-h-full md:max-w-sm'
                    />
                </div>
            </div>
        </section>
    )
}
