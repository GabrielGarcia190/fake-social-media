import { NotePencil, UserCircle } from "phosphor-react";

interface HeaderProps {
  primaryColor: string;
  title: string;
  local: string;
}

export function Header(props: HeaderProps) {
  return (
    <div> 
    <div className="bg-[#C1C0C0] h-[30vh] w-[100vw] flex flex-row" >
      <div className={props.primaryColor == "PRIMARY" ? "bg-[#083762] h-[30vh] w-[10vw] ": "bg-[#961E1E] h-[30vh] w-[10vw]"} color=""></div>
     <div className=" flex flex-col items-center justify-center w-full ">
      <div className="flex items-center">
        <div className="" hidden={props.primaryColor == "PRIMARY" ? false : true}>
        <UserCircle size={140} color="#000" />
        </div>
        <div className="" hidden={props.primaryColor == "PRIMARY" ? true : true}>
        <NotePencil size={140} color="#000" />
        </div>
        <p className="uppercase ml-4 font-bold text-7xl">{props.title}</p>
      </div>
      </div>
    </div>

    <div className="bg-[#9E9C9C] h-[5vh] w-[100vw] flex flex-row" >
    
    <div className={props.primaryColor === "PRIMARY" ? "bg-[#083762] h-[5vh] w-[10vw] ": "bg-[#961E1E] h-[5vh] w-[10vw]"}></div>
    <div className=" flex flex-row items-center justify-around w-full font-bold text-xl">
      <a href={props.primaryColor === "PRIMARY" ? "#" : "/"}>Usuários</a>
      <div className="w-[0.2vw] h-[4vh] bg-black ">
        </div>
      <a href={props.primaryColor === "PRIMARY" ? "posts" : "#"}>Postagens</a>
      </div>
    </div>
    </div>
  );
}
