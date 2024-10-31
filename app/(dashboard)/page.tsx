"use client";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS } from "@/utils/constants";
import { QUOTES } from "@/utils/quotes";
import { PeopleIcon } from "public/icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
        name: "Jan",
        uv: 0,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Feb",
        uv: 30000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Mar",
        uv: 58000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Apr",
        uv: 65000,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "May",
        uv: 64000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Jun",
        uv: 58000,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Jul",
        uv: 50000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Aug",
        uv: 40000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Sep",
        uv: 30000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Oct",
        uv: 50000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Nov",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Dec",
        uv: 100000,
        pv: 4300,
        amt: 2100,
    },
];

const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 100 },
];

const COLORS = ["#0093DD", "#03BFC0", "#F59BE9", "#9747FF", "#FFC263"];
const Home = () => {
    const { isLoading: fetchingProjects, data: activeProjects } = useQuery({
        queryKey: [CACHE_KEYS.PROJECT],
        queryFn: () => userService.getAllProjects({ status: "active" }),

        onError: (error: any) => {
            makeToast({
                message: "Error Retrieving Projects. Please Contact Support",
                type: "error",
                id: "project-error",
            });
        },
    });

    const getRandomQuotes = () => {
        const randomIndex = Math.floor(Math.random() * QUOTES.length);
        return QUOTES[randomIndex];
    };

    const getTimeBasedGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 0 && hour < 4) return "You no go like go sleep, You be winch";
        if (hour >= 4 && hour < 12) return "Ekaaro Chief 🙌🏽 🤲🏽";
        if (hour >= 12 && hour < 20) return "Senior Man, How your side?🧎🏽‍♂️ ";
        return "Omooooo, I wan go Sleep 😴😴";
    };

    const [addCourse, setAddCourse] = useState(false);
    return (
        <div className="animate__animated animate__fadeIn -mt-2 min-h-screen gap-4 ">
            <h2 className="mb-2 text-2xl font-medium ">{getTimeBasedGreeting()}</h2>
            <p className="mb-10 text-base font-normal text-[#646464]">{getRandomQuotes()}</p>

            <div className="flex items-center justify-between gap-2">
                <div
                    className="w-full rounded-[5px] py-10 pl-6"
                    style={{
                        background: "linear-gradient(190.89deg, #03BFC0 23.66%, #015A5A 100.18%)",
                    }}
                >
                    <div className="flex flex-col justify-between gap-2 text-white ">
                        <PeopleIcon />
                        <h2 className="text-base font-medium">Total Team Members</h2>
                        <span className="text-xl font-medium">1567</span>
                    </div>
                </div>

                <div
                    className="w-full rounded-[5px] bg-[#FFC263] py-10 pl-6"
                    style={{
                        background: "linear-gradient(190.89deg, #F4A832 23.66%, #D39431 96.18%)",
                    }}
                >
                    <div className="flex flex-col justify-between gap-2 text-white ">
                        <PeopleIcon />
                        <h2 className="text-base font-medium">Total Departments Students</h2>
                        <span className="text-xl font-medium">1567</span>
                    </div>
                </div>

                <div
                    className="w-full rounded-[5px] bg-[#F59BE9] py-10 pl-6"
                    style={{
                        background: "linear-gradient(190.89deg, #FF91F0 23.66%, #B966AE 96.18%)",
                    }}
                >
                    <div className="flex flex-col justify-between gap-2 text-white ">
                        <PeopleIcon />
                        <h2 className="text-base font-medium">Total Enrolled Students</h2>
                        <span className="text-xl font-medium">1567</span>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <h1 className="mb-5 text-2xl font-semibold text-black">Enrollment Tracking</h1>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#22C36B" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="my-10 rounded-md bg-white py-4 shadow-md">
                <div className="mb-5 border-b border-b-[#E5E5DF] pb-5 ">
                    <div className="mx-auto flex w-[95%] items-center justify-between">
                        <h2 className="text-lg font-medium text-black">Current Projects</h2>
                    </div>
                </div>

                {fetchingProjects && (
                    <>
                        {new Array(9).fill(0).map((_, index) => (
                            <div key={index} className="mx-auto mb-5 flex w-[95%] animate-pulse items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-[50px] w-[60px] rounded bg-gray-200" />
                                    <div>
                                        <div className="mb-2 h-4 w-32 rounded bg-gray-200" />
                                        <div className="h-3 w-48 rounded bg-gray-200" />
                                    </div>
                                </div>
                                <div className="h-4 w-16 rounded bg-gray-200" />
                            </div>
                        ))}
                    </>
                )}

                {!fetchingProjects &&
                    activeProjects?.data.slice(0, 10).map((project) => (
                        <div key={project.id} className="mx-auto mb-5 flex w-[95%] animate-fade-in items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                                <div>
                                    <h2 className="text-sm font-normal ">{project.name}</h2>
                                    <span className="text-xs font-normal text-[#797979]">{project.description}</span>
                                </div>
                            </div>

                            <span className="text-sm font-normal text-[#797979]">{project?.users?.length ?? 0} Users</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
