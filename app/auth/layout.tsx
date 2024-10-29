import { AuthSidebar } from "@/components/custom-ui/auth";
import { ICONS_DIR } from "@/utils/constants";
import Image from "next/image";

interface IAuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = async ({ children }: IAuthLayoutProps) => {
    return (
        <section className="block h-screen w-full flex-col overflow-y-auto bg-[#f6f7fd] md:flex-row md:overflow-hidden lg:flex">
            <div className="block lg:hidden">
                <div className="relative h-[250px] w-full">
                    <Image src={`${ICONS_DIR}/auth-header.svg`} alt="Auth Header Image" fill className="object-cover" />
                </div>
            </div>

            <div className="hidden flex-1 lg:block">
                <AuthSidebar />
            </div>

            <div className="md:h-full md:flex-1 md:overflow-y-auto">{children}</div>
        </section>
    );
};

export default AuthLayout;
