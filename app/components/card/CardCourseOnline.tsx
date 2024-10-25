import { CardCourseOnlineInterface } from "@/app/interface/card-course.interface";
import Image from "next/image";

const CardCourseOnline = ({
  item,
  itemKey,
}: {
  item: CardCourseOnlineInterface;
  itemKey: number;
}) => {
  const { bgImage, tag, title, detail, profile, name } = item;

  return (
    <div
      key={itemKey}
      className={`${bgImage} card-online inline-block bg-cover bg-center px-[22px] py-[20px] h-[550px] rounded-tl-2xl rounded-3xl mx-2 ${
        itemKey % 2 === 0 ? "text-black" : "text-white"
      } whitespace-normal`}
    >
      <div className="h-[400px]">
        <div className="flex items-center justify-center text-[16px] h-[40px] w-[100px] border border-[#7B7B7B] text-[#7B7B7B] rounded-3xl">
          {tag}
        </div>
        <div className="text-[24px] font-bold h-[100px]">{title}</div>
        <div className="mt-[20px] text-[20px] h-[70px]">{detail}</div>
      </div>

      <div className="flex items-center h-[110px]">
        <Image
          src={profile}
          width={42}
          height={42}
          alt={`${itemKey}`}
          className="rounded-full"
        />
        <div className="ml-2">
          <div className="font-bold text-[16px]">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default CardCourseOnline;
