import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LiaBezierCurveSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function Career() {
    return (
        <section className='section about_sections'>
            <div className="padding pt-32 md:pt-10 pb-16">
                <h2 className='text-center'>CAREERS</h2>
                <p className='md:text-xl xl:text-2xl opacity-80 text-center'>
                    It takes great people to create greatness so we need you! Join us.
                </p>
                <div className="grid gap-y-4 gap-x-8 md:grid-cols-2 xl:grid-cols-3 mt-10 mb-20">
                    {
                        AvailableCareer.map((items, index) => {
                            return (
                                <div key={index}
                                    className="bg-[#2D2D37] px-5 py-6 rounded-xl flex items-start gap-5">
                                    <div className="h-24 w-24 shrink-0 rounded-xl bg-[#24242B] flex items-center justify-center">
                                        <items.icon className="text-5xl" />
                                    </div>
                                    <div >
                                        <h5 className="text-2xl">{items.label}</h5>
                                        <p className="text-sm opacity-80">{items.requirements}</p>
                                        <Link to="" className="flex items-center gap-2 justify-end hover:text-[#FBD40D]">
                                            <span>View</span>
                                            <IoArrowForwardCircleOutline className="text-lg" />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


const AvailableCareer = [
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
    {
        label: 'BRAND DESIGNER',
        requirements: 'Lorem ipsum dolor sit amet consectetur.',
        icon: LiaBezierCurveSolid,
        hash: ''
    },
]