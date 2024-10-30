import { lato } from "@/fonts";
import { CustomProvider } from "@/state_management";
import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
    title: "Nit Identity",
    description: "Nithub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <CustomProvider>{children}</CustomProvider>
            </body>
        </html>
    );
}
