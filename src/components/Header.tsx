import { UserCircle } from "phosphor-react";


export function Header() {
  return (
    <div className="bg-[#C1C0C0] h-[30vh] w-[screen] flex flex-row">
      <div className="bg-[#083762] h-[30vh] w-[10vw]"></div>
      <div className=" flex flex-row items-center justify-center w-full">
        <UserCircle size={140} color="#000" />
        <p className="uppercase ml-4 font-bold text-7xl">USUÁRIOS</p>
      </div>
    </div>
  );
}
