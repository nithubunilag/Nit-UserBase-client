"use client";
import { Button, Header } from "@/components/custom-ui";
import { Input, Radio } from "@/components/custom-ui/form";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CreateAdmin = () => {
    const { register, control } = useForm({});

    const [role, setRole] = useState<"group" | "policy">("group");

    return (
        <main>
            <div className="mb-10">
                <Header message="Add User" className="mb-2" />
                <p className="text-sm font-normal text-[#797979]">
                    Admins will have access to some certain roles and have control over certain functionality.
                </p>
            </div>

            <form>
                <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                    <div className="flex-1">
                        <Input
                            required
                            name="first_name"
                            label="First Name"
                            register={register}
                            placeholder="Enter your First Name"
                            inputClassname="bg-transparent"
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            required
                            name="last_name"
                            label="Last Name"
                            register={register}
                            placeholder="Enter your Last Name"
                            inputClassname="bg-transparent"
                        />
                    </div>
                </div>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                    <div className="flex-1">
                        <Input
                            required
                            type="email"
                            name="email"
                            label="Email"
                            register={register}
                            placeholder="Enter your Email Address"
                            inputClassname="bg-transparent"
                        />
                    </div>

                    <div className="flex-1">
                        <span className={` mb-2  !flex items-center gap-[1px] text-sm font-medium text-[#272727] md:mb-3 md:text-base`}>
                            Phone Number
                            <p className={`text-sm leading-none text-[#EF233C] md:text-base`}>*</p>
                        </span>

                        <Controller
                            control={control}
                            name="phone_number"
                            render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                    country={"us"}
                                    value={value}
                                    onChange={(phone) => onChange(phone)}
                                    containerClass="w-full"
                                    inputClass="w-full !text-sm md:!text-base !font-normal !bg-transparent"
                                    inputProps={{
                                        name: "phone_number",
                                        required: true,
                                        autoFocus: true,
                                    }}
                                />
                            )}
                        />

                        {/* <Input
                            required
                            name="middle_name"
                            label="Middle Name"
                            register={register}
                            placeholder="John"
                            inputClassname="bg-transparent"
                        /> */}
                    </div>
                </div>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                    <div className="flex-1 ">
                        <div
                            onClick={() => setRole("group")}
                            className={`cursor-pointer rounded-lg border py-7 transition-all duration-300 ease-in-out ${role === "group" ? "border-secondary" : "border-[#A1A1A1]"}`}
                        >
                            <div className="mx-auto flex items-start gap-x-4 md:w-[70%]">
                                <Radio
                                    checked={role === "group"}
                                    onChange={() => setRole("group")}
                                    className="checked:border-secondary h-[24px] w-[24px] md:h-[32px] md:w-[32px] md:checked:border-[9px]"
                                />

                                <div>
                                    <h2 className="mb-2 text-lg font-medium text-[#3B3B3B]">Add user to group</h2>
                                    <p className="text-base font-normal text-[#797979]">
                                        Add user to an existing group or create a new user. Groups are created to manage users functionality according
                                        to their job description
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 ">
                        <div
                            onClick={() => setRole("policy")}
                            className={`cursor-pointer rounded-lg border py-7 transition-all duration-300 ease-in-out ${role === "policy" ? "border-secondary" : "border-[#A1A1A1]"}`}
                        >
                            <div className="mx-auto flex items-start gap-x-4 md:w-[70%]">
                                <Radio
                                    checked={role === "policy"}
                                    onChange={() => setRole("policy")}
                                    className="checked:border-secondary h-[24px] w-[24px] md:h-[32px] md:w-[32px] md:checked:border-[9px]"
                                />

                                <div>
                                    <h2 className="mb-2 text-lg font-medium text-[#3B3B3B]">Attach permission directly</h2>
                                    <p className="text-base font-normal text-[#797979]">
                                        Attach a policy to a user directly. Although it’s easier to add users to a group and attach policies to that
                                        group
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-[40%] items-center gap-3 ">
                    <Button title="Next" variant="contained" type="submit" className="w-full" />
                    <Button title="Cancel" variant="outlined" className="w-full" />
                </div>
            </form>
        </main>
    );
};

export default CreateAdmin;
