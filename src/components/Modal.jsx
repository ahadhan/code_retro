// import { useState } from 'react';
// import { TiLocationArrow } from "react-icons/ti";
// import { IoMdClose } from "react-icons/io";

// const Modal = ({ isOpen, closeModal, portfolioItems }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
//       <div
//         className="relative p-8 rounded-lg shadow-xl max-w-6xl w-full"
//         style={{
//           background: 'linear-gradient(-45deg, #1B0063, #1A0024, #1B0063, #1B0129)',
//           backgroundSize: '400% 400%',
//           animation: 'gradient 15s ease infinite',
//         }}
//       >
//         <button onClick={closeModal} className="absolute top-4 right-4 text-gray-300 hover:text-white">
//           <IoMdClose className="text-3xl" />
//         </button>
//         <h2 className="text-4xl mb-8 text-white font-bold text-center">My Previous Work</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           { portfolioItems?.map((item, index) => (
//             <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col">
//               <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />

//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
//                   <p className="text-sm text-gray-600 mb-3">{item.description}</p>

//                   {/* Tech Stack Badges */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {item.techStack.map((tech, i) => (
//                       <span key={i} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA Buttons */}
//                 <div className="flex justify-between mt-auto">
//                   {item.live && (
//                     <a
//                       href={item.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
//                     >
//                       Live Demo
//                     </a>
//                   )}
//                   {item.code && (
//                     <a
//                       href={item.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm border border-purple-600 text-purple-600 px-3 py-1 rounded hover:bg-purple-600 hover:text-white transition"
//                     >
//                       Code
//                     </a>
//                   )}
//                   {/* {item.details && (
//                     <a
//                       href={item.details}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm underline text-purple-700 hover:text-purple-900"
//                     >
//                       More
//                     </a>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//           ))

//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;






import { useState } from 'react';
import { TiLocationArrow } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, closeModal, portfolioItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-3- "
    >
      < div className="relative p-8 rounded-lg shadow-xl max-w-3xl w-full"
        style={{
          background: 'linear-gradient(-45deg, #1B0063, #1A0024, #1B0063, #1B0129)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      >
        <button onClick={closeModal} className="absolute top-10 right-4 text-gray-500">
          <IoMdClose className='text-3xl' />
        </button>
        <h2 className="text-5xl mb-8 text-blue-50 special-font text-center " > My Portfolio</h2 >
        <div className="flex flex-wrap gap-4 justify-center">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-md border-2 border-gray-300 shadow-md w-68">
              <img src={item.src} alt={item.title} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="font-semibold font-circular-web">{item.title}</h3>
              <p className='text-sm font-robert-regular mb-2'>{item.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.techStack.map((tech, i) => (
                  <span key={i} className="bg-purple-300 text-purple-900 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div >


    </div>


  );
};

export default Modal;