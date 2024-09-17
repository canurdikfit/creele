import { HeadingOverlay } from './ui/HeadingOverlay'
import MusicCarousel from './ui/MusicCarousel';

export default function Music() {
    return (
        <section className='padding items-center music section'>
            <HeadingOverlay label='Our Music' />
            <div className='relative z-10 text-center'>
                <MusicCarousel />
            </div>
        </section>
    )
}
