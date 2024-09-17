import { HeadingOverlay } from './ui/HeadingOverlay';


export default function OurServices(props: {
    heading: string,
    content: string,
    image: any
}) {
    return (
        <section className='padding section about_sections'>
            <HeadingOverlay label='Our Services' />
            <div className="relative z-10 space-y-10">
                <h2 className='text-center'>Our Services</h2>
                <div className="grid md:grid-cols-5 items-center gap-10">
                    <div className="md:col-span-2 flex items-center md:justify-end justify-center overflow-visible">
                        <img
                            src={props.image}
                            sizes='100%'
                            alt="Art Works"
                            className='object-contain object-center h-full w-full max-w-sm max-h-72 md:max-h-full mx-auto' />
                    </div>
                    <div className="md:col-span-3 space-y-5 text-center md:text-left">
                        <h4 className='md:text-4xl text-2xl max-w-md'>{props.heading}</h4>
                        <p className='md:text-xl xl:text-2xl opacity-80 pb-3'>
                            {props.content}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
