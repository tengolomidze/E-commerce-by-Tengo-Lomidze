import {FaTrashAlt} from "react-icons/fa"

const Cart = (props:any) => {
  return (
    <div className=' absolute top-20 items right-4 left-4 lg:right-12 lg:left-auto shadow-xl lg:w-72 max-h-[500px] z-10 bg-zinc-100 bg-opacity-90 rounded-xl flex flex-col items-start'>
        <p className='font-bold text-sm w-full border-b-2 border-zinc-200 p-3'>Cart</p>
        <div className="w-full p-2  overflow-y-auto">
            {
                props.cart.map((item:any, i:any) => {
                    return  <div key={i} className="w-full mt-2 mb-4 flex items-center justify-between text-darkGrayishBlue">
                                <img alt="product" className="h-12 rounded-md" src="/image-product-1-thumbnail.jpg"/>
                                <div className="flex flex-col justify-between text-sm ">
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p>$125.00 x {item.amount} <span className="text-black font-bold">${125 * item.amount}</span></p>
                                </div>
                                <button title="delete" onClick={() => {
                                    props.setCart((prev:any) => (prev.filter((_el:any, idx:any) => idx !== i)));
                                }}>
                                    <FaTrashAlt/>
                                </button>
                            </div>
                })
            }
            {props.cart.length === 0 ? 
            <div className="w-full h-32 flex items-center justify-center text-darkGrayishBlue text-xs font-bold tracking-wider">
                Your cart is empty
            </div>
            :
            <button className="hover:bg-opacity-50 py-3 text-sm duration-200 font-bold w-full bg-orange-400 text-white rounded-lg">Checkout</button>
            }
           



        </div>
    </div>
  )
}

export default Cart