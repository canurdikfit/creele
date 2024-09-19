import VideoPlayer from './ui/VideoPlayer';
import { motion } from "framer-motion"

export default function Video() {
    return (
        <section className='flex-row items-center xl:items-end md:pb-10 padding text-center section video'>
            <div className="relative z-10 space-y-2">
                <motion.h3
                    initial={{
                        translateY: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        translateY: 0,
                        opacity: 1
                    }}
                    transition={{
                        ease: 'linear',
                        duration: .5
                    }}
                >
                    Spotlight on creele studios
                </motion.h3>

                <VideoPlayer />

                <motion.p
                    initial={{
                        translateY: 10,
                        opacity: 0
                    }}
                    whileInView={{
                        translateY: 0,
                        opacity: 1
                    }}
                    transition={{
                        ease: 'linear',
                        duration: .5,
                    }}
                    className='max-w-lg xl:max-w-xl mx-auto'>Channels Television Spotlight On Creele Studios Animated Film Based On Yoruba Mythology, ’The Satchel’ </motion.p>
            </div>
        </section>
    )
}

