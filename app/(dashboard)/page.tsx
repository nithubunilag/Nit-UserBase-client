"use client";
import { PeopleIcon } from "public/icons";
import { useState } from "react";
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
    const [addCourse, setAddCourse] = useState(false);
    return (
        <div className="animate__animated animate__fadeIn -mt-2 min-h-screen gap-4 ">
            <h2 className="mb-2 text-2xl font-medium ">Good morning Oluwapelumi</h2>
            <p className="mb-10 text-base font-normal text-[#646464]">I hope your day is going good, Oluwapelumi</p>
            <div className="flex items-center justify-between gap-2">
                <div
                    className="w-full rounded-[5px] py-10 pl-6"
                    style={{
                        background: "linear-gradient(190.89deg, #03BFC0 23.66%, #015A5A 100.18%)",
                    }}
                >
                    <div className="flex flex-col justify-between gap-2 text-white ">
                        <PeopleIcon />
                        <h2 className="text-base font-medium">Total Enrolled Students</h2>
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
                        <h2 className="text-base font-medium">Total Enrolled Students</h2>
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

            <div className="mt-10 rounded-md bg-white py-4 shadow-md">
                <div className="mb-5 border-b border-b-[#E5E5DF] pb-5 ">
                    <div className="mx-auto flex w-[95%] items-center justify-between">
                        <h2 className="text-lg font-medium text-black">Courses</h2>
                        <button
                            onClick={() => setAddCourse(true)}
                            className="text-base font-medium text-[#0A7E27] underline-offset-2 transition-all duration-200 ease-in-out hover:underline"
                        >
                            Add
                        </button>
                    </div>
                </div>

                <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                        <div>
                            <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                            <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                        </div>
                    </div>

                    <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                </div>

                <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                        <div>
                            <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                            <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                        </div>
                    </div>

                    <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                </div>

                <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                        <div>
                            <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                            <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                        </div>
                    </div>

                    <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                </div>

                <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                        <div>
                            <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                            <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                        </div>
                    </div>

                    <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                </div>

                <div className="mx-auto mb-5 flex w-[95%] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-[50px] w-[60px] bg-[#D9D9D9]" />
                        <div>
                            <h2 className="text-sm font-normal ">Community of Health Nursing</h2>
                            <span className="text-xs font-normal text-[#797979]">Nursing Science</span>
                        </div>
                    </div>

                    <span className="text-sm font-normal text-[#797979]">135,433 students</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
