interface PostagensProps {
    title: string;
    body: string;
    reactions: number;
}



export function Postagens(props: PostagensProps) {
  return (
    <div className="bg-[#C5BEBE] p-2 w-[24vw] h-[40vh] flex flex-col items-center justify-center mb-4 rounded-lg">
      <h1 className="uppercase mt-2 text-center text-xl font-bold">{props.title}</h1>

      <p className="mx-auto text-lg text-justify ml-4 mr-4 mt-4">
       "{props.body}"
      </p>

      <p className="font-bold text-lg mt-10">Reações: {props.reactions}</p>
    </div>
  );
}
