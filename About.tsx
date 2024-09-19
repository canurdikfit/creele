import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "./components/Navbar";
import AboutStudio from './components/AboutStudio';
import Vision from './components/Vision';
import OurServices from './components/OurServices';
import ServiceImage from './assets/artifacts/services.png';
import Career from './components/Career';
import SoundDesignVid from './assets/motion_graphics/sounddesign.mp4'
import AnimationVid from './assets/motion_graphics/Animation.mp4'
import StoryVid from './assets/motion_graphics/book2.mp4'
import { ScrollRestoration } from 'react-router-dom';

export default function About() {

    return (
        <>
            <ScrollRestoration />
            <Navbar
            />
            <ReactFullpage
                menu="#menu"
                navigation
                credits={{
                    enabled: false
                }}
                scrollOverflow
                scrollOverflowReset
                autoScrolling
                scrollingSpeed={700}
                licenseKey=""
                render={() => {
                    return (
                        <main>
                            <AboutStudio />
                            <Vision />
                            {
                                ServicesContent.map((item, idx) => {
                                    return (
                                        <OurServices
                                            key={idx}
                                            heading={item.heading}
                                            content={item.content}
                                            image={ServiceImage}
                                            video={item.video}
                                        />
                                    )
                                })
                            }
                            <Career />
                        </main>
                    );
                }}
            />
        </>
    )
}


const ServicesContent = [
    {
        heading: '⁠Animation, Storytelling, Character Development',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.',
        video: AnimationVid
    },
    {
        heading: 'Sound design',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.',
        video: SoundDesignVid
    },
    {
        heading: 'Storybooks and Comics',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.',
        video: StoryVid
    },
]