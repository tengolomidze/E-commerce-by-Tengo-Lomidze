import products from "../products.json"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import  {IoMdClose} from "react-icons/io"
const LightBox = (props:any) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 flex items-center justify-center'>
        <button title="close" onClick={() => props.setLightBoxOpen(false)} className="absolute top-8 right-8 ">
            <IoMdClose className="text-5xl text-white hover:text-orange-400 duration-200"/>
        </button>

        <article className="lg:p-8 p-2 max-w-lg flex items-center justify-center flex-col">
            <div className="relative">
                <img alt="product" src={props.mainImage} className="w-full lg:rounded-xl"/>

                
                <div className="absolute flex px-3 lg:p-0 top-1/2 -translate-y-1/2 w-full items-center justify-between">
                    <button title="left" onClick={props.previousImg} className="text-xl bg-white rounded-full p-3 lg:-translate-x-1/2"><AiOutlineLeft/></button>
                    <button title="right" onClick={props.nextImg} className="text-xl bg-white rounded-full p-3 lg:translate-x-1/2"><AiOutlineRight/></button>
                </div>
            </div>
            <div className="hidden lg:flex  items-center justify-evenly  mt-4 w-full ">
                {products.map((product, i) => {
                    return  <div className={`rounded-lg border-2  duration-200  overflow-hidden  cursor-pointer ${props.index === i ? " border-orange-400" : "border-transparent"}`} onClick={() => props.setIndex(i)} >
                                <img alt="product" className={`w-16 duration-200 hover:opacity-40 ${props.index === i && "opacity-40"}`}  key={i} src={product.mainImage}/>
                            </div>
                })} 
            </div>
        </article>
    </div>
  )
}

export default LightBox