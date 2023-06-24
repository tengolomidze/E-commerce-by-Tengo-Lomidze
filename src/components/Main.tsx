import Header from "./Header"
import { useState } from "react"
import products from "../products.json"
import {FaMinus, FaPlus} from "react-icons/fa"
import {AiOutlineShoppingCart, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import LightBox from "./LightBox"

const Main = () => {
  const [index, setIndex] = useState(0)
  const [lightBoxOpen, setLightBoxOpen] = useState(false)
  const [cart, setCart]:any = useState([])


  const [N, setN] = useState(1)

  

  const nextImg = () => {
    if(index >= products.length - 1){
        setIndex(0)
    }else{
        setIndex(index+1)
    }
  }
  const previousImg = () => {
    if(index <= 0){
        setIndex(products.length - 1)
    }else{
        setIndex(index-1)
    }
  }

  const {mainImage} = products[index]
  return (
    <>
        <Header cart={cart} setCart={setCart}/>
        {lightBoxOpen && <LightBox setLightBoxOpen={setLightBoxOpen} index={index} setIndex={setIndex} mainImage={mainImage} previousImg={previousImg} nextImg={nextImg}/>}
        <section className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <article className="lg:p-8">
                    <div className="relative">
                        <img onClick={() => setLightBoxOpen(true)} src={mainImage} className="cursor-pointer w-full lg:rounded-xl"/>

                        
                        <div className="absolute lg:hidden top-1/2 -translate-y-1/2 w-full flex items-center justify-between px-4">
                            <button onClick={previousImg} className="text-xl bg-white rounded-full p-3"><AiOutlineLeft/></button>
                            <button onClick={nextImg} className="text-xl bg-white rounded-full p-3"><AiOutlineRight/></button>
                        </div>
                    </div>
                    <div className="hidden lg:flex  items-center justify-between  mt-4">
                        {products.map((product, i) => {
                            return  <li className={`rounded-lg border-2 duration-200  overflow-hidden  cursor-pointer ${index === i && " border-orange-400"}`} onClick={() => setIndex(i)} >
                                        <img className={`w-16 duration-200 hover:opacity-40 ${index === i && "opacity-40"}`}  key={i} src={product.mainImage}/>
                                    </li>
                        })} 
                    </div>
                </article>

                <article className="p-8 flex flex-col items-start justify-center gap-4">
                    <p className="font-bold text-orange-400 uppercase text-xs tracking-wider">Sneaker Company</p>
                    <h1 className="font-bold text-2xl lg:text-4xl">Fall Limited Edition Sneakers</h1>
                    <p className="text-xs text-darkGrayishBlue tracking-wide">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    
                    <div className="flex items-center w-full justify-between flex-row lg:flex-col lg:items-start">
                        <div className="flex items-center justify-center gap-4">
                            <h1 className="font-bold text-2xl">$125.00</h1>
                            <p className="font-bold text-sm px-2 py-0.5 rounded-md bg-orange-300 bg-opacity-20 text-orange-400">50%</p>
                        </div>
                        <p className="text-sm line-through text-grayishBlue">$250.00</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
                        <div className="flex w-full lg:w-min  items-center justify-between gap-8 rounded-md bg-grayishBlue bg-opacity-20 p-3">
                            <button onClick={() => N > 1 ? setN(N-1) : null} className="text-orange-400 hover:text-orange-200 duration-200"><FaMinus/></button>
                            <p className="font-bold">{N}</p>
                            <button onClick={() => setN(N+1)} className="text-orange-400 hover:text-orange-200 duration-200"><FaPlus/></button>
                        </div>
                        <button onClick={() => setCart([...cart, {amount: N}])} className="hover:bg-opacity-50 duration-200 buy-shadow flex text-sm tracking-wide font-bold w-full py-3 bg-orange-400 text-white rounded-lg items-center justify-center gap-4"><AiOutlineShoppingCart/> Add to cart</button>
                    </div>
                    
                </article>
            </section>
    </>
  )
}

export default Main