import Quottation from "../components/Quottation";
import Quottation2 from "../components/Quottation2";

export default function Home() {
  return (
    <div role="container">
      <div role="content" className="flex justify-center h-screen bg-[#5fc0c0]">
        <div className="flex flex-col justify-center items-center">
          <div className="px-20">
            <div className="">
              <div className="">
                <Quottation />
                <p className=" text-base md:text-md leading-relaxed m-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim arcu, mattis a metus ac, posuere interdum nulla. Ut erat orci, euismod vel bibendum id, blandit eu nisl. Vestibulum rhoncus semper nunc id commodo. In et lobortis dui, in dignissim lacus. Nullam condimentum at felis sit amet aliquet.</p>
                <div className="flex flex-row-reverse">
                  <Quottation2 />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 m-5 flex flex-row">
            <a href="/aboutme" className="mr-2 rounded-none border-2 border-black border-solid p-2 font-mono hover:font-bold hover:bg-black hover:text-[#f2f2f2]">Get to know me!</a>
            <a href="/produtos" className="ml-2 rounded-none border-2 border-black border-solid p-2 font-mono hover:font-bold hover:bg-black hover:text-[#f2f2f2]">My Art</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
        </div>
      </div>
    </div>

  )
}
