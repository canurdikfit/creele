import RectangleBtn from '@/assets/artifacts/rectangular_btn.png';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LiaBezierCurveSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

export default function Career() {
    return (
        <section className='section about_sections'>
            <div className="padding pt-32 md:pt-10 pb-16">
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
                    className='text-center'>CAREERS</motion.h2>
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
                    className='md:text-xl xl:text-2xl opacity-80 text-center'>
                    It takes great people to create greatness so we need you! Join us.
                </motion.p>
                <div className="grid gap-y-4 gap-x-8 md:grid-cols-2 xl:grid-cols-3 mt-10 mb-5">
                    {
                        AvailableCareer.map((items, index) => {
                            return (
                                <motion.div
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
                                        delay: index * 0.15
                                    }}
                                    key={index}
                                    className="bg-[#2D2D37] px-5 py-6 rounded-xl flex items-start gap-5">
                                    <div className="h-24 w-24 shrink-0 rounded-xl bg-[#24242B] flex items-center justify-center">
                                        <items.icon className="text-5xl" />
                                    </div>
                                    <div >
                                        <h5 className="text-2xl">{items.label}</h5>
                                        <p className="text-sm opacity-80">{items.requirements}</p>
                                        <Link to="" className="flex items-center gap-2 justify-end hover:text-[#FBD40D]">
                                            <span>View</span>
                                            <IoArrowForwardCircleOutline className="text-lg" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center'>
                    <Link to={''} className='mx-auto'>
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
                                delay: 1
                            }}
                            className='relative xl:h-28 xl:w-52 md:h-20 md:w-40 h-16 w-36'>
                            <img
                                src={RectangleBtn}
                                alt="Button"
                                sizes="100%"
                                className='btn_designed'
                            />
                            <h6 className='relative z-10 xl:text-2xl md:text-xl text-lg btn_text_border'>View All</h6>
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    )
}


const AvailableCareer = [
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
]