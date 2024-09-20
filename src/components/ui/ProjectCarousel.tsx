import RectangleBtn from './../../assets/artifacts/rectangular_btn.png';
import ProjectCard from './../../assets/images/project_image.png';
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-cards';
import React from 'react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const ProjectLoaded = [
    {
        title: 'The satchel',
        content: 'A vigorous and compelling tale of African origin about two brothers fighting for the power to create a world using an all-powerful “Satchel”. A drama-filled, entertaining story sure to leave you at the edge of your screen! Taking you to the mystical lands of “The Satchel”',
        img: ProjectCard,
        url: ''
    }
]


export default function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const onSwiperChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex)
    }

    return (
        <div className="relative z-10 grid items-end justify-center md:grid-cols-2 w-full gap-y-8">
            <div className='space-y-3 relative z-10 text-left'>
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
                    {ProjectLoaded[activeIndex].title}
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
                    className='max-w-xl lg:text-xl xl:text-2xl opacity-80'>
                    {ProjectLoaded[activeIndex].content}
                </motion.p>
                <Link to={ProjectLoaded[activeIndex].url} className='inline-block'>
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
            <div className="justify-center h-full md:flex">
                <div className='flex flex-col justify-center gap-5'>
                    <Swiper
                        effect={'cards'}
                        cardsEffect={{
                            perSlideOffset: 20,
                            perSlideRotate: 8
                        }}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        rewind={true}
                        centeredSlides={true}
                        grabCursor={true}
                        onSlideChange={onSwiperChange}
                        modules={[EffectCards, Autoplay]}
                        className="xl:h-96 xl:w-80 w-64 h-60"
                    >
                        {
                            ProjectLoaded.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={item.img}
                                            alt='Project Card'
                                            sizes='100%'
                                            className='object-contain object-center h-full w-full'
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                    <div className='flex items-center gap-3 ml-6'>
                        {
                            ProjectLoaded.map((_, index) => (
                                <div key={index} className="flex items-center justify-center lg:h-6 lg:w-6 h-4 w-4 border border-white rounded-full">
                                    <span className={`h-2 w-2 lg:h-3 lg:w-3 inline-block bg-white ${activeIndex == index ? 'opacity-100' : 'opacity-0'} rounded-full transition-opacity ease-in-out duration-300`}></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
