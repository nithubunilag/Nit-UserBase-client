"use client"
import { PeopleIcon } from "public/icons"
import { useState } from "react"
import { Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

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
]

const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 100 },
]

const COLORS = ["#0093DD", "#03BFC0", "#F59BE9", "#9747FF", "#FFC263"]
const Home = () => {
    const [addCourse, setAddCourse] = useState(false)
    return (
        <div className="animate__animated animate__fadeIn -mt-10 flex min-h-screen w-screen gap-4 ">

            <div className="mx-auto mt-8 basis-[70%] ">
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

            <div className="basis-[30%] border-l border-l-[#CACACA]">
                <div className="w-full border-b border-b-[#CACACA]">
                    <div className="mx-auto mb-4 mt-8 flex w-[85%] items-center justify-between ">
                        <h2 className="text-xl font-medium">Recent Activity</h2>
                    </div>
                </div>

                <div className="mx-auto my-5 flex w-[85%] flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-normal text-[#A0A0A0]">27, Jan 2020</span>
                        <h2 className="text-sm font-bold text-[#3B3B3B]">
                            Soneye Oluwapelumi added to eks-user{" "}
                            <span className="text-xs text-[#949494]">5 mins ago</span>
                        </h2>
                        <p className="text-sm font-medium text-[#939393]">
                            Manage access for all teachers,students in your organisation
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-normal text-[#A0A0A0]">27, Jan 2020</span>
                        <h2 className="text-sm font-bold text-[#3B3B3B]">
                            Admin functionality <span className="text-xs text-[#949494]">5 mins ago</span>
                        </h2>
                        <p className="text-sm font-medium text-[#939393]">
                            Manage access for all teachers,students in your organisation
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-normal text-[#A0A0A0]">27, Jan 2020</span>
                        <h2 className="text-sm font-bold text-[#3B3B3B]">
                            Soneye Oluwapelumi added to eks-user{" "}
                            <span className="text-xs text-[#949494]">5 mins ago</span>
                        </h2>
                        <p className="text-sm font-medium text-[#939393]">
                            Manage access for all teachers,students in your organisation
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-normal text-[#A0A0A0]">27, Jan 2020</span>
                        <h2 className="text-sm font-bold text-[#3B3B3B]">
                            Soneye Oluwapelumi added to eks-user{" "}
                            <span className="text-xs text-[#949494]">5 mins ago</span>
                        </h2>
                        <p className="text-sm font-medium text-[#939393]">
                            Manage access for all teachers,students in your organisation
                        </p>
                    </div>
                </div>

                <div className="w-full border-b border-b-[#CACACA]">
                    <div className="mx-auto mb-4 mt-8 flex w-[85%] items-center justify-between ">
                        <h2 className="text-xl font-medium">Metrics Overview</h2>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={800} height={400}>
                        <Pie
                            data={data2}
                            innerRadius={105}
                            outerRadius={142}
                            fill="#8884d8"
                            dataKey="value"
                            paddingAngle={2}
                        >
                            {data2.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="mx-auto flex w-[85%] flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full bg-[#0093DD] " />
                        <span className="text-sm font-normal text-black">Total courses</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full bg-[#9747FF] " />
                        <span className="text-sm font-normal text-black">Student assessment</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full bg-[#F59BE9] " />
                        <span className="text-sm font-normal text-black">Organizational performance</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full bg-[#03BFC0] " />
                        <span className="text-sm font-normal text-black">Employee engagement</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full bg-[#FFC263] " />
                        <span className="text-sm font-normal text-black">LMS usage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home