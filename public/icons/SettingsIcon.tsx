import React from "react";

export const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke={props.stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.66675 10.7339V9.26718C1.66675 8.40052 2.37508 7.68385 3.25008 7.68385C4.75841 7.68385 5.37508 6.61718 4.61675 5.30885C4.18341 4.55885 4.44175 3.58385 5.20008 3.15052L6.64175 2.32552C7.30008 1.93385 8.15008 2.16718 8.54175 2.82552L8.63341 2.98385C9.38341 4.29218 10.6167 4.29218 11.3751 2.98385L11.4667 2.82552C11.8584 2.16718 12.7084 1.93385 13.3667 2.32552L14.8084 3.15052C15.5667 3.58385 15.8251 4.55885 15.3917 5.30885C14.6334 6.61718 15.2501 7.68385 16.7584 7.68385C17.6251 7.68385 18.3417 8.39218 18.3417 9.26718V10.7339C18.3417 11.6005 17.6334 12.3172 16.7584 12.3172C15.2501 12.3172 14.6334 13.3838 15.3917 14.6922C15.8251 15.4505 15.5667 16.4172 14.8084 16.8505L13.3667 17.6755C12.7084 18.0672 11.8584 17.8339 11.4667 17.1755L11.3751 17.0172C10.6251 15.7089 9.39175 15.7089 8.63341 17.0172L8.54175 17.1755C8.15008 17.8339 7.30008 18.0672 6.64175 17.6755L5.20008 16.8505C4.44175 16.4172 4.18341 15.4422 4.61675 14.6922C5.37508 13.3838 4.75841 12.3172 3.25008 12.3172C2.37508 12.3172 1.66675 11.6005 1.66675 10.7339Z"
                stroke={props.stroke ?? "#B1B1B1"}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
