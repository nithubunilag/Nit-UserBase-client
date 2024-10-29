import "animate.css";
import Image from "next/image";

interface ITimelineProps {
    timelines: {
        image: string;
        message: string;
        date: string;
        time: string;
    }[];
}

export const Timeline = (props: ITimelineProps) => {
    const { timelines } = props;

    return (
        <div className="max-h-[400px] overflow-y-scroll ">
            {timelines.map((timeline, index) => {
                const typeArr = Array.from({ length: timelines.length - 1 }, (_, index) => index + 1);

                const delayArr = typeArr.reverse();

                const delay = index === timelines.length - 1 ? "" : `animate__delay-${delayArr[index]}s`;

                const afterClass = `after:content-[""] after:w-[2px] after:h-full after:bg-[#cacaca] after:absolute after:top-[50%] after:left-[0.9rem] last:after:content-none `;

                const { date, image, message, time } = timeline;

                return (
                    <div
                        key={index}
                        className={`animate__animated animate__fadeInUp relative my-5 flex min-h-[50px] items-start gap-4 ${delay} ${afterClass}  `}
                    >
                        <Image width={32} height={32} src={image} alt="Icon" className="z-20 h-[32px] w-[32px] rounded-full object-cover" />

                        <div className="w-[80%]">
                            <h2 className="text-sm font-medium leading-4 text-[#505050] ">{message}</h2>
                            <span className="text-xs font-light text-[#797979]">
                                {date} {time}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
