"use client";

import { Button } from "@/components/custom-ui";
import { ResetPasswordModal } from "@/components/composite-ui/modals";
import { AuthHeader, SubHeader } from "@/components/custom-ui/auth";
import { FormError, Input } from "@/components/custom-ui/form";
import { IMAGE_DIR } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useResetPassword } from "./useResetPassword";
import { NitdaLogo } from "@/public/icons";

const ResetPassword = () => {
    // State to manage password visibility
    const [secure, setSecure] = useState(true);

    // Memoized password icon component to toggle password visibility
    const passwordIcon = useMemo(() => {
        return (
            <div className="my-auto pe-4" onClick={() => setSecure(!secure)}>
                {secure ? <FiEye /> : <FiEyeOff />}
            </div>
        );
    }, [secure, setSecure]);

    const { form, onSubmit, error, loading, isSuccess } = useResetPassword();

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = form;

    return (
        <div className="md:p-16">
            <ResetPasswordModal modalTrigger={isSuccess} handleClose={() => {}} />

            <form onSubmit={handleSubmit(onSubmit)} className="container px-4 py-8">
                <div className="mb-8 md:mb-10">
                    {/* Displaying the logo using the Image component */}
                    <NitdaLogo width={150} height={70} className="mb-4" />

                    {/* Heading and subheading for the login section */}
                    <AuthHeader message="Password Reset" />
                    <SubHeader message="Make sure you fill in password that is secure and easy to remember" />
                </div>

                <div className="mb-8">
                    <Input
                        required
                        name="password"
                        label="Password"
                        register={register}
                        prefixIcon={passwordIcon}
                        type={secure ? "password" : "text"}
                        placeholder="********************************"
                        error={errors.password ? errors.password.message : undefined}
                    />
                </div>

                <div className="mb-8">
                    <Input
                        required
                        register={register}
                        name="confirm_password"
                        label="Confirm Password"
                        prefixIcon={passwordIcon}
                        type={secure ? "password" : "text"}
                        placeholder="********************************"
                        error={errors.confirm_password ? errors.confirm_password.message : undefined}
                    />
                </div>

                <FormError error={error()} />

                <Button variant="contained" title="Submit" className="w-full" type="submit" loading={loading} />

                <div className="mt-3">
                    <span className="inline-block w-full text-center  text-sm font-medium text-[#A1A1A1]">
                        Don’t have an account?{" "}
                        <Link className="text-primary" href={"/auth/signup"}>
                            Sign Up
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
