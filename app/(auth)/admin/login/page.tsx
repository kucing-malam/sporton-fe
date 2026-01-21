"use client";

import Button from "@/app/(landing)/components/ui/button"
import { login } from "@/app/services/auth.services";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            router.push("/admin/products")
        }
    }, [router])

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const res = await login({ email, password })
            if (res.token) {
                router.push("/admin/products")
            }
        } catch (error: any) {
            setErrorMessage(error.message || "Something went wrong, please try again later.");
            console.log(errorMessage)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="bg-[#F7F9FA] w-full h-screen flex justify-center items-center">
            <div className="w-136 bg-white rounded-xl border-t-6 border-primary p-12 filter-backdrop">
                <Image
                    src="/images/logo-admin.svg"
                    width={304}
                    height={51}
                    alt="logo admin"
                    className="mx-auto mb-5"
                />
                <p className="opacity-50 text-sm text-center mb-8">Enter your credential to access the dashboard</p>
                {
                    errorMessage && (<div className="my-3 py-1 px-3 bg-primary-light border-primary border rounded-md text-primary text-sm">
                        {errorMessage}
                    </div>)
                }
                <div className="flex-col flex gap-4 w-full input-group-admin">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="rounded-lg!"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-12">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="**********"
                            className="rounded-lg!"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button onClick={handleLogin} className="rounded-lg! w-full mb-10">
                    {isLoading ? "Signing in ...." : "Sign In"}
                </Button>
            </div>
        </main>
    )
}

export default LoginPage