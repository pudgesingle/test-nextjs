import { CardCourseInterface } from "@/app/interface/card-course.interface";
import ProgressBar from "../ProgressBar";

const CardCourse = ({ item }: { item: CardCourseInterface }) => {
  const { image, title, percent, bgImage } = item;

  return (
    <div className="card-course inline-block max-w-sm rounded-2xl shadow-lg bg-[#fff] mx-2 whitespace-normal">
      <div
        className={`${bgImage} bg-cover bg-center px-[32px] py-[22px] h-[150px] rounded-tl-2xl rounded-tr-2xl card-header`}
      >
        <div className="text-[#fff] text-[16px] font-semibold">{title}</div>
      </div>

      <div className="py-[20px] px-[15px] card-content ">
        <div className="text-[16px] max-w-sm overflow-hidden ">
          <div className="line-clamp-3 h-[75px]">{title}</div>
        </div>
        <div className="mt-[1rem] mb-[10px]">
          เรียนไปแล้ว <span className="font-bold">{percent}%</span>
        </div>

        <ProgressBar percent={percent} />
      </div>
    </div>
  );
};

export default CardCourse;
