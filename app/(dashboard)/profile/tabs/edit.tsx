import { Input } from "@/components/custom-ui/form";
import { useForm } from "react-hook-form";

const Edit = () => {
    const { register } = useForm();
    return (
        <form>
            <h2 className="my-4 text-base font-medium text-[#3B3B3B]">Educational Background</h2>

            <h2 className="text-base font-medium text-primary">First Degree</h2>

            <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                <div className="flex-1">
                    <Input required name="program" label="Program" placeholder="John" register={register} />
                </div>

                <div className="flex-1">
                    <Input required name="university" label="University" placeholder="John" register={register} />
                </div>
            </div>

            <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                <div className="flex-1">
                    <Input required name="year" label="Year" placeholder="John" register={register} />
                </div>
                <div className="flex-1"></div>
            </div>

            <h2 className="text-base font-medium text-primary">Second Degree</h2>

            <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                <div className="flex-1">
                    <Input required name="program" label="Program" placeholder="John" register={register} />
                </div>

                <div className="flex-1">
                    <Input required name="university" label="University" placeholder="John" register={register} />
                </div>
            </div>

            <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                <div className="flex-1">
                    <Input required name="year" label="Year" placeholder="John" register={register} />
                </div>
                <div className="flex-1"></div>
            </div>

            <h2 className="text-base font-medium text-primary">Third Degree</h2>

            <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                <div className="flex-1">
                    <Input required name="program" label="Program" placeholder="John" register={register} />
                </div>

                <div className="flex-1">
                    <Input required name="university" label="University" placeholder="John" register={register} />
                </div>
            </div>

            <div className="my-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-8">
                <div className="flex-1">
                    <Input required name="year" label="Year" placeholder="John" register={register} />
                </div>
                <div className="flex-1"></div>
            </div>
        </form>
    );
};

export default Edit;
