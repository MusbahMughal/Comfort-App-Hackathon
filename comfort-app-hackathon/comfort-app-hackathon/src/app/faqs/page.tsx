
import { FaPlus } from "react-icons/fa6";

export default function Faqs() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[48px] text-[#333333] font-bold mb-4">
          Questions Looks Here
        </h1>

        <p className="text-[16px] font-normal mb-8 text-[#4F4F4F]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-24">
          <div>
            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What types of chairs do you offer?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                Do your chairs come with a warranty?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                Can I try a chair before purchasing?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>

          <div>
            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                How can we get in touch with you?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What will be delivered? And When?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                How do I clean and maintain my Comforty chair?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/According"


// const FAQ = () => {
// return (
//   <div className="lg:mx-20 sm:mx-10 mx-3 lg:mb-20 mb-8 mt-7 lg:mt-10">
//       <div className="title mx-auto ">
//         <h2 className="lg:text-[36px] text-3xl text-black text-center font-semibold">Questions Looks Here</h2>
//         <p className="text-[#4F4F4F] lg:text-[14px] md:w-auto sm:w-[400px] mx-auto mt-2 text-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
//       </div>
//       <div>
//     <div className="flex md:flex-row flex-col lg:gap-5 gap-3 lg:mt-20 mt-10">
//     {/* Left */}
//     <div className="md:w-1/2 lg:space-y-5 space-y-3 lg:px-5">
         
//          {/* 1 */}
//     <Accordion type="single" collapsible >
//           <AccordionItem value="item-1" className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4">
//          <AccordionTrigger className="lg:font-bold font-semibold  lg:text-[18px] text-[#333333]" >What types of chairs do you offer?</AccordionTrigger>
//            <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
//             </AccordionContent>
//            </AccordionItem>
//      </Accordion>

//          {/* 2 */}  
//          <Accordion type="single" collapsible >
//           <AccordionItem value="item-1" className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4">
//          <AccordionTrigger className="lg:font-bold font-semibold  lg:text-[18px] text-[#333333]" >Do your chairs come with a warranty?</AccordionTrigger>
//            <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
//             </AccordionContent>
//            </AccordionItem>
//          </Accordion>

//        {/* 3 */}          
//         <Accordion type="single" collapsible >
//           <AccordionItem value="item-1" className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4">
//          <AccordionTrigger className="lg:font-bold font-semibold  lg:text-[18px] text-[#333333]" >Can I try a chair before purchasing?</AccordionTrigger>
//            <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
//             </AccordionContent>
//            </AccordionItem>
//        </Accordion>      
//    </div>


//     {/* Right */}

//     <div className="md:w-1/2 space-y-3 lg:space-y-5">
         
//          {/* 1 */}
//          <Accordion type="single" collapsible >
//           <AccordionItem value="item-1" className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4">
//          <AccordionTrigger className="lg:font-bold font-semibold  lg:text-[18px] text-[#333333]" >How can we get in touch with you?</AccordionTrigger>
//            <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
//             </AccordionContent>
//            </AccordionItem>
//         </Accordion>

//          {/* 2 */}           
//          <Accordion type="single" collapsible >
//           <AccordionItem value="item-1" className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4">
//          <AccordionTrigger className="lg:font-bold font-semibold  lg:text-[18px] text-[#333333]" >What will be delivered? And When?</AccordionTrigger>
//            <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
//             </AccordionContent>
//            </AccordionItem>
//         </Accordion>

//      {/* 3 */}          
//        <Accordion type="single" collapsible >
//           <AccordionItem value="item-1" className="border-none bg-[#F7F7F7] px-6 py-4">
//          <AccordionTrigger className="lg:font-bold font-semibold  lg:text-[18px] text-[#333333]" >How do I clean and maintain my Comforty chair?</AccordionTrigger>
//            <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
//             </AccordionContent>
//            </AccordionItem>
//         </Accordion>
   
//     </div>
//     </div>
//       </div>
//   </div>
// )
// }

// export default FAQ