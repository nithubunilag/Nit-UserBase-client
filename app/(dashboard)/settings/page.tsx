"use client"
import { Button, Header } from "@/components/custom-ui"
import { useRouter } from "next/navigation"

const Settings = () => {
    const router = useRouter()

    return (
        <div>
            <Header message="Settings" className="mb-10" />

            <div className="flex flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[5px] bg-white px-6 py-3 shadow-md">
                    <div>
                        <h2 className="text-lg font-medium text-[#3B3B3B]">Login Password</h2>
                        <p className="text-base font-normal text-[#646464]">
                            Login password Is used to log in to your account
                        </p>
                    </div>
                    <Button
                        title={"Change"}
                        variant="contained"
                        onClick={() => router.push("/settings/login-password")}
                    />
                </div>

                <div className="flex w-full items-center justify-between rounded-[5px] bg-white px-6 py-3 shadow-md">
                    <div>
                        <h2 className="text-lg font-medium text-[#3B3B3B]">Two Step Authentication</h2>
                        <p className="text-base font-normal text-[#646464]">Disabled</p>
                    </div>
                    <Button
                        title={"Enable"}
                        variant="contained"
                        onClick={() => router.push("/settings/two-step-authentication")}
                    />
                </div>
            </div>
        </div>
    )
}

export default Settings
