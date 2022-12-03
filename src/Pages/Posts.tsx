import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Postagens } from "../components/Postagens";
import { Users } from "../components/Users";

interface Postagens {
  id: string;
  title: string;
  body: string;
  reactions: number;
}

export function Posts() {
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        if(data.posts.lenght == 0){
          alert("Nenhuma postagem com essa descrição foi encontrada")
        }else{
          setSearch(data.posts);
        }
      });
  }, []);

  const [search, setSearch] = useState<Postagens[]>([]);
  const [searchValue, setSearchValue] = useState("");

  function pegarvalor(event: React.ChangeEvent<HTMLInputElement>) {
    const valor = event.target.value;
    setSearchValue(valor);
  }

  async function buscarUsuarios() {
    await fetch(`https://dummyjson.com/posts/search?q=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setSearch(data.posts);
      });
  }

  return (
    <div className="bg-[#D9D9D9] flex flex-col h-full w-screen ">
      <div className="mt-4">
        <Header primaryColor="SECONDARY" title="POSTAGENS" local="home" />
      </div>

      <div className=" mt-4">
        <div className="flex flex-row  justify-center">
          <div className="bg-[#C5BEBE] items-center flex rounded-full p-2 text-black">
            <MagnifyingGlass size={30} />
            <input
              type="text"
              className="bg-[#C5BEBE] ml-4 w-[20vw] rounded-full p-2 mr-4"
              placeholder="Busque uma postagem"
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

        * <div className="grid grid-cols-3 gap-3 h-full justify-center mt-[10vh] ml-[3vw]">
          {search.map((search) => {
            return (
              <Postagens
                key={search.id}
                title={search.title}
                body={search.body}
                reactions={search.reactions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
