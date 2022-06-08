
import Quottation from "../components/Quottation";
import Quottation2 from "../components/Quottation2";
import { useRouter } from 'next/router'
import { useEffect } from "react"
export default function Home({ setType }) {
  const router = useRouter()
  async function verProdutosPorCategoria() {
    router.push(`/ProdutosPorCategorias`)
  }
  useEffect(() => {
    console.log("previous url is: " + window.history.previous)
  }, []);

  return (
    <div role="container">
      <div role="content" className="flex justify-center h-screen bg-[#5fc0c0]">
        <div className="flex flex-col justify-center items-center">
          <div className="px-20">
            <div className="">
              <div className="">
                <Quottation />
                <p className="text-4xl font-semibold md:text-md leading-relaxed m-5">
                  So many things surronding us could be so usefull. Where others see garbage, <span className="text-4xl uppercase font-bold">I see an oportunity</span>, the garbage of some is the <span className="text-6xl uppercase font-bold">TRASHSURE</span> of others.</p>
                <div className="flex flex-row-reverse">
                  <Quottation2 />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 m-5 flex flex-row">
            <a href="/aboutme" className=" border-solid border-amber-400 bg-amber-400 rounded-full border-2 text-center p-2 pl-4 pr-4 text-white hover:bg-transparent text-2xl hover:font-bold">Get to know me!</a>
            <a href="/produtos" className="ml-4 border-solid border-amber-400 bg-amber-400 rounded-full border-2 text-center p-2 pl-4 pr-4 text-white hover:bg-transparent text-2xl hover:font-bold">My Art</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div onClick={() => { setType("Madeira"), verProdutosPorCategoria() }} className="transition ease-in-out delay-150 m-10 flex justify-center items-center  border-black h-[80vh] w-[25vw] hover:-translate-y-1 hover:scale-105 hover:cursor-pointer bg-no-repeat bg-cover bg-center bg-wood ">

        </div>
        <div onClick={() => { setType("cartao"), verProdutosPorCategoria() }} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer m-10 flex justify-center items-center  border-black h-[80vh] w-[25vw] bg-no-repeat bg-cover bg-center bg-cardboard ">

        </div>
        <div onClick={() => { setType("plastico"), verProdutosPorCategoria() }} className="transition ease-in-outhover:-translate-y-1 hover:scale-105 m-10 flex justify-center items-center  border-black h-[80vh] w-[25vw] hover:cursor-pointer bg-no-repeat bg-cover bg-center bg-plastic">

        </div>
      </div>
    </div>

  )
}
