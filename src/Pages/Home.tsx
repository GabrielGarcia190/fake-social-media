import { MagnifyingGlass, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Users } from "../components/Users";

export interface Usuarios {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
}

export function Home() {
  const [search, setSearch] = useState<Usuarios[]>([]);
  const [searchValue, setSearchValue] = useState("");

  function pegarvalor(event: React.ChangeEvent<HTMLInputElement>) {
    const valor = event.target.value;
    setSearchValue(valor);
  }

  async function buscarUsuarios() {
    await fetch(`https://dummyjson.com/users/search?q=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setSearch(data.users);
      });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setSearch(data.users);
      });
  }, []);

  return (
    <div className="bg-[#D9D9D9] flex flex-col h-full w-screen ">
      <div className="mt-4">
        <Header primaryColor="PRIMARY" title="USUÁRIOS" local="home" />
      </div>

      <div className=" mt-4">
        <div className="flex flex-row  justify-center">
          <div className="bg-[#C5BEBE] items-center flex rounded-full p-2 text-black">
            <MagnifyingGlass size={30} />
            <input
              type="text"
              className="bg-[#C5BEBE] ml-4 w-[20vw] rounded-full p-2 mr-4"
              placeholder="Busque um usuário"
              onChange={pegarvalor}
            />
          </div>
          <button
            className="bg-[#326A28] p-2 font-bold text-white rounded-full ml-3 px-6"
            onClick={buscarUsuarios}
          >
            BUSCAR
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 h-full justify-center mt-[10vh] ml-[3vw]">
          {search.map((search) => {
            return (
              <Users
                key={search.id}
                bannerUrl={search.image}
                firstName={search.firstName}
                lastName={search.lastName}
                maidenName={search.maidenName}
                age={search.age}
                gender={search.gender}
                email={search.email}
                phone={search.phone}
                username={search.username}
                birthDate={search.birthDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
