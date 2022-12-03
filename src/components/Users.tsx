import { ClipboardText, X } from "phosphor-react";
import { useState } from "react";
import Modal from "react-modal";
import "../styles/modal.css";

interface UsersProps {
  bannerUrl: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
}

Modal.setAppElement("#root");
export function Users(props: UsersProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
    console.log("ABERTO");
  }

  return (
    <div className="bg-[#C5BEBE] p-2 w-[24vw] h-[45vh] flex flex-col items-center mb-4 rounded-lg">
      <img
        src={props.bannerUrl}
        alt=""
        className=" w-[20vw] h-[30vh] bg-[#161b22] mt-4 border-4 border-black rounded-lg"
      />
      <h1 className="uppercase mt-2 font-bold">
        {props.firstName} {props.lastName}
      </h1>

      <button
        className="bg-[#083762] p-3 font-bold flex items-center text-white rounded-xl mt-4 px-6"
        onClick={openModal}
      >
        <ClipboardText size={30} color="#f3f3f3" className="mr-4" />
        INFORMAÇÕES DO USUARIO
      </button>

      <Modal
        isOpen={modalIsOpen}
        contentLabel="modal-resultado"
        overlayClassName="modal-overlay"
        className="flex flex-col rounded-lg mx-auto my-auto items-center mt-[20vh] bg-[#C5BEBE] w-[40vw] h-[55vh] shadow-xl"
      >
        <button onClick={closeModal}>
          <X size={30} className="text-red-600 ml-[37vw] mt-2" weight="bold" />
        </button>
        <div className="bg-[#C5BEBE] text-lg text-black mx-auto flex h-[40vh] w-[30vw] flex-col  items-center">
          <h1 className="ml-4 font-bold text-2xl ">
            - INFORMAÇÕES DO USUÁRIO-
          </h1>
          <img
            src={props.bannerUrl}
            alt=""
            className=" w-[10vw] h-[20vh] bg-[#161b22] mt-4 border-4 border-black rounded-lg"
          />
          <p className="bg-[#A59292] p-2 w-full  mt-4 rounded-lg ml-4">
            Nome Completo: {props.firstName} {props.maidenName} {props.lastName}
          </p>

          <div className="flex flex-row mt-5 text-center w-[30vw]">
            <p className="bg-[#A59292] p-2 w-[15vw] ml-2 flex flex-row items-center justify-between rounded-lg">
              Gênero: {props.gender}
            </p>
            <p className="bg-[#A59292] p-2 w-[15vw] ml-4  flex flex-row items-center justify-between rounded-lg">
              Idade: {props.age}
            </p>
          </div>

          <div className="flex flex-row mt-5 text-center w-[30vw]">
            <p className="bg-[#A59292] p-2 w-[15vw] ml-2 flex flex-row items-center justify-between rounded-lg">
              Nome do Usuário: {props.username}
            </p>
            <p className="bg-[#A59292] p-2 w-[15vw] ml-4  flex flex-row items-center justify-between rounded-lg">
              Data de Nasicmento: {props.birthDate}
            </p>
          </div>

          <p className="bg-[#A59292] p-2 w-full mt-4 rounded-lg ml-4">
            Email: {props.email}
          </p>
          <p className="bg-[#A59292] p-2 w-full mt-4 rounded-lg ml-4">
            Telefone: {props.phone}
          </p>
        </div>
      </Modal>
    </div>
  );
}
