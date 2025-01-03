export const AdminsIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const { stroke } = props;

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M7.63338 9.05768C7.55005 9.04935 7.45005 9.04935 7.35838 9.05768C5.37505 8.99102 3.80005 7.36602 3.80005 5.36602C3.80005 3.32435 5.45005 1.66602 7.50005 1.66602C9.54172 1.66602 11.2 3.32435 11.2 5.36602C11.1917 7.36602 9.61671 8.99102 7.63338 9.05768Z"
                stroke={stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.675 3.33398C15.2916 3.33398 16.5917 4.64232 16.5917 6.25065C16.5917 7.82565 15.3417 9.10899 13.7833 9.16732C13.7167 9.15899 13.6417 9.15899 13.5667 9.16732"
                stroke={stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.4666 12.134C1.44993 13.484 1.44993 15.684 3.4666 17.0257C5.75827 18.559 9.5166 18.559 11.8083 17.0257C13.8249 15.6757 13.8249 13.4757 11.8083 12.134C9.52494 10.609 5.7666 10.609 3.4666 12.134Z"
                stroke={stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.2834 16.666C15.8834 16.541 16.4501 16.2993 16.9168 15.941C18.2168 14.966 18.2168 13.3577 16.9168 12.3827C16.4584 12.0327 15.9001 11.7993 15.3084 11.666"
                stroke={stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
