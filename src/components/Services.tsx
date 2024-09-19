import FillBackground from './../assets/images/fill_background_two_with_shadow.png';
import { HeadingOverlay } from './ui/HeadingOverlay';
import ServicesCarousel from './ui/ServicesCarousel';
import { motion } from "framer-motion"

export default function Services() {
    return (
        <section className='padding flex-row items-center xl:items-end pb-28 section services'>
            <HeadingOverlay label='Our Services' />
            <img
                src={FillBackground}
                alt='Background'
                sizes='100%'
                className='z-0 object-cover object-center absolute h-full w-full inset-0'
            />
            <div className='relative z-10 text-center'>
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
                >Our Services</motion.h2>
                <ServicesCarousel />
            </div>
        </section>
    )
}