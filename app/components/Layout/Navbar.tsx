import Image from "next/image";
import Menu from "@/public/assets/menu.png";
import Avatar1 from "@/public/assets/avatar1.png";
import LogoNav from "@/public/assets/logo-nav.png";

const Navbar = () => {
  const navItems = [
    {
      menu: "รายวิชา",
    },
    {
      menu: "ถ่ายทอดสด",
    },
    {
      menu: "กระทู้คำถาม",
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full h-[66px]">
      <div className="flex gap-x-10">
        <Image src={LogoNav} alt="LogoNav" width={90} height={28} />
        <div className="hidden lg:flex gap-x-5 items-end text-[20px] text-[#6A6A6A]">
          {navItems.map((item, index) => (
            <div>{item.menu}</div>
          ))}
        </div>
      </div>

      <div>
        <div className="gap-x-5 hidden lg:flex">
          <button className="bg-[#efefef] rounded-2xl px-[20px] h-[60px]">
            ออกจากระบบ
          </button>

          <button className="flex items-center bg-[#1c1c29] rounded-2xl px-[20px] text-[#fff] h-[60px]">
            <div className="bg-[#E3E5E8] rounded-full mr-[5px]">
              <Image
                src={Avatar1}
                alt="Avatar1"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>

            <div>Siriwat Rachanon</div>
          </button>
        </div>

        <Image
          src={Menu}
          alt="Menu Button"
          width={24}
          height={24}
          className="lg:hidden cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
