import RectangleBtn from './../assets/artifacts/rectangular_btn.png';

interface Loader {
    onLoad: () => void
    loading: boolean
}

export default function Loading(props: Loader) {
    return (
        <section className={`pb-52 items-end fixed inset-0 h-screen ${props.loading ? '' : 'opacity-0'} loading_screen bg-black transition-opacity ease-linear duration-1000`}>
            <div className="relative z-10">
                <button
                    onClick={props.onLoad}
                    className='relative xl:h-28 xl:w-52 md:h-20 md:w-40 h-16 w-36 -rotate-6'>
                    <img
                        src={RectangleBtn}
                        alt="Button"
                        sizes="100%"
                        className='btn_designed'

                    />
                    <h6 className='relative z-10 xl:text-3xl md:text-2xl text-xl btn_text_border'>Explore</h6>
                </button>
            </div>
        </section>
    )
}
