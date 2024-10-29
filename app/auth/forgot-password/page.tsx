"use client";
import { Button } from "@/components/custom-ui";
import { AuthHeader, SubHeader } from "@/components/custom-ui/auth";
import { FormError, Input } from "@/components/custom-ui/form";
import { NitdaLogo } from "@/public/icons";
import Link from "next/link";
import { useForgotPassword } from "./useForgotPassword";
import { ForgotPasswordModal } from "@/components/composite-ui/modals";

const ResetPassword = () => {
    const { form, onSubmit, error, loading, isSuccess } = useForgotPassword();

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = form;

    return (
        <div className="md:p-16">
            <ForgotPasswordModal modalTrigger={isSuccess} handleClose={() => {}} />

            <form onSubmit={handleSubmit(onSubmit)} className="container px-4 py-8">
                <div className="mb-8 md:mb-10">
                    {/* Displaying the logo using the Image component */}
                    <NitdaLogo width={150} height={70} className="mb-4" />

                    {/* Heading and subheading for the login section */}
                    <AuthHeader message="Forgot Password" />
                    <SubHeader message="Input your registered email just below this" />
                </div>

                <div className="mb-14">
                    <Input
                        required
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="johndoe@gmail.com"
                        register={register}
                        error={errors.email ? errors.email.message : undefined}
                    />
                </div>

                <FormError error={null} />

                <Button variant="contained" title="Submit" type="submit" className="w-full" loading={loading} />

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
