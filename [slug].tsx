import ProductBanner from './assets/images/product_page.png';
import ProductLogo from './assets/images/satchel.png';
import FeaturedImg from './assets/images/product_page_img.png'
import MaskImg from './assets/images/Mask group-1.png';
import MaskImg1 from './assets/images/Mask group-2.png';
import MaskImg2 from './assets/images/Mask group-3.png';
import MaskImg3 from './assets/images/Mask group-4.png';
import MaskImg4 from './assets/images/Mask group-5.png';
import MaskImg5 from './assets/images/Mask group.png';

import Footer from './components/Footer';

export default function ProjectPage() {
    return (
        <main>
            <div className='padding_product pb-20 lg:pt-40 pt-20 md:pt-32 about_sections relative'>
                <div className='rounded-3xl overflow-hidden relative z-10'>
                    <img src={ProductBanner} alt="Banner" className='h-full w-full object-contain' />
                </div>
                <div className='bg-gradient-to-t from-black to-black/0 absolute inset-x-0 bottom-0 h-[35vh]' />
            </div>
            <div className='flex items-center justify-center design_section relative'>
                <div className='bg-gradient-to-b from-black to-black/0 absolute inset-x-0 top-0 h-[35vh]' />
                <div className='bg-gradient-to-t from-black to-black/0 absolute inset-x-0 bottom-0 h-[35vh]' />
                <div className='flex items-center justify-center flex-col relative z-10 padding_product space-y-5'>
                    <img
                        src={ProductLogo}
                        alt='Product Logo'
                        className='h-40 md:h-60 lg:h-80 w-auto'
                    />
                    <div className='max-w-4xl md:text-center space-y-6 text-lg md:text-xl text-justify'>
                        <p>A vigorous and compelling tale of African origin about two brothers fighting for the power to create a world using an all-powerful “Satchel”. A drama-filled, entertaining story sure to leave you at the edge of your screen! Taking you to the mystical lands of “The Satchel”
                        </p>
                        <p>The Satchel is the debut production by Creele animation studios. It was directed by Nissi Ogulu and written by Jimi Oremule with animations done by the in-house creative team. It’s produced and voiced by Nissi Ogulu, Ade Okuboyejo, Ayobami Bello and Jimi Oremule with the songs and music created by Nissi alongside the in-house audio team. The story dates back thousands of years, and centers around two brothers, Obatala and Oduduwa who are children of Olodumare, the supreme ruler. Obatala, who is the crafter of human bodies, obtains permission from his father to create earth with the aid of a satchel.
                        </p>
                        <p>
                            Obatala is an artist who takes much pride in his work and celebrates the permission received from his father to create the universe. Oduduwa, on the other hand, is a charismatic lover boy type who has formed an attachment with a human. This story begs the question “Does love know any bounds?”  Soon after Obatala has created the stars and the primeval ocean, his brother Oduduwa usurps the satchel with the aim to finish the job. Oduduwa, fuelled by ulterior motives, fends off his brother and chaos ensues. The story keeps viewers on the edge, as they are left to make a choice between the two brothers and what they respectively represent.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_sections bg-contain padding_product pt-32 bg-blend-overlay bg-black/40 relative space-y-5">
                <div className='bg-gradient-to-b from-black to-black/0 absolute inset-x-0 top-0 h-[35vh]' />
                <img src={FeaturedImg} alt="Banner" className='relative z-20 h-full w-full object-contain' />

                <div className="grid md:grid-cols-3 gap-5">
                    <div>
                        <img src={MaskImg5} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={MaskImg2} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={MaskImg4} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <img src={MaskImg1} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={MaskImg3} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                </div>


                <img src={FeaturedImg} alt="Banner" className='relative z-20 h-full w-full object-contain' />

                <div className="grid md:grid-cols-3 gap-5">
                    <div>
                        <img src={MaskImg} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={MaskImg2} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={MaskImg4} alt="Banner" className='h-full w-full object-cover' />
                    </div>
                </div>

            </div>
            <div className='h-32' />
            <Footer />
        </main>
    )
}
