import { ClipboardText } from "phosphor-react";

interface UsersProps {
    bannerUrl: string;
    firstName: string;
    lastName: string;
}

export function Users( props: UsersProps) {
    return(
        <div
                className="bg-[#C5BEBE] p-2 w-[24vw] h-[45vh] flex flex-col items-center mb-4 rounded-lg"
              >
                <img
                  src={props.bannerUrl}
                  alt=""
                  className=" w-[20vw] h-[30vh] bg-[#161b22] mt-4 border-4 border-black rounded-lg"
                />
                <h1 className="uppercase mt-2 font-bold">{props.firstName}  {props.lastName}</h1>

               <button className="bg-[#083762] p-3 font-bold flex items-center text-white rounded-xl mt-4 px-6">
               <ClipboardText size={30} color="#f3f3f3"  className="mr-4"/>
                INFORMAÇÕES DO USUARIO    
                </button>
              </div>
    )
}