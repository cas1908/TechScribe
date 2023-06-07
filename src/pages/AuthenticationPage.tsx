import { useState } from "react"
import { Login, Register } from "../components/Authentication"

type User ={
    email: string,
    password: string
}

export const AuthLayout = () => {
    const [user, setuser] = useState<User>({} as User)
    return (
        <div>
            <div className="flex h-[1024px]">
                <section className="relative w-2/6 px-5 h-full">
                    <div className="absolute top-[30%]">
                        <h2 className="text-3xl font-bold mb-8 text-center">CHATTER</h2>
                        <p className="text-lg">Unleash the power of Words, Connect with Like-minded Readers and Writers</p>
                    </div>

                </section>
                <section className=" relative w-4/6 flex flex-col items-center">
                   { user? <Login /> : <Register /> }

                </section>
            </div>
        </div>
    )
}