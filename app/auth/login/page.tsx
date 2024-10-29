"use client";

import { Button } from "@/components/custom-ui";
import { AuthHeader, SubHeader } from "@/components/custom-ui/auth";
import { Input } from "@/components/custom-ui/form";
import { NitdaLogo } from "@/public/icons";
import Link from "next/link";
import { useLogin } from "./useLogin";

const Login = () => {
    const { loginForm, onSubmit, logging_in, passwordIcon, passwordVisible } = useLogin();

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = loginForm;

    return (
        <div className="md:p-16">
            <form onSubmit={handleSubmit(onSubmit)} className="container px-4 py-8">
                <div className="mb-8 md:mb-10">
                    <NitdaLogo width={150} height={70} className="mb-4" />

                    <AuthHeader message="Welcome Back" />

                    <SubHeader message="Fill in the correct form below:" />
                </div>

                <div className="mb-8">
                    <Input
                        required
                        name="emailAddress"
                        type="email"
                        label="Email Address"
                        register={register}
                        error={errors.emailAddress ? errors.emailAddress.message : undefined}
                    />
                </div>

                <div className="mb-14">
                    <Input
                        required
                        name="password"
                        label="Password"
                        register={register}
                        prefixIcon={passwordIcon}
                        type={passwordVisible ? "password" : "text"}
                        error={errors.password ? errors.password.message : undefined}
                    />

                    <Link
                        className="text-secondary mt-2 inline-block text-base font-medium underline underline-offset-4"
                        href={"/auth/forgot-password"}
                    >
                        Forget Password?
                    </Link>
                </div>

                <Button variant="contained" title="Log in" className="w-full" type="submit" loading={logging_in} />

                <div className="mt-3">
                    <span className="mt-3 inline-block w-full text-center text-sm font-medium text-[#A1A1A1] md:text-base">
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

export default Login;
