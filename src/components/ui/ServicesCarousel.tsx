import StoryBookComic from './../../assets/artifacts/storybook_comic_service.png';
import SoundDesign from './../../assets/artifacts/sound_design_service.png';
import Animation from './../../assets/artifacts/animation_service.png';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';

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
            <SwiperSlide className='xl:max-w-80 lg:max-w-72 max-w-52'>
                <img
                    src={Animation}
                    alt='Services'
                    sizes='100%'
                    className='w-full h-full object-contain object-center'
                />
            </SwiperSlide>
            <SwiperSlide className='xl:max-w-80 lg:max-w-72 max-w-52'>
                <img
                    src={SoundDesign}
                    alt='Services'
                    sizes='100%'
                    className='w-full h-full object-contain object-center'
                />
            </SwiperSlide>
            <SwiperSlide className='xl:max-w-80 lg:max-w-72 max-w-52'>
                <img
                    src={StoryBookComic}
                    alt='Services'
                    sizes='100%'
                    className='w-full h-full object-contain object-center'
                />
            </SwiperSlide>
        </Swiper>
    )
}