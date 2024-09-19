import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { FaFacebook, FaLinkedin, FaRegCopyright } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'
import { LuBuilding2 } from 'react-icons/lu'
import Creele from './../assets/icons/creele.png';
import { Link } from 'react-router-dom'
import BoxReveal from './magicui/box-reveal'

export default function Footer() {
    return (
        <footer className='w-full space-y-10 pb-10 padding'>
            <div className="w-full flex items-end justify-between flex-wrap gap-10 md:pl-10 xl:pl-20">
                <ul className='space-y-6'>
                    {
                        FooterBasicInfo[0].map((items, index) => {
                            return (
                                <li
                                    key={index}
                                    className='flex items-center gap-5'
                                >
                                    <items.icon className='text-[#FBD40D] text-xl' />
                                    <BoxReveal
                                        duration={0.6}
                                        boxColor='#FBD40D'>
                                        <span className='text-[15px] font-normal'>{items.label}</span>
                                    </BoxReveal>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex items-center gap-5'>
                    {
                        FooterBasicInfo[1].map((items, index) => {
                            return (
                                <li
                                    key={index}
                                    className='flex items-center justify-center gap-5 h-10 w-10 rounded-full bg-[#FBD40D] hover:bg-black transition-colors group/icon ease-in-out duration-300'
                                >
                                    <Link to={items.label}>
                                        <items.icon className='text-black text-2xl transition-colors ease-in-out duration-300 group-hover/icon:text-white' />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr className='opacity-50' />
            <div className="md:pl-10 xl:pl-20 flex flex-wrap items-center justify-between gap-10">
                <img
                    src={Creele}
                    alt='Creele'
                    sizes='100%'
                    className='h-6 xl:h-8  w-auto'
                />
                <div className="flex gap-4">
                    {
                        BasicLinks.map((items, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={items.hash}
                                    className='text-[#FBD40D] hover:text-white transition-colors ease-in-out duration-300'>
                                    <h6 className='text-lg underline underline-offset-4 whitespace-nowrap'>{items.label}</h6>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-1 text-[#A7A7A7]">
                    <FaRegCopyright />
                    <BoxReveal
                        duration={0.6}
                        boxColor='#FBD40D'>
                        <span className='text-[13px]'>
                            Creele Animation Studios. All rights reserved.
                        </span>
                    </BoxReveal>
                </div>
            </div>
        </footer>
    )
}




const FooterBasicInfo = [
    [
        {
            icon: IoMailOutline,
            label: 'info@creelestudios.com'
        },
        {
            icon: BsTelephone,
            label: '782- 7333-1012'
        },
        {
            icon: LuBuilding2,
            label: '13 Ilesanmi Idowu Street, Ogudu GRA, Lagos Nigeria'
        }
    ],
    [
        {
            icon: FaFacebook,
            label: ''
        },
        {
            icon: FaXTwitter,
            label: ''
        },
        {
            icon: FaLinkedin,
            label: ''
        },
        {
            icon: BiLogoInstagramAlt,
            label: ''
        }
    ],
]

const BasicLinks = [
    {
        label: 'Careers',
        hash: ''
    },
    {
        label: 'BOOK A MEETING',
        hash: ''
    }
]
