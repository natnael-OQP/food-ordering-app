import React, { ChangeEventHandler, FC } from 'react'

interface Props {
    name: string
    price: number
    handelChange: React.ChangeEventHandler<HTMLInputElement>
}

const CheckBox: FC<Props> = ({ name, price, handelChange }) => {
    return (
        <div className="flex items-center">
            <input className="h-5 w-5" type="checkbox" id={name} name={name} />
            <label
                className="ml-2 cursor-pointer select-none text-base font-semibold capitalize text-gray-700"
                htmlFor={name}
            >
                {name}
            </label>
        </div>
    )
}

export default CheckBox
