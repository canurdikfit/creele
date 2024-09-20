import { HeadingOverlay } from './ui/HeadingOverlay';
import { motion } from "framer-motion"

export default function OurServices(props: {
    heading: string,
    content: string,
    video: string
    image: any
}) {
    return (
        <section className='padding section about_sections'>
            <HeadingOverlay label='Our Services' />
            <div className="relative z-10 space-y-10">
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
                    className='text-center'>Our Services</motion.h2>

                <div className="grid md:grid-cols-5 items-center gap-10">
                    <div className="md:col-span-2 flex items-center md:justify-end justify-center overflow-visible">
                        <motion.div
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
                            className="max-w-sm max-h-72 md:max-h-full mx-auto relative ">
                            <img
                                src={props.image}
                                sizes='100%'
                                alt="Art Works"
                                className='object-contain object-center h-full w-auto max-w-sm max-h-72 md:max-h-full  relative z-10' />
                            <video src={props.video} className='absolute h-4/5 w-[90%] top-[10%] left-[5%] z-0' autoPlay muted loop controls={false} playsInline />
                        </motion.div>

                    </div>
                    <div className="md:col-span-3 space-y-5 text-center md:text-left">
                        <motion.h4 initial={{
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
                                delay: .4
                            }}
                            className='md:text-4xl text-2xl max-w-md'>
                            {props.heading}
                        </motion.h4>
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
                                delay: .6
                            }}
                            className='md:text-xl xl:text-2xl opacity-80 pb-3'>
                            {props.content}
                        </motion.p>
                    </div>

                </div>
            </div>
        </section>
    )
}
