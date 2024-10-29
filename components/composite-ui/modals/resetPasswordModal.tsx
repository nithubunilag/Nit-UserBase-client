import { Button, IBaseModalProps, ModalLayout } from "@/components/custom-ui";
import { IMAGE_DIR } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ResetPasswordModal = (props: IBaseModalProps) => {
    const router = useRouter();

    return (
        <ModalLayout modalTrigger={props.modalTrigger} onClose={() => {}}>
            <div className=" px-8 py-10">
                <h2 className="text-secondary text-center text-3xl font-bold">Password Reset Successful!</h2>

                <Image src={`${IMAGE_DIR}/modal_image.png`} className="mx-auto my-8" alt="Modal Image" width={100} height={100} priority />
                <p className="mx-auto mb-5 text-center text-lg font-light text-[#4B4E61] md:w-[80%]">
                    Congratulations! Your password has been reset successfully
                </p>
                <Button title="Proceed to Login" variant="contained" className="w-full" onClick={() => router.push("/auth/login")} />
            </div>
        </ModalLayout>
    );
};
