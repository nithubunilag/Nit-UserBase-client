"use client";

import { lato } from "@/fonts";
import Image from "next/image";
import { useRef } from "react";
import { ICONS_DIR } from "../../../../utils";
import { AnimatedText } from "./animation";
import "./styles.scss";

export const AuthSidebar = () => {
    const ball1Ref = useRef<HTMLImageElement>(null);
    const ball2Ref = useRef<HTMLImageElement>(null);
    const ball3Ref = useRef<HTMLImageElement>(null);
    const ball4Ref = useRef<HTMLImageElement>(null);

    const ball1Movement = () => {
        setTimeout(() => {
            if (!ball1Ref.current) return;
            ball1Ref.current.style.left = "85%";
            ball1Ref.current.style.top = "15%";
        }, 2000);

        setTimeout(() => {
            if (!ball1Ref.current) return;
            ball1Ref.current.style.left = "80%";
            ball1Ref.current.style.top = "85%";
        }, 4000);

        setTimeout(() => {
            if (!ball1Ref.current) return;
            ball1Ref.current.style.left = "-8%";
            ball1Ref.current.style.top = "85%";
        }, 6000);

        setTimeout(() => {
            if (!ball1Ref.current) return;
            ball1Ref.current.style.left = "-10%";
            ball1Ref.current.style.top = "5%";
        }, 8000);
    };

    const ball2Movement = () => {
        setTimeout(() => {
            if (!ball2Ref.current) return;
            ball2Ref.current.style.right = "90%";
            ball2Ref.current.style.top = "10%";
        }, 2000);

        setTimeout(() => {
            if (!ball2Ref.current) return;
            ball2Ref.current.style.right = "-5%";
            ball2Ref.current.style.top = "10%";
        }, 4000);

        setTimeout(() => {
            if (!ball2Ref.current) return;
            ball2Ref.current.style.right = "-5%";
            ball2Ref.current.style.top = "-1%";
        }, 8000);
    };

    const ball3Movement = () => {
        setTimeout(() => {
            if (!ball3Ref.current) return;
            ball3Ref.current.style.bottom = "90%";
            ball3Ref.current.style.right = "90%";
        }, 4000);

        setTimeout(() => {
            if (!ball3Ref.current) return;
            ball3Ref.current.style.bottom = "-2%";
            ball3Ref.current.style.right = "-2%";
        }, 8000);
    };

    const ball4Movement = () => {
        setTimeout(() => {
            if (!ball4Ref.current) return;
            ball4Ref.current.style.left = "90%";
            ball4Ref.current.style.bottom = "-2%";
        }, 6000);

        setTimeout(() => {
            if (!ball4Ref.current) return;
            ball4Ref.current.style.left = "-3%";
            ball4Ref.current.style.bottom = "-2%";
        }, 8000);
    };

    const startAnimation = () => {
        ball1Movement();
        ball2Movement();
        ball3Movement();
        ball4Movement();

        setTimeout(() => {
            startAnimation();
        }, 10000);
    };

    // useEffect(() => {
    //   startAnimation();
    // }, []);

    return (
        <div className="auth_sidebar p-20">
            <Image src={`${ICONS_DIR}/auth_icon-1.svg`} alt="Auth Ball 1" width={170} height={170} className="auth_ball auth_ball-1" ref={ball1Ref} />

            <Image width={100} height={100} ref={ball2Ref} alt="Auth Ball 3" className="auth_ball auth_ball-2" src={`${ICONS_DIR}/auth_icon-3.svg`} />

            <Image src={`${ICONS_DIR}/auth_icon-2.svg`} alt="Auth Ball 2" width={100} height={100} ref={ball3Ref} className="auth_ball auth_ball-3" />

            <Image src={`${ICONS_DIR}/auth_icon-4.svg`} alt="Auth Ball 4" ref={ball4Ref} width={100} height={100} className="auth_ball auth_ball-4" />

            <div className={`auth_sidebar_text_container flex h-full flex-col items-center justify-center text-left ${lato.className}`}>
                <h4 className="mb-4 w-full text-4xl font-semibold text-white ">
                    <AnimatedText
                        text={[
                            "“Nithub na place wey tech talents fit gather to learn, grow, and build new ideas wey go fit change di industry“.",
                            "“We help young people sharpen their skills for tech and help them to be able to stand well as professionals.”.",
                            `“Through our Startup Incubation program, we dey give support to startups wey dey try develop innovative solutions.".`,
                            `“Nithub dey provide all di tools and mentorship wey entrepreneurs need to make their ideas reality.".`,
                            `“We dey bridge di gap between tech talents, industries, and investors to drive collaboration and innovation.".`,
                            `“For here, we dey believe say every idea fit grow if e get correct support and guidance.".`,
                            `“Di aim na to make sure say di younger generation fit enter tech world and turn to di next big tech experts.".`,
                            `“With our Talent Upskilling program, we dey train people make dem sabi well-well for tech areas like software development, data analysis, and product design.".`,
                            `“We dey help people make di right connections to grow their career and business.".`,
                            `“Nithub dey accelerate startup growth by providing access to a strong network and necessary resources.".`,
                            `“We dey create opportunities for tech talents to showcase their skills and get recognized.".`,
                            `“Our goal is to empower individuals and communities through technology and innovation.".`,
                            `“We dey work with diverse teams to build inclusive solutions that impact lives.".`,
                            `“Nithub dey support diversity and inclusion in the tech industry by providing equal opportunities for all.".`,
                            `“We dey encourage creativity and innovation by providing a supportive environment for new ideas.".`,
                            `“Our mission is to transform ideas into reality and drive positive change through technology.".`,
                            `“Our mission na to make groundbreaking innovations happen, wey go improve Nigeria’s digital economy and impact di world.".`,
                        ]}
                    />
                </h4>

                <span className="w-full text-xl font-medium">Collaborate. Innovate. Create</span>
            </div>
        </div>
    );
};
