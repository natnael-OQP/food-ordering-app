import Image from 'next/image'

const NavBar = () => {
    return (
        <div className="sticky top-0 z-50 flex h-[70px] items-center justify-between bg-red-600 px-4 shadow-md md:px-5 xl:px-10">
            {/* left */}
            <div className="flex items-center space-x-4">
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white hover:shadow-xl">
                    <div className="relative m-[10px] h-8 w-8  overflow-hidden rounded-full  ">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/img/telephone.png"
                            alt="telephone"
                        />
                    </div>
                </div>
                <div>
                    <div className="text-sm font-normal text-white ">
                        ORDER NOW!
                    </div>
                    <div className="text-base font-bold text-white ">
                        0941248799
                    </div>
                </div>
            </div>
            {/* center */}
            <div className="hidden flex-grow md:inline-block">
                <ul className="hidden items-center  justify-center space-x-2 md:flex  xl:space-x-5 ">
                    <li className="listItem">HomePage</li>
                    <li className="listItem">Product</li>
                    <li className="listItem">Menu</li>
                    <div className="relative  h-14 w-36 overflow-hidden rounded-full ">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/img/logo.png"
                            alt="logo"
                        />
                    </div>

                    <li className="listItem">Events</li>
                    <li className="listItem">Blog</li>
                    <li className="listItem">Contact</li>
                </ul>
            </div>
            {/* right */}
            <div>
                <div className="relative  h-7 w-7  rounded-full ">
                    <Image
                        layout="fill"
                        className="m-1"
                        objectFit="contain"
                        src="/img/cart.png"
                        alt="cart"
                    />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-red-600">
                        3
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar
