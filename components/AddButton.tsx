import React, { Dispatch, FC, SetStateAction } from 'react'

interface Props {
    setClose: Dispatch<SetStateAction<boolean>>
}

const AddButton: FC<Props> = ({ setClose }) => {
    return (
        <div className="w-full bg-gray-50 ">
            <button
                onClick={() => setClose(true)}
                className="mt-2 ml-2 rounded-sm border-none bg-red-500 px-4 py-[6px] text-sm font-semibold text-gray-100 shadow-sm  transition duration-300 hover:scale-105 active:scale-95"
            >
                Add New Pizza
            </button>
        </div>
    )
}

export default AddButton
