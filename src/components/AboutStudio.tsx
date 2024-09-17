import LadyArt from './../assets/images/lady_art.png';

export default function AboutStudio() {
    return (
        <section className='flex-row items-end padding section xl:items-end about'>
            <div className="relative z-10 grid md:grid-cols-5 items-center xl:mt-auto">
                <div className="md:col-span-3">
                    <h2>ABOUT THE STUDIO</h2>
                    <p className='max-w-xl md:text-xl xl:text-2xl opacity-80 mt-5'>
                        Creele is an entertainment company focused on portraying the creative brilliance of Africa by telling authentic and inclusive stories of our people and culture, primarily using animated motion pictures with sounds of the best quality, innovatively and uniquely for families around the world.
                    </p>
                </div>
                <div className="md:col-span-2 flex items-center md:justify-end justify-center">
                    <img
                        src={LadyArt}
                        alt="Art Works"
                        sizes='100%'
                        className=' object-bottom h-auto max-w-80 md:max-h-full max-h-80' />
                </div>
            </div>
        </section>
    )
}
