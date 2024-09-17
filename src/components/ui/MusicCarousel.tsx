import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import AppleMusicIcon from './../../assets/icons/apple-music.png';
import SpotifyIcon from './../../assets/icons/spotify-icon.png';
import MusicCard from './../../assets/images/music_card.png';
import { Audio } from 'react-loader-spinner';
import React from 'react';
import { Link } from 'react-router-dom';

const Playlist = [
    {
        image: MusicCard,
        title: 'Alan Walker - Faded',
        urlSrc: '/faded.mp3',
        spotify: '',
        apple: '',
    },
    {
        image: MusicCard,
        title: 'ODUMODUBLVCK - JUJU',
        urlSrc: '/juju.mp3',
        spotify: '',
        apple: '',
    },
    {
        image: MusicCard,
        title: 'Omah Lay - Moving',
        urlSrc: '/moving.mp3',
        spotify: '',
        apple: '',
    },
    {
        image: MusicCard,
        title: 'Olamide - W',
        urlSrc: '/w.mp3',
        spotify: '',
        apple: '',
    },
]

export default function MusicCarousel() {
    const audioPlayerRef = React.useRef<any>()
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
    const [index, setIndex] = React.useState<number>(0)
    const togglePlayerMode = () => {
        const previousValue = isPlaying
        setIsPlaying(!previousValue)
        if (isPlaying) {
            audioPlayerRef.current.pause()
        } else {
            audioPlayerRef.current.play()
        }
    }

    const nextSong = () => {
        if (index >= Playlist.length - 1) {
            setIndex(0)
            audioPlayerRef.current.src = Playlist[0].urlSrc
            setTimeout(() => {
                audioPlayerRef.current.play()
                setIsPlaying(true)
            }, 1000)
        } else {
            setIndex(prev => prev + 1)
            audioPlayerRef.current.src = Playlist[index + 1].urlSrc
            setTimeout(() => {
                audioPlayerRef.current.play()
                setIsPlaying(true)
            }, 1000)
        }
    }

    const prevSong = () => {
        if (index > 0) {
            setIndex(prev => prev - 1)
            audioPlayerRef.current.src = Playlist[index - 1].urlSrc
            setTimeout(() => {
                audioPlayerRef.current.play()
                setIsPlaying(true)
            }, 1000)
        }
    }

    const onEnded = () => {
        setIsPlaying(false)
        nextSong()
    }


    return (
        <div className="flex flex-col items-center w-fit mx-auto md:items-end gap-3 max-h-[80vh]">
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className="shrink-0 relative z-10 w-72 md:w-auto md:h-60 xl:h-64 h-80">
                    <img
                        src={Playlist[index].image}
                        alt='Music'
                        sizes='100%'
                        className='w-auto h-full object-contain object-center'
                    />
                </div>
                <div className="audio_player">
                    <audio
                        data-keepplaying
                        ref={audioPlayerRef}
                        src={Playlist[index].urlSrc}
                        onEnded={onEnded}
                    />
                    <div className="text-center md:text-left">
                        <h4 className='md:text-4xl text-2xl'>{Playlist[index].title}</h4>
                        <p className='font-medium md:text-lg'>By Creele Studio</p>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between">
                        <div className="flex items-center gap-5">
                            <button onClick={togglePlayerMode} className='hover:text-[#FCBC0C] transition-colors ease-linear duration-200 text-5xl'>
                                {
                                    isPlaying ? (
                                        <FaPauseCircle />
                                    ) : (
                                        <FaPlayCircle />
                                    )
                                }
                            </button>
                            <Audio
                                height="40"
                                width="40"
                                color="#FCBC0C"
                                ariaLabel="audio-loading"
                                wrapperStyle={{}}
                                wrapperClass="wrapper-class"
                                visible={isPlaying}
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <Link to={Playlist[index].apple}>
                                <img
                                    src={AppleMusicIcon}
                                    alt='Icon'
                                    sizes='100%'
                                    className='h-10 w-auto'
                                />
                            </Link>
                            <Link to={Playlist[index].spotify}>
                                <img
                                    src={SpotifyIcon}
                                    alt='Icon'
                                    sizes='100%'
                                    className='h-10 w-auto'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-8 pr-3'>
                <button
                    className={index == 0 ? 'pointer-events-none opacity-40' : 'opacity-100'}
                    onClick={prevSong}
                >
                    <IoIosArrowDropleft className="text-5xl" />
                </button>
                <button
                    className={index == Playlist.length - 1 ? 'opacity-40 pointer-events-none' : 'opacity-100'}
                    onClick={nextSong}
                >
                    <IoIosArrowDropright className="text-5xl" />
                </button>
            </div>
        </div>
    )
}
