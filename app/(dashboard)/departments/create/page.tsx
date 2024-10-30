"use client";

import { Button } from "@/components/custom-ui";
import { Input } from "@/components/custom-ui/form";
import { useRouter } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import { useDepartment } from "./useDepartment";

const CreateDepartment = () => {
    const { form, onSubmit, submitting } = useDepartment();

    const {
        register,
        formState: { errors },
    } = form;

    const router = useRouter();

    return (
        <div className="animate-fade-in mx-auto w-[95%] max-w-[1500px]">
            <h2 className="text-2xl font-semibold text-secondary">Create Department</h2>

            <p className="my-2 text-base font-medium text-[#646464]">Input the correct details in the fields below;</p>

            <form className="mt-7" onSubmit={onSubmit}>
                <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                    <div className="flex-1">
                        <Input
                            required
                            name="name"
                            label="Department Name"
                            register={register}
                            placeholder="Frontend Development"
                            error={errors?.name ? errors.name.message : undefined}
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
        </div>
    );
};

export default CreateDepartment;
