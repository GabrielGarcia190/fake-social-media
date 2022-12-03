import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Produtos } from "./components/Produtos";

export interface Produtos {
  id: string;
  title: string;
  thumbnail: string;
}

function App() {
  const [search, setSearch] = useState<Produtos[]>([]);
  const [searchValue, setSearchValue] = useState("");

  function buscarProdutos() {
    fetch(`https://dummyjson.com/products/search?q=&${searchValue}&limit=9`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setSearch(data.products);
      });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setSearch(data.products);
      });
  }, []);

  return (
    <div className="bg-[#D9D9D9] flex flex-col h-full w-screen ">
      <div className="mt-4">
        <Header />
      </div>
      <div className=" mt-4">
        <div className="flex flex-row  justify-center">
          <div className="bg-[#C5BEBE] items-center flex rounded-full p-2 text-black">
            <MagnifyingGlass size={30} />
            <input
              type="text"
              className="bg-[#C5BEBE] ml-4 w-[20vw] rounded-full p-2 mr-4"
              placeholder="Busque um produto"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <button
            className="bg-[#326A28] p-2 font-bold text-white rounded-full ml-3 px-6"
            onClick={buscarProdutos}
          >
            BUSCAR
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 h-full justify-center mt-[10vh] ml-[3vw]">
          {search.map((search) => {
            return (
              <Produtos
                key={search.id}
                bannerUrl={search.thumbnail}
                title={search.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
