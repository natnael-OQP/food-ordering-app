import Image from 'next/image'

const Footer = () => {
    return (
        <div className="mt-16 grid grid-cols-1 gap-y-8 bg-gray-800   sm:flex-row md:grid-cols-2 md:gap-x-6">
            <div className="relative h-[350px]  w-full bg-slate-300  md:h-[540px] xl:h-[600px]">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="/img/bg.png"
                    alt="logo"
                />
            </div>
            {/* item */}
            <div className="grid grid-cols-1  gap-y-5 md:gap-x-4 xl:grid-cols-3">
                {/* card */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h2>
                </div>
                {/* card */}
                <div className="flex flex-col space-y-3">
                    <h2 className="text-2xl font-bold text-amber-500">
                        Find Out Restaurant
                    </h2>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 ">
                            Bola
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            Addise Abeba
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            0912222923
                        </span>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-base font-semibold text-gray-100 ">
                            Bola
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            Addise Abeba
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            0912222923
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 ">
                            Bola
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            Addise Abeba
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            0912222923
                        </span>
                    </div>
                </div>
                {/* card */}
                <div className="space-y-3 pb-6 md:pb-0">
                    <h2 className="text-2xl font-bold text-amber-500">
                        Working Hours{' '}
                    </h2>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 ">
                            Monday Until Friday
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            2:00am - 6:00pm{' '}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 ">
                            Saturday and Sunday{' '}
                        </span>
                        <span className="text-base font-semibold text-gray-100 ">
                            6:00am - 6:00pm{' '}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
