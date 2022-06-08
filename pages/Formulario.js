import Checkout from "../components/Checkout";

export default function Formulario() {
    return (
        <div className="flex flex-row justify-center items-center">
            <Checkout />
        </div>
        // <div className="flex flex-col justify-center items-center">
        //     <div className="w-1/2 "></div>
        //     <div className="flex flex-col justify-center items-center w-1/2 border-2 rounded  m-5 p-5 overflow-hidden shadow-lg">
        //         <h1 className="m-2">Name:</h1>
        //         <input></input>
        //         <h1 className="m-2">Adress:</h1>
        //         <input></input>
        //         {/* <h1>Payment:</h1> */}
        //         {/* <div className="flex flex-row">
        //             <div className="mr-7">
        //                 Teste
        //             </div>
        //             <div className="ml-7">
        //                 <select>
        //                     <option value="masterCard" >Paypal</option>
        //                     <option value="Emojis" >MBway</option>


        //                 </select>
        //             </div>

        //         </div> */}
        //         <div className="mt-5 flex flex-row justify-between items-center ">
        //             <div className="m-2">
        //                 Cardholder's Name: <input className="mr-5"></input>
        //             </div>
        //             <div className="m-2">
        //                 Card Number: <input className="mr-5"></input>
        //             </div>
        //         </div>
        //         <h3></h3>
        //         <div>
        //             <button className="m-5 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
        //                 Checkout
        //             </button>
        //         </div>
        //     </div>
        //     <div className="flex flex-col justify-center items-center w-1/2"></div>
        // </div>
    )
}
