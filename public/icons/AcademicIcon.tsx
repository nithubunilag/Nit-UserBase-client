export const AcademicIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const { stroke } = props;

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M8.37502 2.10873L3.35835 5.38373C1.75002 6.43373 1.75002 8.78373 3.35835 9.83373L8.37502 13.1087C9.27502 13.7004 10.7583 13.7004 11.6583 13.1087L16.65 9.83373C18.25 8.78373 18.25 6.44206 16.65 5.39206L11.6583 2.11706C10.7583 1.51706 9.27502 1.51706 8.37502 2.10873Z"
                stroke={stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.69168 10.9004L4.68335 14.8087C4.68335 15.8671 5.50002 17.0004 6.50002 17.3337L9.15835 18.2171C9.61668 18.3671 10.375 18.3671 10.8417 18.2171L13.5 17.3337C14.5 17.0004 15.3167 15.8671 15.3167 14.8087V10.9421"
                stroke={stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M17.8333 12.5V7.5" stroke={stroke ?? "#B1B1B1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
