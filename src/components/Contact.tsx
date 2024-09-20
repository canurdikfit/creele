import FillBackground from './../assets/images/fill_background_two_with_shadow.png';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactForm from './ui/ContactForm';

export default function Contact(props: { page?: boolean }) {
    return (
        <section className='section pb-10'>
            {props.page &&
                <Navbar />}
            <img
                src={FillBackground}
                alt='Background'
                sizes='100%'
                className='z-0 object-conver object-top absolute h-full w-full inset-0 opacity-70'
            />
            <div className={`relative ${props.page && 'mt-[20vh]'} z-10 w-full`}>
                <ContactForm info={props.page} />
                <Footer />
            </div>
        </section>
    )
}
