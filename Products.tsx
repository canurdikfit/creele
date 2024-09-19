import ReactFullpage from '@fullpage/react-fullpage';
import ProjectImage from './assets/images/project_image.png';
import OurProjects from './components/OurProjects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollRestoration } from 'react-router-dom';


export default function Products() {

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
                            {
                                ProjectContent.map((items, index) => {
                                    return (
                                        <div key={index} className='section'>
                                            <OurProjects
                                                type={items.type}
                                                heading={items.heading}
                                                content={items.content}
                                                projectUrl={items.projectUrl}
                                                image={items.image}
                                            />
                                            {
                                                ProjectContent.length - 1 === index && (<Footer />)
                                            }
                                        </div>
                                    )
                                })
                            }
                        </main>
                    );
                }}
            />
        </>
    )
}


const ProjectContent = [
    {
        type: '3D Short Film',
        heading: 'The satchel',
        content: 'A vigorous and compelling tale of African origin about two brothers fighting for the power to create a world using an all-powerful “Satchel”. A drama-filled, entertaining story sure to leave you at the edge of your screen! Taking you to the mystical lands of “The Satchel”',
        projectUrl: '3d-short-film',
        image: ProjectImage
    },
    {
        heading: 'SOPO',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit ',
        projectUrl: 'sopo',
        image: ProjectImage
    },
]