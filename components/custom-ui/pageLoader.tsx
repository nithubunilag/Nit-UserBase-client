import { getAsset } from "@/utils";
import Image from "next/image";

export const PageLoader = () => {
    return (
        <div className="z-[8] flex flex-col h-screen w-screen items-center justify-center bg-transparent">
            <Image
                src={getAsset("nitprofile_logo.png", "images")}
                alt="Logo"
                width={250}
                height={250}
                className="h-auto animate-[logo-spin_1.75s_alternate_infinite]"
                priority
            />
        </div>
    );
};
