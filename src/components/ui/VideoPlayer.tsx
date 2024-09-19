import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import VideoPlayerBg from '@/assets/artifacts/video_screen.png';
import PlayBtn from '@/assets/artifacts/round_play_btn.png';
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from 'react-player'
import React from "react";
import "swiper/css";


export default function VideoPlayer() {
    const SlideRef = React.useRef<any>();
    const [domLoaded, setDomLoaded] = React.useState(false);
    const [slideBegOrNot, handleSlideByState] = React.useState({
        isFirst: true,
        isLast: false,
    });
    const VideosURL = [
        'https://youtu.be/oorVWW9ywG0?si=PYtWgr_JkCI6lhih',
        'https://youtu.be/t3SnSMTNTos?si=qWTklHdl4jYCFwAH',
        'https://youtu.be/w4LSsHdMnjA?si=GfbzWqVTWlU2xae2',
        'https://youtu.be/24m2i6p3XL0?si=oDolesp0ramYIDsX',
        'https://youtu.be/b9hoSNdOeiw?si=QO_35SdmSvJN3bgB',
        'https://youtu.be/rHSQQfVzXcY?si=m0G9AgX2sDks00b2'
    ]

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const onSlideChange = (swiper: any) => {
        handleSlideByState({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };

    React.useEffect(() => {
        setDomLoaded(true);
    }, []);

    const { isLast, isFirst } = slideBegOrNot;
    return (
        <div className="flex items-center justify-center">
            <button
                className={isFirst ? 'cursor-not-allowed opacity-40' : 'opacity-100'}
                onClick={() => handlePrev()}>
                <IoIosArrowDropleft className="text-4xl" />
            </button>

            {domLoaded && (
                <Swiper
                    ref={SlideRef}
                    onSlideChange={onSlideChange}
                    slidesPerView={1}
                    className="mySwiper md:max-w-md xl:max-w-3xl w-fit h-48 md:h-[280px] xl:h-[480px]">
                    {VideosURL.map((items, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <div className="relative w-fit h-full">
                                    <img
                                        src={VideoPlayerBg}
                                        alt="Video Player Background"
                                        sizes="100%"
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'contain',
                                            objectPosition: 'center'
                                        }}
                                    />
                                    <div className="absolute z-10 h-[65%] md:h-3/4 w-4/5 top-[15%] md:top-[12%] left-[11.5%] bg-black flex items-center">
                                        <ReactPlayer
                                            url={items}
                                            height={'100%'}
                                            width={'100%'}
                                            light={'/poster.png'}
                                            controls={true}
                                            playing={true}
                                            volume={1}
                                            pip={true}
                                            stopOnUnmount={false}
                                            playsinline={true}
                                            playIcon={<PlayerBtn />}
                                            onEnded={() => handleNext()}
                                            config={{
                                                youtube: {
                                                    playerVars: {
                                                        showinfo: 0,
                                                        playsinline: 1,
                                                        autoplay: 0
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}

            <button
                className={isLast ? 'cursor-not-allowed opacity-40' : 'opacity-100'}
                onClick={() => handleNext()}>
                <IoIosArrowDropright className="text-4xl" />
            </button>
        </div>
    )
}



const PlayerBtn = () => {
    return (
        <button className="relative xl:h-20 xl:w-20 md:h-16 md:w-16 h-10 w-10">
            <img
                src={PlayBtn}
                alt="Button"
                sizes="100%"
                className="btn_designed"
            />
        </button>
    )
}
