import IconTopic1 from "../../public/assets/icontopic1.png";
import IconTopic2 from "../../public/assets/icontopic2.png";
import IconTopic3 from "../../public/assets/icontopic3.png";
import IconTopic4 from "../../public/assets/icontopic4.png";
import {
  CardCourseInterface,
  CardCourseOnlineInterface,
  CardNewsInterface,
  CardNewsLatestInterface,
} from "../interface/card-course.interface";
import { CardTopicInterface } from "../interface/card-topic.interface";

export const MOCK = {
  DATA_MY_COURSE: [
    {
      image: "imageCard1",
      title: "Generative AI and ChatGPT: Design Thinking Edition",
      percent: 0,
      bgImage: "course-card1",
    },
    {
      image: "imageCard2",
      title: "Generative ChatGPT: UX Design Edition",
      percent: 10,
      bgImage: "course-card2",
    },
    {
      image: "imageCard3",
      title: "เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล",
      percent: 40,
      bgImage: "course-card3",
    },
    {
      image: "imageCard4",
      title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
      percent: 80,
      bgImage: "course-card4",
    },
  ] as CardCourseInterface[],

  DATA_TOPIC: [
    {
      title: "Data",
      detail: "เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่า ให้ธุรกิจด้วยข้อมูล",
      icon: IconTopic1,
    },
    {
      title: "Science",
      detail: "เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์",
      icon: IconTopic2,
    },
    {
      title: "Tech",
      detail: "พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม",
      icon: IconTopic3,
    },
    {
      title: "Business",
      detail:
        "พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทางและเวลาที่เหมาะ",
      icon: IconTopic4,
    },
  ] as CardTopicInterface[],

  DATA_ONLINE_COURSE: [
    {
      bgImage: "course-o-card1",
      tag: "Business",
      title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัย พื้นฐาน",
      detail: "รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น",
      profile: "/assets/avatar5.png",
      name: "ณัฐกานต์ สิทธิชัยอนันต์ CEO Y.I.M Corporation",
    },
    {
      bgImage: "course-o-card2",
      tag: "Data",
      title: "Progressive Web Application",
      detail:
        "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
      profile: "/assets/avatar6.png",
      name: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี Google Developers",
    },
    {
      bgImage: "course-o-card3",
      tag: "Science",
      title: "React Hooks in Action",
      detail: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
      profile: "/assets/avatar7.png",
      name: "วรัทธน์ วงศ์มณีกิจ Co-Founder",
    },
    {
      bgImage: "course-o-card4",
      tag: "Tech",
      title: "Generative AI and ChatGPT: Design Thinking Edition",
      detail: "ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI",
      profile: "/assets/avatar8.png",
      name: "ทัศน์พล รัชตะสัมฤทธิ์ Software Engineer",
    },
  ] as CardCourseOnlineInterface[],

  DATA_NEWS: [
    {
      title: "profit / loss of stocks in the portfolio",
      image: "/assets/imageCard3-6.png",
      bgImage: "news-card1",
      tag: "Business",
      subTitle: "กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?",
      detail:
        "เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้น ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ ขาดทุนมากน้อยเท่าใด?",
      date: "29 กรกฎาคม 2023",
      view: "เข้าชม 240 ครั้ง",
    },
    {
      title: "What is a Data Engineer",
      image: "/assets/imageCard3-7.png",
      bgImage: "news-card2",
      tag: "Data",
      subTitle: "Data Engineer คืออะไร?",
      detail:
        "Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือเพื่อ รวบรวมข้อมูลจัดการข้อมูลและ เปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst",
      date: "29 กรกฎาคม 2023",
      view: "เข้าชม 240 ครั้ง",
    },
  ] as CardNewsInterface[],

  DATA_NEW_LATEST: [
    {
      title: "สารแทนน้ำตาล ไม่อันตราย",
      bgImage: "news-card3",
      tag: "Science",
      subTitle: "สารแทนน้ำตาลไม่อันตราย",
      detail:
        "สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล",
    },
    {
      title: "Data Pipelines with Airflow",
      bgImage: "news-card4",
      tag: "Tech",
      subTitle: "Data Pipelines with Airflow",
      detail:
        "เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม",
    },
    {
      title: "ร่างกายสามารถ ย้อนวัย “อายุชีวภาพ”",
      bgImage: "news-card5",
      tag: "Science",
      subTitle: "ร่างกายสามารถย้อนวัย “อายุชีวภาพ”",
      detail:
        "ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย “อายุชีวภาพ” (biological age) ซึ่งอาจจะแตกต่างจากอายุจริง",
    },
  ] as CardNewsLatestInterface[],
};
