import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "./components/Navbar";
import AboutStudio from './components/AboutStudio';
import Vision from './components/Vision';
import OurServices from './components/OurServices';
import ServiceImage from './assets/artifacts/services.png';
import Career from './components/Career';
import { useState } from 'react';

export default function About() {
    const [activeSection, setActiveSection] = useState({
        index: 0,
        origin: 0,
        directioin: '',
    });

    return (
        <>
            <Navbar
                activeIndex={activeSection.index}
                slideTOPass={0}
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
                onLeave={(origin, destination, direction) => {
                    setActiveSection({
                        index: destination.index,
                        origin: origin.index,
                        directioin: direction
                    });
                }}
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
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.'
    },
    {
        heading: 'Sound design',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.'
    },
    {
        heading: 'Storybooks and Comics',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.'
    },
]