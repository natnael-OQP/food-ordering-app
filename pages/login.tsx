import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const router = useRouter()

    const handelClick = async () => {}

    return (
        <div className="flex h-[calc(100vh_-_110px)] items-center justify-center">
            <div className="mb-4  flex h-[350px] w-[300px] flex-col justify-center rounded bg-slate-600  px-8 pb-10  shadow-xl ">
                <div className="mb-4">
                    <label className=" mb-2 block text-sm font-bold text-white">
                        Username
                    </label>
                    <input
                        className=" w-full appearance-none rounded border py-2 px-3 shadow"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-6">
                    <label className=" mb-2 block text-sm font-bold text-white">
                        Password
                    </label>
                    <input
                        className="border-red  mb-3 w-full appearance-none rounded border py-2 px-3 shadow"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <button className="bg-blue hover:bg-blue-dark transform rounded  border-none bg-slate-500 py-2 px-4 font-bold text-white shadow-md outline-none transition duration-300 hover:scale-105 active:scale-95">
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Login
