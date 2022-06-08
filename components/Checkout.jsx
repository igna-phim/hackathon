import Link from "next/link"
import { useState } from 'react'

const Checkout = ({ total }) => {
    const [alerta, setAlerta] = useState(false)
    const [primeiroInput, setPrimeiroInput] = useState("")
    const [seg, setSeg] = useState("")
    const [ter, setTer] = useState("")
    const [qur, setQua] = useState("")
    const [quin, setQuin] = useState("")
    const [sex, setSex] = useState("")
    const [sab, setSab] = useState("")
    return (
        <div className="leading-loose">
            <form className="max-w-xl m-4 p-10  rounded shadow-xl">
                <p className="text-gray-800 font-medium">Customer information</p>
                <div className="">
                    <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                    <input value={primeiroInput} onChange={(e) => setPrimeiroInput(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                    <input value={seg} onChange={(e) => setSeg(e.target.value)} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
                    <input value={ter} onChange={(e) => setTer(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" for="cus_email">City</label>
                    <input value={qur} onChange={(e) => setQua(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                    <input value={quin} onChange={(e) => setQuin(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                    <input value={sex} onChange={(e) => setSex(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
                </div>
                <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                <div className="">
                    <label className="block text-sm text-gray-600" for="cus_name">Card</label>
                    <input value={sab} onChange={(e) => setSab(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                </div>
                
                <div className="mt-4">
                    
                        <button onClick={() => {
                            setAlerta(true)
                            setPrimeiroInput("")
                            setSeg("")
                            setTer("")
                            setQua("")
                            setQuin("")
                            setSex("")
                            setSab("")
                            setTimeout(() => setAlerta(false), 3000)
                        }} className="px-4 py-1 text-white font-bold tracking-wider  bg-amber-400 hover:bg-amber-500 rounded" type="button">Checkout</button>
                    
                </div>
            </form>
            {alerta &&
                <div>


                    <div class="absolute right-0 bottom-[200px]">
                        <div class="m-auto">
                            <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
                                <div class="flex flex-row">
                                    <div class="px-2">
                                        <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                        </svg>
                                    </div>
                                    <div class="ml-2 mr-6">
                                        <span class="font-semibold">Checkout complete</span>
                                        <span class="block text-gray-500">You will receive your items shortly</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Checkout