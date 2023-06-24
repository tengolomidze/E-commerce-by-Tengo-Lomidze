import {AiOutlineShoppingCart} from "react-icons/ai"
import {TfiMenu} from "react-icons/tfi"


import avatar from "../assets/image-avatar.png"
import Cart from "./Cart"
import { useState } from "react"
import  {IoMdClose} from "react-icons/io"

const Header = (props:any) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            <header className="flex p-4 lg:p-0 items-center justify-between max-w-5xl mx-auto border-b-2 border-gray-100">
                <div className="flex items-center gap-4 lg:gap-12">
                    <button title="menu" onClick={() => setNavOpen(true)}>
                        <TfiMenu className="lg:hidden text-xl"/>
                    </button>

                    <p className="text-3xl font-bold">sneakers</p>

                    <nav className="hidden lg:block">
                        <ul className="flex gap-8 items-center h-20 text-darkGrayishBlue">
                            <li className="h-full flex items-center justify-center border-y-4  border-transparent hover:border-b-orange-400 hover:text-black duration-200">Collections</li>
                            <li className="h-full flex items-center justify-center border-y-4  border-transparent hover:border-b-orange-400 hover:text-black duration-200">Men</li>
                            <li className="h-full flex items-center justify-center border-y-4  border-transparent hover:border-b-orange-400 hover:text-black duration-200">Women</li>
                            <li className="h-full flex items-center justify-center border-y-4  border-transparent hover:border-b-orange-400 hover:text-black duration-200">About</li>
                            <li className="h-full flex items-center justify-center border-y-4  border-transparent hover:border-b-orange-400 hover:text-black duration-200">Contact</li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <button title="cart" onClick={() => setCartOpen(!cartOpen)}>
                        <AiOutlineShoppingCart className="text-2xl"/>
                    </button>
                    
                    <button title="avatar">
                        <img src={avatar} alt="avatar" className="w-8 lg:w-10 rounded-full border-2 hover:border-orange-400 duration-200"/>
                    </button>
                </div>
            </header>



            {cartOpen && <Cart cart={props.cart} setCart={props.setCart}/>}
           
            <nav className={`fixed bg-white z-20 left-0 top-0 bottom-0 w-52 lg:hidden duration-200 ${navOpen ? "" : "-translate-x-full"}`}>
                
                <ul className="flex flex-col gap-4 p-4 py-6 items-start">
                    <li>
                        <button title="close" onClick={() => setNavOpen(false)}>
                            <IoMdClose className="mb-4 text-2xl"/>
                        </button>
                    </li>
                    <li className="text-black font-bold">Collections</li>
                    <li className="text-black font-bold">Men</li>
                    <li className="text-black font-bold">Women</li>
                    <li className="text-black font-bold">About</li>
                    <li className="text-black font-bold">Contact</li>
                </ul>
            </nav>
        </>
  )
}

export default Header