import RectangleBtn from './../../assets/artifacts/rectangular_btn.png';
import ProjectCard from './../../assets/images/project_card.png';
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-cards';
import React from 'react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const ProjectLoaded = [
    {
        title: 'The satchel',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit',
        url: ''
    },
    {
        title: 'SOPO',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit',
        url: ''
    },
    {
        title: 'The project',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit',
        url: ''
    },
]


export default function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const Projects = [ProjectCard, ProjectCard, ProjectCard]
    const onSwiperChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex)
    }

    return (
        <div className="relative z-10 grid items-end justify-center md:grid-cols-2 w-full gap-y-16">
            <div className='space-y-3 relative z-10 text-left'>
                <h2 className='relative inline-block after:absolute after:bottom-0 after:w-[35%] after:h-1 after:left-0 after:bg-[#FBD40D] after:rounded md:mb-4'>
                    {ProjectLoaded[activeIndex].title}
                </h2>
                <p className='max-w-xl lg:text-xl xl:text-2xl opacity-80'>
                    {ProjectLoaded[activeIndex].content}
                </p>
                <Link to={ProjectLoaded[activeIndex].url} className='inline-block'>
                    <button className='relative xl:h-28 xl:w-52 md:h-20 md:w-40 h-16 w-36'>
                        <img
                            src={RectangleBtn}
                            alt="Button"
                            sizes="100%"
                            className='btn_designed'
                        />
                        <h6 className='relative z-10 xl:text-2xl md:text-xl text-lg btn_text_border'>View Project</h6>
                    </button>
                </Link>
            </div>
            <div className="flex justify-center h-full">
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
                        className="xl:h-96 xl:w-80 w-64 h-80"
                    >
                        {
                            Projects.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={item}
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
                            Projects.map((_, index) => (
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
