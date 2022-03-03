import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const router = useRouter()
    const handelClick = async () => {
        if (username && password) {
            await axios.post('http://localhost:3000/api/login', {
                username,
                password,
            })
            router.push('/admin')
        } else {
            setError(true)
        }
    }

    return (
        <div className="flex h-[calc(100vh_-_110px)] items-center justify-center">
            <div className="mb-4  flex h-[365px] w-[300px] flex-col justify-center rounded-xl bg-slate-600  px-8 pb-5  shadow-xl ">
                <div className="mb-4">
                    <label className=" mb-2 block text-sm font-bold text-white">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                        required={true}
                        className=" w-full appearance-none rounded border py-2 px-3 shadow"
                    />
                </div>
                <div className="mb-6">
                    <label className=" mb-2 block text-sm font-bold text-white">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="******************"
                        className="border-red  mb-3 w-full appearance-none rounded border py-2 px-3 shadow"
                    />
                </div>
                <button
                    onClick={handelClick}
                    className="bg-blue hover:bg-blue-dark transform rounded  border-none bg-slate-500 py-2 px-4 font-bold text-white shadow-md outline-none transition duration-300 hover:scale-105 active:scale-95"
                >
                    Sign In
                </button>
                {error && (
                    <span className="pt-4 text-center text-base font-semibold text-red-400 ">
                        Wrong credentials!
                    </span>
                )}
            </div>
        </div>
    )
}

export default Login
