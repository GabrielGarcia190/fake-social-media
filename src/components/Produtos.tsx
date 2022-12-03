interface ProdutosPros {
    bannerUrl: string;
    title: string;
}

export function Produtos( props: ProdutosPros) {
    return(
        <div
                className="bg-[#C5BEBE] p-2 w-[24vw] h-[45vh] flex flex-col items-center mb-4 rounded-lg"
              >
                <img
                  src={props.bannerUrl}
                  alt=""
                  className=" w-[20vw] h-[30vh] mt-4"
                />
                <h1 className="uppercase mt-2 font-bold">{props.title}</h1>

               <button className="bg-[#326A28] p-2 font-bold text-white rounded-full mt-4 px-6">
                INFORMAÇÕES DO PRODUTO    
                </button>
              </div>
    )
}