import VideoPlayer from './ui/VideoPlayer';

export default function Video() {
    return (
        <section className='flex-row items-center xl:items-end md:pb-10 padding text-center section video'>
            <div className="relative z-10 space-y-2">
                <h3>Spotlight on creele studios</h3>

                <VideoPlayer />

                <p className='max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. </p>
            </div>
        </section>
    )
}

