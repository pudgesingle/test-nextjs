import Image from "next/image";

import Iconft1 from "@/public/assets/imageFt1.png";
import Iconft2 from "@/public/assets/imageFt2.png";
import Iconft3 from "@/public/assets/imageFt3.png";
import Iconft4 from "@/public/assets/imageFt4.png";
import Iconft5 from "@/public/assets/imageFt5.png";

const Footer = () => {
  return (
    <footer className="flex flex-col h-[1100px] lg:h-[500px] mt-[40px] bg-[#00665E] px-[4rem] md:px-[10rem] 2xl:px-[20rem] py-[1rem] text-[#fff] text-center lg:text-start">
      <div className="h-[100px] font-bold text-[64px]">LOGO</div>
      <div className="h-[300px]">
        <div className="flex justify-center my-8">
          <hr className="border-t border-[#fff] w-full" />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
          <div>
            <div className="font-bold text-[20px]">คอร์สของเรา</div>
            <div className="py-[20px] h-full flex flex-col gap-y-2">
              <div>Data</div>
              <div>Science</div>
              <div>Tech</div>
              <div>Business</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-[20px]">เกี่ยวกับเรา</div>
            <div className="py-[20px] h-full flex flex-col gap-y-2">
              <div>สอนกับเรา</div>
              <div>ติดต่อสอบถามเพิ่มเติม</div>
              <div>แจ้งปัญหาเกี่ยวกับระบบ</div>
              <div>ช่องทางการร้องเรียน</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-[20px]">ความปลอดภัย</div>
            <div className="py-[20px] h-full flex flex-col gap-y-2">
              <div>Privacy Policy</div>
              <div>Terms and Conditions</div>
              <div>Data Protection Policy Six</div>
              <div>Coolkie Policy</div>
            </div>
          </div>
          <div className="h-full flex flex-col gap-y-4">
            <div className="font-bold text-[20px]">
              Lorem Ipsum is simply dummy text of the printing.
            </div>
            <div>199 ม.6 ต.ทุ่งสงขลา อ.ศรีราชา จ.ชลบุรี 20230</div>
            <div className="flex flex-col gap-y-2">
              <div className="font-bold">ติดต่อเรา</div>
              <div className="flex flex-row gap-x-2 justify-center lg:justify-start">
                <Image src={Iconft1} alt="Iconft1" width={24} height={24} />
                <Image src={Iconft2} alt="Iconft2" width={24} height={24} />
                <Image src={Iconft3} alt="Iconft3" width={24} height={24} />
                <Image src={Iconft4} alt="Iconft4" width={24} height={24} />
                <Image src={Iconft5} alt="Iconft5" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <hr className="border-t border-[#fff] w-full" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-[16px]">
            Y.I.M Corporation @ 2023. All rights reserved.
          </div>
          <div className="text-[16px]">0-3835-4580-4 , 0-3835-2611-6</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
