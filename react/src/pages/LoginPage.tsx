import React from 'react'
import Login from '../components/Login'

export default function LoginPage() {
    return (
        <div className="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen">
            <div className="grid gap-8">
                <div
                    id="back-div"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
                >
                    <Login/>
                </div>
            </div>

        </div>
    )
}
