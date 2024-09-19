import LadyArt from './../assets/motion_graphics/SINGER-WAVE2.gif';
import WordPullUp from './magicui/word-pull-up';
import { motion } from "framer-motion"

export default function AboutStudio() {
    return (
        <section className='flex-row items-end padding section xl:items-end about'>
            <div className="relative z-10 grid md:grid-cols-5 items-start gap-y-16 xl:mt-auto">
                <div className="md:col-span-3">
                    <WordPullUp
                        words='ABOUT THE STUDIO'
                    />

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
                            duration: .5
                        }}
                        className='max-w-xl md:text-xl xl:text-2xl opacity-80 mt-5'>
                        Creele is an entertainment company focused on portraying the creative brilliance of Africa by telling authentic and inclusive stories of our people and culture, primarily using animated motion pictures with sounds of the best quality, innovatively and uniquely for families around the world.
                    </motion.p>


                </div>
                <div className="md:col-span-2 flex items-center md:justify-end justify-center">
                    <img
                        src={LadyArt}
                        alt="Art Works"
                        sizes='100%'
                        className='object-top h-auto max-w-80 md:max-h-full max-h-80 w-auto' />
                </div>
            </div>
        </section>
    )
}
