"use client";
import { PopOver, Timeline } from "@/components/custom-ui";
import { Tab, Tabs, TabList, TabPanel } from "@/components/custom-ui/tabs";
// import "react-tabs/style/react-tabs.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import React from "react";
import Image from "next/image";
import { ICONS_DIR, IMAGE_DIR } from "@/utils/constants";
import About from "./tabs/about";
import Edit from "./tabs/edit";

const StaffProfile = () => {
  const tabData = [
    { id: "tab1_unique_id", title: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2_unique_id", title: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3_unique_id", title: "Tab 3", content: "Content for Tab 3" },
  ];

  return (
    <div>
      <div className="animate__animated animate__fadeIn flex gap-4 min-h-screen -mt-10 ">
        <div className="basis-[70%] mx-auto mt-8 ">
          <h2 className="text-[#232E7D] text-xl font-semibold mb-5">Profile</h2>

          <div className="relative rounded-[16px] bg-white h-[300px]">
            <Image
              src={`${IMAGE_DIR}/atmua_staff_profile.png`}
              alt="Pofile"
              width={100}
              height={200}
              className="w-full mb-4"
            />
            <div className="py-10 px-7 w-full flex items-center justify-between">
              <div>
                <h2 className="text-[#3B3B3B] font-medium mb-[2px]">
                  Ruth Soneye
                </h2>
                <span className="text-[#797979] text-sm">
                  Admission Officer
                </span>
              </div>

              {/* Phone Details */}
              <div>
                <h2 className="text-[#797979] text-sm font-medium mb-2">
                  Phone
                </h2>
                <span className="text-[#A1A1A1] text-sm flex gap-3">
                  <Image
                    src={`${ICONS_DIR}/phone.svg`}
                    width={16}
                    height={16}
                    alt="phone icon"
                  />
                  08026606698
                </span>
              </div>

              {/* Email Details */}
              <div>
                <h2 className="text-[#797979] text-sm font-medium mb-2">
                  Email
                </h2>
                <span className="text-[#A1A1A1] text-sm flex gap-3">
                  <Image
                    src={`${ICONS_DIR}/sms.svg`}
                    width={16}
                    height={16}
                    alt="phone icon"
                  />
                  ruthsoneye@gmail.com{" "}
                </span>
              </div>
            </div>

            <div className="absolute top-[35%] left-7 border-[5px] border-white rounded-full overflow-hidden">
              <Image
                src="https://www.shutterstock.com/image-photo/happy-millennial-african-american-man-600nw-1660490494.jpg"
                alt="profile image"
                width={100}
                height={100}
                className="w-[80px] h-[80px] rounded-[100%] object-cover"
              />
            </div>
          </div>

          <Tabs className="mt-8">
            <TabList className="mb-8">
              <Tab>About</Tab>
              <Tab>Edit</Tab>
            </TabList>

            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <Edit />
            </TabPanel>
          </Tabs>
        </div>

        <div className="border-l border-l-[#CACACA] basis-[30%]">
          <div className="w-[85%] mx-auto mt-8 ">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;

const RecentActivity = () => {
  const timeLines = [
    {
      message: "Superadmin assigned 4 new student complaints to you",
      date: "20-08-2019",
      time: "10:00 AM",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },

    {
      message: "Kolawole James completed the new Admission complaints task",
      date: "20-08-2019",
      time: "10:00 AM",
      image:
        "https://www.shutterstock.com/image-photo/happy-millennial-african-american-man-600nw-1660490494.jpg",
    },

    {
      message: "Adams Toyin reviewed the  Payment complaints task",
      date: "20-08-2019",
      time: "10:00 AM",
      image:
        "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.jpg?s=612x612&w=0&k=20&c=GPniKSszzPgprveN7sCT5mb-_L3-RSlGAOAsmoDaafw=",
    },

    {
      message: "Kolawole James completed the new Admission complaints task",
      date: "20-08-2019",
      time: "10:00 AM",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#3B3B3B] font-semibold">Recent Activity</h2>

        <PopOver
          width={400}
          location="bottom"
          content={
            <div className="w-[400px] h-[500px] p-4 bg-[#fff] rounded-md"></div>
          }
        >
          <IoMdNotificationsOutline className="text-2xl text-[#292D32]" />
        </PopOver>
      </div>

      <Timeline timelines={timeLines} />
    </div>
  );
};
