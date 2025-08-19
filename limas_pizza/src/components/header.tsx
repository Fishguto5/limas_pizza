import Image from "next/image";
import Logo from "@/assets/limas_logo.svg"

export default function Header() {
  return (
    <div className="bg-[#CD212A] w-full h-[150px] flex items-center flex-row">
      <Image src={Logo} alt="Logo Logo" className="ml-[20px] h-[120px]"/>
      <div className=" flex flex-row gap-[25px] ml-[auto] mr-[50px] cursor-pointer">
        <p> Quem Somos</p>
        <p>Cardápio</p>
        <p>Contato</p>
        <p>Pizzas mais pedidas</p>
        <p>Hatsune Miku</p>
        <p>Mestre dos Magos</p>
        <p></p>
      </div>
    </div>
  );
}
