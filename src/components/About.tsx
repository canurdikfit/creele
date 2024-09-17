import RectangleBtn from '@/assets/artifacts/rectangular_btn.png';
import LadyFire from '@/assets/images/lady_fire.png';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className='section about items-end'>
            <div className="relative z-10 grid mt-auto lg:grid-cols-2 items-center md:items-end h-[80vh] w-screen">
                <div className='px-5 md:pl-12 lg:pl-20 xl:pl-28 xl:pt-44 text-left xl:pb-28'>
                    <h2>Who We Are</h2>
                    <p className='max-w-xl md:text-xl xl:text-2xl opacity-80 mb-2'>Creele Animation Studios  is a family entertainment and trans-media production studio. Our mission is to magnificently portray the creative brilliance of Africa through breathtaking storytelling of our rich heritage using animated, interactive entertainment, sound and motionpictures.</p>
                    <Link to={'/about'}>
                        <button className='relative xl:h-28 xl:w-52 md:h-20 md:w-40 h-16 w-36'>
                            <img
                                src={RectangleBtn}
                                alt="Button"
                                sizes="100%"
                                className='btn_designed'
                            />
                            <h6 className='relative z-10 xl:text-2xl md:text-xl text-lg btn_text_border'>Learn More</h6>
                        </button>
                    </Link>
                </div>
                <div className="relative h-fit overflow-hidden items-end justify-end hidden md:flex">
                    <img
                        src={LadyFire}
                        alt="Lady Art"
                        sizes="100%"
                        className='object-contain object-right-bottom max-h-[550px] xl:max-h-full'
                    />
                </div>
            </div>
        </section>
    )
}
