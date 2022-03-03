import React, { Dispatch, FC, SetStateAction } from 'react'

interface Props {
    setClose: Dispatch<SetStateAction<boolean>>
}
const AddProduct: FC<Props> = ({ setClose }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen  w-full  items-center justify-center bg-opacity-60 bg-clip-padding backdrop-blur-xl backdrop-filter">
            <div className="h-[400px] w-[320px] bg-slate-100"></div>
            <div onClick={() => setClose(false)} className="cursor-pointer">
                X
            </div>
        </div>
    )
}

export default AddProduct
