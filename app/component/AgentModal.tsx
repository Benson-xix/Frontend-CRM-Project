import { ChevronUp, Copy, List, Menu, User, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import EmailInputWithAvatar from "./EmailInputWithAvatar";

interface AgentModalProps {
  closeModal: () => void;
}

const AgentModal: React.FC<AgentModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white w-full xl:w-[90%] lg:w-[70%] p-4 sm:p-6 md:p-8 rounded-lg flex flex-col shadow-lg relative">
        <button
          className="absolute top-3 right-3 py-2 px-4 rounded hover:bg-gray-200 transition"
          onClick={closeModal}
        >
          <X strokeWidth={3} />
        </button>
        <div className="py-5 flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <Image src="/logo.png" alt="Logo" width={33} height={26} />
            <h2 className="font-semibold text-lg text-gray-800">Agent skill</h2>
          </div>

          <div className="border rounded-md shadow-lg p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Check if on-hand inventory will allow all sales orders to ship
                without delay
              </h2>
              <ChevronUp className="md:flex hidden" />
            </div>
            <div className="grid gap-3">
              <p className="text-gray-700 flex items-center font-medium  h-full md:text-lg text-xs ">
                When{" "}
                <span className=" inline-flex  items-center lg:text-base text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg mx-1">
                  <User className="md:flex hidden" />
                  any vendor
                </span>{" "}
                sends an email with changes to  
              </p>
              <p className="text-gray-700 flex items-center font-medium  h-full md:text-lg text-xs ">
              
                <span className="inline-flex items-center lg:text-base text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg mx-1">
                  <List className="md:flex hidden" />
                  confirmed purchase orders
                </span>
                , check if the resulting
               
               
              </p>
              <p className="text-gray-700 flex items-center font-medium  h-full md:text-lg text-xs ">
              <span className="inline-flex items-center lg:text-base text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg mx-1">
                  <Menu className="md:flex hidden" />
                  on-hand inventory
                </span>{" "}
                will allow{" "}
                <span className="inline-flex  items-center lg:text-base text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg mx-1">
                  <Copy className="md:flex hidden" />
                  all sales orders
                </span>{" "}
                to{" "}
                
              </p>
              <p className="text-gray-700 flex items-center font-medium  h-full md:text-lg text-xs ">
               
                <span className="inline-flex  items-center lg:text-base text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg mx-1">
                  <Copy className="md:flex hidden" />
                  ship without delay
                </span>
                .
                <span className="inline-flex  items-center lg:text-base text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg mx-1">
                  <Copy className="md:flex hidden" />
                  Update the purchase order
                </span>{" "}
                
              </p>
              <p className="text-gray-700 flex items-center font-medium  h-full md:text-lg text-xs ">
              to reflect the change.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Image src="/outlook.png" alt="email" width={33} height={26} />
              <h2 className="font-semibold text-lg text-gray-800">
                Enable email access
              </h2>
            </div>
            <h2 className="text-lg font-medium text-gray-800">
              Allow the agent to access email inboxes to read mail from known
              vendors.
            </h2>
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <EmailInputWithAvatar />
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                Allow access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentModal;
