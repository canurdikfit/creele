import LadyHand from './../assets/images/hands_folded_art.png';

export default function Vision() {
    return (
        <section className='padding about_sections section'>
            <div className="relative z-10 grid md:grid-cols-5 items-center mt-auto">
                <div className="md:col-span-3 space-y-5">
                    <h2>OUR MISSION</h2>
                    <p className='max-w-3xl md:text-lg xl:text-xl opacity-80 pb-3'>
                        Our mission is to cater to the desire for artistic, informative, inspirational and entertaining content developed from diverse culturally inspired storytelling for people worldwide. We are pushing the boundaries of creative innovation technology in order to become the top entertainment studio emerging from Africa.
                    </p>
                    <h2>OUR VISION</h2>
                    <p className='max-w-3xl md:text-lg xl:text-xl opacity-80'>
                        Our sights are set on showcasing a new kind of creative innovation in the entertainment industry, as well as across the technological and social spaces. We hope to capture the ears, eyes and hearts of all people, delivering a truly “Creele” experience.
                    </p>
                </div>
                <div className="md:col-span-2 items-center md:justify-end justify-center overflow-visible hidden md:flex">
                    <img
                        src={LadyHand}
                        alt="Art Works"
                        sizes='100%'
                        className='object-cover object-bottom h-[800px] w-full' />
                </div>
            </div>
        </section>
    )
}
