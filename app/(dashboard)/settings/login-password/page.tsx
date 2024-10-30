"use client";
import { Button, Header } from "@/components/custom-ui";
import { Input } from "@/components/custom-ui/form";
import { useForm } from "react-hook-form";

const LoginPassword = () => {
    const { register } = useForm({});

    return (
        <main>
            <div className="mb-10">
                <Header message="Change Login Password" className="mb-2" />
                <p className="text-sm font-normal text-[#797979]">Change the Login password used to log in to your account </p>
            </div>

            <form>
                <div className="my-5 flex flex-col flex-wrap gap-x-4 gap-y-8 md:w-[50%]">
                    <div className="flex-1">
                        <Input
                            required
                            name="password"
                            label="Password"
                            register={register}
                            placeholder="Enter your Password"
                            inputClassname="bg-transparent"
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            required
                            name="confirm_password"
                            label="Confirm Password"
                            register={register}
                            placeholder="Confirm your Password"
                            inputClassname="bg-transparent"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 md:w-[30%] ">
                    <Button label="Change Password" variant="contained" type="submit" className="w-full" />
                </div>
            </form>
        </main>
    );
};

export default LoginPassword;
