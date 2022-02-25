import Image from 'next/image'

const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-gray-800 mt-16">
            <div className="relative h-[200px] w-full">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src="/img/bg.png"
                    alt="logo"
                />
            </div>
            {/* item */}
            <div className="grid-cols-1" >
                {/* card */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-100" >Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                </div>
                {/* card */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-amber-500" >Find Out Restaurant</h2>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 " >Bola</span>
                        <span className="text-base font-semibold text-gray-100 " >Addise Abeba</span>
                        <span className="text-base font-semibold text-gray-100 " >0912222923</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 " >Bola</span>
                        <span className="text-base font-semibold text-gray-100 " >Addise Abeba</span>
                        <span className="text-base font-semibold text-gray-100 " >0912222923</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 " >Bola</span>
                        <span className="text-base font-semibold text-gray-100 " >Addise Abeba</span>
                        <span className="text-base font-semibold text-gray-100 " >0912222923</span>
                    </div>  
                </div>
                {/* card */}
                <div>
                    <h2 className="text-2xl font-bold text-amber-500" >Working Hours </h2>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 " >Monday Until Friday</span>
                        <span className="text-base font-semibold text-gray-100 " >2:00am - 6:00pm </span>
                    </div>  
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-100 " >Saturday and Sunday </span>
                        <span className="text-base font-semibold text-gray-100 " >6:00am - 6:00pm </span>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Footer
