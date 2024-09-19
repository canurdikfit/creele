import { HeadingOverlay } from './ui/HeadingOverlay';
import ProjectCarousel from './ui/ProjectCarousel';

export default function Project() {
    return (
        <section className='padding xl:px-28 xl:pb-32 flex-row items-center xl:items-end section carousel'>
            <HeadingOverlay label='OUR PROJECTS' />
            <ProjectCarousel />
        </section>
    )
}
