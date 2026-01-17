"use client";

import Button from "@/app/(landing)/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const {push} = useRouter();
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
                <div className="flex-col flex gap-4 w-full input-group-admin">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="rounded-lg!"
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
                        />
                    </div>
                </div>
                <Button onClick={() => push("/admin/products")} className="rounded-lg! w-full mb-10">Signup</Button>
            </div>
        </main>
    )
}

export default LoginPage