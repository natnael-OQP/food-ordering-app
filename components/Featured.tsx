import Image from 'next/image'
import { useState } from 'react'

const Featured = () => {
    const [index, setIndex] = useState<number>(0)
    // slide images
    const image = [
        '/img/featured.png',
        '/img/featured2.png',
        '/img/featured3.png',
    ]

    const leftArrowHandler = () => {
        setIndex(index !== 0 ? index - 1 : image.length - 1)
    }

    const rightArrowHandler = () => {
        setIndex(index !== image.length - 1 ? index + 1 : 0)
    }

    return (
        <div className="relative flex h-[40vh] w-full   bg-red-600  md:h-[calc(100vh_-_70px)] ">
            {/* arrow left */}
            <div className="absolute left-2   top-[40%] cursor-pointer  md:left-4 xl:left-6">
                <div
                    onClick={leftArrowHandler}
                    className="relative z-40  h-12  w-4 cursor-pointer overflow-hidden rounded-full bg-red-600  md:h-16 md:w-7"
                >
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src="/img/arrowl.png"
                        alt="logo"
                    />
                </div>
            </div>
            {/* image container */}
            <div className="flex h-full w-[300vw]  flex-grow overflow-hidden">
                {image.map(
                    (ima, i) =>
                        i == index && (
                            <div
                                key={ima}
                                className="relative h-full  w-[100vw] transform-gpu overflow-hidden rounded-full transition-all duration-500 ease-linear  "
                            >
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src={ima}
                                    alt="logo"
                                />
                            </div>
                        )
                )}
            </div>
            {/* left arrow */}
            <div className="absolute   right-2 top-[40%] md:right-4 xl:right-6">
                <div
                    onClick={rightArrowHandler}
                    className=":h-16 relative  z-40  h-12 w-4 cursor-pointer overflow-hidden rounded-full md:w-7"
                >
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src="/img/arrowr.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Featured
