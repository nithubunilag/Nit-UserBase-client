import { PrivateRoute } from "@/components/custom-ui";
import { AuthSidebar } from "@/components/custom-ui/auth";
import { ICONS_DIR, ROUTES } from "@/utils/constants";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

interface IAuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = async ({ children }: IAuthLayoutProps) => {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken");

    if (token) return redirect(ROUTES.home.HOME);

    return (
        <PrivateRoute require="no-auth" token={token}>
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
        </PrivateRoute>
    );
};

export default AuthLayout;
