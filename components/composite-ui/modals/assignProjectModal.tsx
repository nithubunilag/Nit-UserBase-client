import { Button, IBaseModalProps } from "@/components/custom-ui";
import { ModalLayout } from "@/components/custom-ui/modal-layout";

export const AssignProjectModal = (props: IBaseModalProps) => {
    const { modalTrigger,handleClose } = props;
    return (
        <ModalLayout showModal={modalTrigger} onClose={handleClose}>
            <div>
                <div className="p-20">
                    <h2 className="text-4xl font-bold text-secondary">Email Verification Succcesful!</h2>
                    <Button label="Log in" variant="contained" className="w-full !text-xl font-medium" />
                </div>

                <div className="mt-10 rounded-md bg-white py-4 shadow-md">
                    <div className="mb-5 border-b border-b-[#E5E5DF] pb-5 ">
                        <div className="mx-auto flex w-[95%] items-center justify-between">
                            <h2 className="text-lg font-medium text-black">Courses</h2>
                            <button className="text-base font-medium text-[#0A7E27] underline-offset-2 transition-all duration-200 ease-in-out hover:underline">
                                Add
                            </button>
                        </div>
                    </div>

                    <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                            <div>
                                <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                                <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                            </div>
                        </div>

                        <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                    </div>

                    <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                            <div>
                                <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                                <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                            </div>
                        </div>

                        <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                    </div>

                    <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                            <div>
                                <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                                <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                            </div>
                        </div>

                        <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                    </div>

                    <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                            <div>
                                <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                                <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                            </div>
                        </div>

                        <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                    </div>

                    <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                            <div>
                                <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                                <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                            </div>
                        </div>

                        <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};
