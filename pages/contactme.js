import React from 'react'
import { useState } from 'react'

const Contactme = () => {
    const [alerta, setAlerta] = useState(false)
    const [primeiroInput, setPrimeiroInput] = useState("")
    const [seg, setSeg] = useState("")
    const [ter, setTer] = useState("")
    const [quart, setQuart] = useState("")

    return (
        <div>
            <div>
                <div className='flex justify-center items-center m-5'>
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input value={primeiroInput} onChange={(e) => setPrimeiroInput(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input value={seg} onChange={(e) => setSeg(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input value={ter} onChange={(e) => setTer(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea value={quart} onChange={(e) => setQuart(e.target.value)} class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="md:flex md:justify-center md:items-center">
                            <div class="md:w-1/3">
                                <button class="shadow bg-amber-400 hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={() => {
                                    setAlerta(true)
                                    setPrimeiroInput("")
                                    setSeg("")
                                    setTer("")
                                    setQuart("")
                                    setTimeout(() => setAlerta(false), 3000)
                                }}>
                                    Send
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
            {alerta &&
                <div>


                    <div class="absolute right-0 bottom-1/3">
                        <div class="m-auto">
                            <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
                                <div class="flex flex-row">
                                    <div class="px-2">
                                        <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                        </svg>
                                    </div>
                                    <div class="ml-2 mr-6">
                                        <span class="font-semibold">Successfully Sent</span>
                                        <span class="block text-gray-500">I will contact you as soon as possible</span>
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

export default Contactme