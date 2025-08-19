import Image from "next/image";
import Logo from "@/assets/limas_logo.svg"

export default function Footer() {
  return (
    <div className="bg-[#CD212A] w-full h-[150px] flex items-center flex-row">
      <Image src={Logo} alt="Logo Logo" className="ml-[20px] h-[120px]"/>
    </div>
  );
}