"use client";

import { DropzoneModal } from "@/components/composite-ui/modals";
import { Button, CSVViewer } from "@/components/custom-ui";
import { Input, Select } from "@/components/custom-ui/form";
import { FormSkeletonLoader } from "@/components/custom-ui/formSkeletonLoader";
import { useCsvParser } from "@/hooks";
import { getDropdownValue } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCreateTeamMember } from "./useCreateTeamMember";

const CreateTeamMember = () => {
    const {
        data: { GenderSelectData, DepartmentSelectData, EducationLevelSelectData, RoleSelectData },
        form,
        onSubmit,
        pageLoading,
        submitting,
    } = useCreateTeamMember();

    const {
        register,
        formState: { errors },
        control,
    } = form;

    const router = useRouter();

    const [importCsv, setImportCsv] = useState(false);

    const { csvData, deleteCSV, handleFileUpload, csvDeleted } = useCsvParser();

    if (pageLoading) return <FormSkeletonLoader />;

    return (
        <div className="animate-fade-in mx-auto w-[95%] max-w-[1500px]">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-primary-dark text-2xl font-semibold">Create Team Member</h2>

                    <p className="my-2 text-base font-medium text-[#646464]">Input the correct personal details in the fields below;</p>
                </div>

                <Button label="Import CSV" variant="outlined" onClick={() => setImportCsv(true)} />
            </div>

            <form className="mt-7" onSubmit={onSubmit}>
                <h2 className="text-xl font-medium text-black">Personal Details</h2>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <Input
                            required
                            name="fullName"
                            label="Full Name"
                            register={register}
                            placeholder="John Doe"
                            error={errors?.fullName ? errors.fullName.message : undefined}
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            required
                            name="emailAddress"
                            type="email"
                            label="Email Address"
                            register={register}
                            placeholder="johndoe@gmail.com"
                            error={errors.emailAddress ? errors.emailAddress.message : undefined}
                        />
                    </div>
                </div>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <Controller
                            control={control}
                            name="gender"
                            render={({ field: { onChange, value, onBlur } }) => (
                                <Select
                                    name="gender"
                                    label="Gender"
                                    required
                                    onBlur={onBlur}
                                    options={GenderSelectData}
                                    initialValue={getDropdownValue(GenderSelectData, value)}
                                    onItemClick={(data) => {
                                        onChange(data.value);
                                    }}
                                />
                            )}
                        />
                    </div>

                    <div className="flex-1">
                        <Controller
                            control={control}
                            name="roleId"
                            render={({ field: { onChange, value, onBlur } }) => (
                                <Select
                                    name="role"
                                    label="Role"
                                    required
                                    onBlur={onBlur}
                                    options={RoleSelectData}
                                    initialValue={getDropdownValue(RoleSelectData, value)}
                                    onItemClick={(data) => {
                                        onChange(data.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <Controller
                            control={control}
                            name="departmentId"
                            render={({ field: { onChange, value, onBlur } }) => (
                                <Select
                                    name="department"
                                    label="Department"
                                    required
                                    onBlur={onBlur}
                                    options={DepartmentSelectData}
                                    initialValue={getDropdownValue(DepartmentSelectData, value)}
                                    onItemClick={(data) => {
                                        onChange(data.value);
                                    }}
                                />
                            )}
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            required
                            type="date"
                            name="dateOfBirth"
                            label="Date of Birth"
                            register={register}
                            placeholder="Select a date"
                            error={errors.dateOfBirth ? errors.dateOfBirth.message : undefined}
                        />
                    </div>
                </div>

                <h2 className="text-xl font-medium text-black">Additional Information</h2>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <span className={` mb-2  !flex items-center gap-[1px] text-sm font-medium text-[#272727] md:mb-3 md:text-base`}>
                            Phone Number
                        </span>

                        <Controller
                            control={control}
                            name="phoneNumber"
                            render={({ field: { onChange, value, onBlur } }) => (
                                <PhoneInput
                                    country={"us"}
                                    value={value}
                                    onChange={(phone) => onChange(phone)}
                                    containerClass="w-full"
                                    inputClass="w-full !text-sm md:!text-base !font-normal"
                                    inputProps={{
                                        name: "phone_number",
                                        autoFocus: true,
                                    }}
                                />
                            )}
                        />
                    </div>

                    <div className="flex-1">
                        <span className={` mb-2  !flex items-center gap-[1px] text-sm font-medium text-[#272727] md:mb-3 md:text-base`}>
                            Emergency Contact Number
                        </span>

                        <Controller
                            control={control}
                            name="emergencyContact"
                            render={({ field: { onChange, value, onBlur } }) => (
                                <PhoneInput
                                    country={"us"}
                                    value={value}
                                    onChange={(phone) => onChange(phone)}
                                    containerClass="w-full"
                                    inputClass="w-full !text-sm md:!text-base !font-normal"
                                    inputProps={{
                                        name: "emergencyContact",
                                        autoFocus: true,
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <Input
                            name="currentAddress"
                            label="Current Address"
                            register={register}
                            placeholder="123, Main Street, Lagos, Nigeria"
                            error={errors.currentAddress ? errors.currentAddress.message : undefined}
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            name="permanentAddress"
                            label="Permanent Address"
                            register={register}
                            placeholder="123, Main Street, Lagos, Nigeria"
                            error={errors.permanentAddress ? errors.permanentAddress.message : undefined}
                        />
                    </div>
                </div>

                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <Input
                            name="linkedinProfile"
                            label="Linkedin Profile"
                            register={register}
                            placeholder="https://www.linkedin.com/in/username"
                            error={errors.linkedinProfile ? errors.linkedinProfile.message : undefined}
                        />
                    </div>

                    <div className="flex-1">
                        <Controller
                            control={control}
                            name="educationLevel"
                            render={({ field: { onChange, value, onBlur } }) => (
                                <Select
                                    name="educationLevel"
                                    label="Educational Level"
                                    onBlur={onBlur}
                                    options={EducationLevelSelectData}
                                    initialValue={getDropdownValue(EducationLevelSelectData, value)}
                                    onItemClick={(data) => {
                                        onChange(data.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="my-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex items-center gap-3">
                        <Button label="Back" variant="outlined" onClick={() => router.back()} />

                        <Button label="Submit" variant="contained" type="submit" loading={submitting} />
                    </div>
                </div>
            </form>

            <DropzoneModal
                header={"Upload CSV"}
                modalTrigger={importCsv}
                handleClose={() => setImportCsv(false)}
                handleInputChange={handleFileUpload}
                fileDeleted={csvDeleted}
                accept={{
                    "text/*": [".csv"],
                }}
            >
                <div className="mb-4 block px-3">
                    <CSVViewer csvData={csvData} />
                </div>

                <div className=" items- flex justify-between">
                    <Button variant="outlined" label="Delete" />
                    <Button variant="contained" label="Submit" />
                </div>
            </DropzoneModal>
        </div>
    );
};

export default CreateTeamMember;
