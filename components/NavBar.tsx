import Image from 'next/image'

const NavBar = () => {
    return (
        <div className="sticky top-0 flex h-14 items-center justify-between bg-red-600 px-4 sm:px-10">
            {/* items */}
            <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-white p-1">
                    <div className="relative h-8 w-8 overflow-hidden">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="/img/telephone.png"
                            alt="tele"
                        />
                    </div>
                </div>
                {/* texts */}
                <div>
                    {/* text */}
                    <div>ORDER NOW!</div>
                    {/* text */}
                    <div></div>
                </div>
            </div>
            {/* items */}
            <div>center</div>
            {/* items */}
            <div>Right</div>
        </div>
    )
}

export default NavBar
