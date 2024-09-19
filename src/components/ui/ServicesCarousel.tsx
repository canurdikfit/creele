import StoryBookComic from './../../assets/artifacts/storybook_comic_service.png';
import SoundDesign from './../../assets/artifacts/sound_design_service.png';
import Animation from './../../assets/artifacts/animation_service.png';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import SoundDesignVid from './../../assets/motion_graphics/sounddesign.mp4'
import AnimationVid from './../../assets/motion_graphics/Animation.mp4'
import StoryVid from './../../assets/motion_graphics/book2.mp4'
import { motion } from "framer-motion"

export default function ServicesCarousel() {
    return (
        <Swiper
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    autoplay: false
                }
            }}
            className='w-fit h-fit mx-auto'
        >
            <SwiperSlide className='xl:max-w-80 lg:max-w-60 max-w-52'>
                <motion.div
                    initial={{
                        translateY: 150
                    }}
                    whileInView={{
                        translateY: 0
                    }}
                    transition={{
                        ease: 'anticipate',
                        duration: .5
                    }}
                >
                    <img
                        src={Animation}
                        alt='Services'
                        sizes='100%'
                        className='w-full h-full object-contain object-center relative z-10'
                    />
                    <video src={AnimationVid} className='absolute h-4/5 w-4/5 top-[5%] left-[10%] z-0' autoPlay muted loop />
                </motion.div>
            </SwiperSlide>
            <SwiperSlide className='xl:max-w-80 lg:max-w-60 max-w-52'>
                <motion.div
                    initial={{
                        translateY: 150
                    }}
                    whileInView={{
                        translateY: 0
                    }}
                    transition={{
                        ease: 'anticipate',
                        duration: .5,
                        delay: .2
                    }}
                >
                    <img
                        src={SoundDesign}
                        alt='Services'
                        sizes='100%'
                        className='w-full h-full object-contain object-center relative z-10'
                    />
                    <video src={SoundDesignVid} className='absolute h-4/5 w-[90%] top-[3%] left-[10%] z-0' autoPlay muted loop />
                </motion.div>
            </SwiperSlide>
            <SwiperSlide className='xl:max-w-80 lg:max-w-60 max-w-52'>
                <motion.div
                    initial={{
                        translateY: 150
                    }}
                    whileInView={{
                        translateY: 0
                    }}
                    transition={{
                        ease: 'anticipate',
                        duration: .5,
                        delay: .4
                    }}
                >
                    <img
                        src={StoryBookComic}
                        alt='Services'
                        sizes='100%'
                        className='w-full h-full object-contain object-center relative z-10'
                    />
                    <video src={StoryVid} className='absolute h-4/5 w-4/5 top-[5%] left-[10%] z-0' autoPlay muted loop />
                </motion.div>
            </SwiperSlide>
        </Swiper>
    )
}