"use client";
import React from "react";
import Image from "next/image";

// COMPONENT
import CardCourse from "../card/CardCourse";
import CardCourseOnline from "../card/CardCourseOnline";

// IMAGE ASSETS
import Vector from "@/public/assets/vector.png";
import Avatar2 from "@/public/assets/avatar2.png";
import Avatar3 from "@/public/assets/avatar3.png";
import Avatar4 from "@/public/assets/avatar4.png";
import Icon1 from "@/public/assets/icon1.png";
import RightArrow from "@/public/assets/right-arrow.png";
import DateIcon from "@/public/assets/dateIcon.png";
import ViewIcon from "@/public/assets/viewIcon.png";
import ImageHand from "@/public/assets/imageCard3-6.png";
// ETC
import { MOCK } from "@/app/constant/constant";
import useDimensions from "@/app/hook/useDimension";

const Content = () => {
  const { width } = useDimensions();

  return (
    <div className="flex flex-col mt-[56px] gap-y-10">
      <div className="flex flex-col xl:flex-row ">
        <div>
          <div className="font-medium text-[18px] text-[#00665e]">
            Lorem Ipsum is simply dummy .
          </div>

          <div className="w-[214px] h-[138px] xl:w-[350px] xl:[250px]">
            <div className="text-[32px] font-semibold xl:text-[52px] xl:font-bold text-[#000]">
              learn anytime, anywhere with
              <span className="font-bold text-[32px] xl:text-[52px] text-[#00665e] ml-[14px]">
                Lorem
              </span>
            </div>
            <div className="flex justify-end xl:mr-[30px]">
              <Image
                src={Vector}
                alt="Vector"
                className="mt-2 w-[120px] h-[17px] xl:w-[225px] xl:h-[25px]"
              />
            </div>
          </div>

          <div className="mt-[50px] xl:mt-[150px] flex h-[46px] lg:h-[60px] w-full">
            <input
              type="text"
              placeholder={"ค้นหาตามหลักสูตร"}
              className="ph-font24 border border-[#d9d9d9] rounded-tl-2xl rounded-bl-2xl px-4 py-2 w-[300px]"
            />
            <button className="bg-[#a8ad00] text-[#fff] text-[20px] lg:text-[24px] px-8 py-2 rounded-tr-2xl rounded-br-2xl flex items-center">
              ค้นหา
            </button>
          </div>
        </div>

        <div className="flex gap-x-5 row-span-2 mt-[30px] xl:mt-0 xl:ml-auto overflow-x-auto lg:overflow-x-hidden">
          <div className="main-card bg-cover bg-center rounded-3xl p-[30px] flex flex-col">
            <div className="w-[300px] h-[400px]">
              <div className="font-bold text-[32px] text-[#fff]">
                Generative AI and ChatGPT: Design Thinking Edition
              </div>
              <div className="text-white mt-[8px] font-normal text-[24px]">
                ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI
              </div>
            </div>

            <div className="flex items-center justify-center w-[250px] h-[100px]">
              <Image
                src={Avatar2}
                alt="Avatar2"
                className="rounded-full w-[55px] h-[55px]"
              />
              <div className="text-white ml-2 font-bold text-[16px]">
                <div>ณัฐกานต์ สิทธิชัยอนันต์ </div>
                <div>CEO Y.I.M Corporation</div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-5">
            <div className="sub-card1 flex flex-col items-center bg-cover bg-center rounded-3xl p-[25px] w-[150px]">
              <div className="h-[400px]">
                <div className="deg-card font-bold text-[26px] h-[150px] w-[400px] p-[25px] mt-[65px]">
                  Generative ChatGPT: UX Design Edition
                </div>
              </div>
              <div className="h-[100px] flex items-center">
                <Image
                  src={Avatar3}
                  alt="Avatar3"
                  className="rounded-full w-[55px] h-[55px]"
                />
              </div>
            </div>
            <div className="sub-card2 flex flex-col items-center bg-cover bg-center rounded-3xl p-[30px] w-[150px]">
              <div className="h-[400px]">
                <div className="deg-card font-bold text-[26px] h-[150px] w-[400px] p-[25px] mt-[65px]">
                  UX Accelerator Bundle
                </div>
              </div>
              <div className="h-[100px] flex items-center">
                <Image
                  src={Avatar4}
                  alt="Avatar4"
                  className="rounded-full w-[55px] h-[55px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-x-4 mb-[40px]">
          <Image src={Icon1} alt="Icon1" className="w-[32px] h-[32px]" />
          <div className="font-bold text-[24px]">
            เลือกเรียนตามหัวข้อที่สนใจ
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-y-12 lg:gap-x-4">
          {MOCK.DATA_TOPIC.map((item, index) => (
            <div
              key={index}
              className="relative xl:col-span-1 xl:p-[40px] xl:bg-[#fff] xl:rounded-3xl xl:shadow-lg h-[110px] lg:h-[220px]"
            >
              <div className="flex gap-x-4 items-center">
                <Image
                  src={item.icon}
                  alt={`IconTopic${index + 1}`}
                  className="w-[38px] h-[38px]"
                />
                <div className="font-semibold text-[22px]">{item.title}</div>
              </div>
              <div className="mt-[12px] text-[18px] text-[#6A6A6A]">
                {item.detail}
              </div>
              <button className="w-[30px] h-[30px] bg-[#00665E] absolute xl:bottom-4 xl:right-4 bottom-0 right-0 rounded-lg flex justify-center items-center">
                <Image
                  src={RightArrow}
                  alt="RightArrow"
                  className="p-[8px w-[25px] h-[25px]]"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-[40px]">
          <div className="flex gap-x-4">
            <Image src={Icon1} alt="Icon1" className="w-[32px] h-[32px]" />
            <div className="font-bold text-[24px]">คอร์สของฉัน</div>
          </div>
          <button className="hidden sm:block py-2 px-4 border-2 border-[#A8AD00] rounded-[60px] text-[#A8AD00] text-[18px]">
            ดูทั้งหมด
          </button>
        </div>

        <div className="overflow-x-auto whitespace-nowrap py-4">
          {MOCK.DATA_MY_COURSE.map((item, index) => (
            <CardCourse item={item} key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="sm:hidden py-2 px-4 border-2 border-[#A8AD00] rounded-[60px] text-[#A8AD00] text-[18px] mt-2">
            ดูทั้งหมด
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-[40px]">
          <div className="flex gap-x-4">
            <Image src={Icon1} alt="Icon1" className="w-[32px] h-[32px]" />
            <div className="font-bold text-[24px]">คอร์สออนไลน์</div>
          </div>
          <button className="hidden sm:block py-2 px-4 border-2 border-[#A8AD00] rounded-[60px] text-[#A8AD00] text-[18px]">
            ดูทั้งหมด
          </button>
        </div>

        <div className="overflow-x-auto whitespace-nowrap py-4">
          {MOCK.DATA_ONLINE_COURSE.map((item, index: number) => (
            <CardCourseOnline item={item} itemKey={index} key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="sm:hidden py-2 px-4 border-2 border-[#A8AD00] rounded-[60px] text-[#A8AD00] text-[18px] mt-2">
            ดูทั้งหมด
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-[40px]">
          <div className="flex gap-x-4">
            <Image src={Icon1} alt="Icon1" className="w-[32px] h-[32px]" />
            <div className="font-bold text-[24px]">บทความและข่าวสารล่าสุด</div>
          </div>
          <button className="hidden sm:block py-2 px-4 border-2 border-[#A8AD00] rounded-[60px] text-[#A8AD00] text-[18px]">
            ดูทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
          {width < 576 ? (
            <div className="min-h-[330px] w-[300px] inline-block max-w-sm rounded-2xl shadow-lg bg-[#fff] mx-2 whitespace-normal">
              <div
                className={`news-card1 bg-cover bg-center px-[100px] py-[22px] h-[180px] rounded-tl-2xl rounded-tr-2xl card-header`}
              >
                <div className="text-[#fff] text-[16px] font-semibold">
                  profit / loss of stocks in the portfolio
                </div>
                <Image src={ImageHand} alt="ImageCard" />
              </div>

              <div className="py-[20px] px-[26px] card-content">
                <div className="text-[16px] max-w-sm overflow-hidden ">
                  <button className="py-[6px] px-4 border-2 border-[#00665e] rounded-[60px] text-[#00665e] text-[14px]">
                    Business
                  </button>
                  <div className="mt-4 text-[18px] font-bold">
                    สารแทนน้ำตาลไม่อันตราย
                  </div>
                  <div className="line-clamp-3 mt-2 h-[100px] text-[16px] text-[#6a6a6a]">
                    สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล
                  </div>
                </div>
                <div className="mt-[1.25rem] mb-[10px] text-[#6a6a6a]">
                  <div className="flex">
                    <Image
                      src={DateIcon}
                      alt="dateIcon"
                      className="w-[24px] h-[24px] mr-2"
                    />
                    <div>29 กรกฎาคม 2023</div>
                  </div>
                  <div className="flex">
                    <Image
                      src={ViewIcon}
                      alt="viewIcon"
                      className="w-[24px] h-[24px] mr-2"
                    />
                    <div>เข้าชม 240 ครั้ง</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-rows-1 xl:grid-rows-2 gap-y-4">
                {MOCK.DATA_NEWS.map((item, index) => (
                  <div
                    className="grid grid-cols-5"
                    key={`${item.title}-${index}`}
                  >
                    <div
                      className={`${item.bgImage} col-span-2 rounded-tl-3xl rounded-bl-3xl`}
                    >
                      <div className="font-bold text-[26px] p-[40px] text-[#fff]">
                        {item.title}
                      </div>
                      <Image
                        src={item.image}
                        alt={`${index}`}
                        width={240}
                        height={200}
                      />
                    </div>
                    <div className="col-span-3 bg-[#fff] shadow-lg p-[40px] rounded-tr-3xl rounded-br-3xl">
                      <div className="flex flex-col gap-y-4 h-[320px]">
                        <div className="flex items-center justify-center text-[16px] h-[40px] w-[100px] border border-[#00665E] text-[#00665E] rounded-3xl">
                          {item.tag}
                        </div>
                        <div className="font-bold text-[20px]">
                          {item.subTitle}
                        </div>
                        <div className="text-[16px] text-[#313131]">
                          {item.detail}
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-4 h-[80px] text-[#6A6A6A]">
                        <div className="flex">
                          <Image
                            src={DateIcon}
                            alt="dateIcon"
                            className="w-[24px] h-[24px]"
                          />
                          <div className="text-[16px] ml-1">{item.date}</div>
                        </div>
                        <div className="flex">
                          <Image
                            src={ViewIcon}
                            alt="dateIcon"
                            className="w-[24px] h-[24px]"
                          />
                          <div className="text-[16px] ml-1">{item.view}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-rows-3 gap-y-4">
                {MOCK.DATA_NEW_LATEST.map((item, index) => (
                  <div className="hidden xl:grid lg:grid-cols-3" key={index}>
                    <div
                      className={`${item.bgImage} col-span-1 flex justify-center items-center rounded-tl-3xl rounded-bl-3xl`}
                    >
                      <div className="font-bold text-[20px] text-[#fff] px-8">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4 col-span-2 bg-[#fff] shadow-lg p-[40px] rounded-tr-3xl rounded-br-3xl">
                      <div className="text-[16px] text-[#00665E] mb-[10px]">
                        {item.tag}
                      </div>
                      <div className="font-bold text-[20px]">
                        {item.subTitle}
                      </div>
                      <div className="text-[16px] text-[#313131]">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex justify-center">
            <button className="sm:hidden py-2 px-4 border-2 border-[#A8AD00] rounded-[60px] text-[#A8AD00] text-[18px]">
              ดูทั้งหมด
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-x-4 mb-[40px]">
          <Image src={Icon1} alt="Icon1" className="w-[32px] h-[32px]" />
          <div className="font-bold text-[24px]">ตั้งกระทู้คำถาม</div>
        </div>

        <div className="flex flex-col relative gap-y-4 h-[500px] bg-[#fff] rounded-3xl shadow-lg p-[40px]">
          <div className="font-bold text-[20px]">หัวข้อกระทู้</div>
          <input
            placeholder="หัวข้อกระทู้"
            className="p-[10px] border-2 border-[#B6B6B6] rounded-xl"
          />
          <div className="font-bold text-[20px]">เนื้อหา</div>
          <input className="p-[10px] border-2 border-[#B6B6B6] rounded-xl h-[200px]" />
          <button className="absolute right-10 bottom-10 text-[24px] text-[#fff] bg-[#A8AD00] h-[55px] w-[222px] sm:w-[185px] rounded-xl">
            ส่ง
          </button>
        </div>
      </div>
    </div>
  );
};
export default Content;
