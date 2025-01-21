
import { IoTrashOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";


const Page = () => {
  return (
    <div className="lg:mx-20 sm:mx-10 mx-7 mb-10">
       <div className="flex flex-col md:flex-row items-center gap-8">
         {/* Bag */}
        <div className="bag mt-7 xl:w-[840px]">
        <h4 className="md:text-2xl text-xl text-[#111111] font-medium mb-4 ">Bag</h4>
        <div className="flex flex-col ">
            <div className="flex sm:flex-row gap-3 justify-center items-center flex-col pb-7 border-b ">
               <img src="/images/Product/cart1.png" alt="Sofa" className="sm:w-[150px] sm:h-[150px] max-w-[280px] max-h-[280px] " />
                <div className="flex md:gap-10 lg:gap-32 xl:gap-72">
                    <div className="title lg:mx-10">
                        <h6 className="text-[#272343] text-base">Library Stool Chair</h6>
                        <p className="text-[#757575] lg:mt-6  text-[14px] tracking-wide">Ashen Slate/Cobalt Bliss</p>
                        <div className="text-[#757575] lg:mb-6 lg:mt-2 text-[14px] tracking-wider flex items-center  gap-8">
                            <p>Size <span>L</span></p>
                            <p>Quantity <span>1</span></p>
                        </div>
                        <div className="flex lg:justify-start justify-center mt-2 gap-4">
                          <CiHeart className="size-7"/>
                          <IoTrashOutline className="size-7" />
                        </div>
                    </div>
                    <div className="price">
                      <p>MRP: $99</p>
                    </div>
            </div>
          </div>
          <div className="flex sm:flex-row gap-3 justify-center items-center flex-col pt-7 pb-7 border-b">
               <img src="/images/Product/cart2.png" alt="Sofa" className="sm:w-[150px] sm:h-[150px] max-w-[280px] max-h-[280px]" />
                <div className="flex md:gap-10 lg:gap-32 xl:gap-72">
                    <div className="title lg:mx-10 ">
                        <h6 className="text-[#272343] text-base">Library Stool Chair</h6>
                        <p className="text-[#757575] lg:mt-6  text-[14px] tracking-wide">Ashen Slate/Cobalt Bliss</p>
                        <div className="text-[#757575] lg:mb-6 lg:mt-2 text-[14px] tracking-wider flex gap-8">
                            <p>Size <span>L</span></p>
                            <p>Quantity <span>1</span></p>
                        </div>
                        <div className="flex lg:justify-start justify-center mt-2 gap-4">
                          <CiHeart className="size-7"/>
                          <IoTrashOutline className="size-7" />
                        </div>
                    </div>
                    <div className="price">
                      <p>MRP: $99</p>
                    </div>
            </div>
          </div>
        </div>
        </div>
        {/* Summary */}
        <div className="mt-7 w-[300px] text-[#111111]">
        <h4 className="text-2xl  font-medium mb-4 ">Summary</h4>
        <div className="mt-3 text-[15px]">
         <div className="flex justify-between">Subtotal <span className="font-medium">$198.00</span></div>
         <div className="flex justify-between my-3">Estimated Delivery & Handling <span className="font-medium">Free</span></div>
         <div className="flex justify-between my-2 py-3 border-y border-[#E5E5E5]">
          <span>Total</span> <span className="font-medium">$198.00</span>
         </div>
        </div>
        <button className="w-full rounded-[30px] mt-5 px-4 py-3 text-white bg-[#029FAE]">Member Checkout</button>
        </div>
       </div>
    </div>
  )
}

export default Page