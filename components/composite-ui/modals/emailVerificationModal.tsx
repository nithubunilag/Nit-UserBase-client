import { Button, IBaseModalProps, ModalLayout } from "@/components/custom-ui";

export const EmailVerificationModal = (props: IBaseModalProps) => {
    const { modalTrigger } = props;
    return (
        <ModalLayout modalTrigger={modalTrigger} onClose={() => {}}>
            <div className="p-20">
                <h2 className="text-secondary text-4xl font-bold">Email Verification Succcesful!</h2>
                <Button label="Log in" variant="contained" className="w-full !text-xl font-medium" />
            </div>
        </ModalLayout>
    );
};
