"use client"
import { SetStateAction, useState } from "react";
import { 
  BookKey, Box, Building2, ChevronDown, ChevronUp, ClipboardPen, Code, FoldVertical, 
  History, House, Layers, Megaphone, Menu, NotebookTabs, Phone, Pin, 
  ReceiptText, Rocket, ScrollText, User, Users 
} from "lucide-react";
import Link from "next/link";
import AgentModal from "./AgentModal";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("Leads");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };



  const handleNavClick = (name: SetStateAction<string>) => {
    setActiveNav(name);

    if (name === "Agent Skill") {
      setIsModalOpen(true); 
    } else {
      setIsModalOpen(false); 
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="xl:w-[10%]   h-full flex flex-col bg-[#EFEFEF] text-xs text-gray-600 py-2 px-3 transition-all duration-300 ">
      <div 
        className="xl:flex hidden items-center cursor-pointer hover:bg-gray-200 p-2 transition-all duration-300"
        onClick={toggleMenu}
      >
        <Menu className="text-gray-600 w-4 h-4" />
      </div>
      {menuOpen && (
        <div className="xl:flex  hidden flex-col gap-2 w-full">    
          <div 
            className={`flex items-center gap-4 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
              activeNav === "Home" ? "bg-white text-gray-600 border-l-4 border-[#00102A]" : ""
            }`} 
            onClick={() => handleNavClick("Home")}
          >
            <House className="text-inherit w-4 h-4" />
            <Link href="#" className="font-medium">Home</Link>
          </div>

            <div 
            className={`flex items-center gap-2 justify-between cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
              activeNav === "Recent" ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
            }`} 
            onClick={() => handleNavClick("Recent")}
          >
            <div className="flex items-center gap-2">
              <History className="text-inherit w-4 h-4" />
              <Link href="#" className="font-medium">Recent</Link>
            </div>
            {activeNav === "Recent" ? (
              <ChevronUp className="text-inherit w-4 h-4" />  
            ) : (
              <ChevronDown className="text-inherit w-4 h-4" /> 
            )}
          </div>

          <div 
            className={`flex items-center gap-2 justify-between cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
              activeNav === "Pinned" ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
            }`} 
            onClick={() => handleNavClick("Pinned")}
          >
            <div className="flex items-center gap-2">
              <Pin className="text-inherit w-4 h-4" />
              <Link href="#" className="font-medium">Pinned</Link>
            </div>
            {activeNav === "Pinned" ? (
              <ChevronUp className="text-inherit w-4 h-4" />  
            ) : (
              <ChevronDown className="text-inherit w-4 h-4" />  
            )}
          </div>

          <h2 className="text-gray-600 font-semibold">My Work</h2>
          {[ 
            { name: "Sales accelerator", icon: <Rocket className="w-4 h-4 text-inherit" /> },
            { name: "Dashboards", icon: <FoldVertical className="w-4 h-4 text-inherit" /> },
            { name: "Activites", icon: <ClipboardPen className="w-4 h-4 text-inherit" /> },
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}

          <h2 className="text-gray-600 font-semibold">Customers</h2>
          {[ 
        { name: "Accounts", icon: <Layers className="text-inherit w-4 h-4" /> },
        { name: "Contact", icon: <User className="text-inherit w-4 h-4" /> },
        { name: "Agent Skill", icon: <User className="text-inherit w-4 h-4" /> }
      ].map((item) => (
        <div
          key={item.name}
          className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
            activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
          }`}
          onClick={() => handleNavClick(item.name)}
        >
          {item.icon}
          <Link href="#" className="font-medium">{item.name}</Link>
        </div>
      ))}
          <h2 className="text-gray-600 font-semibold">Sales</h2>
          {[ 
            { name: "Leads", icon: <Phone className="text-inherit w-4 h-4" /> },
            { name: "Opportunities", icon: <NotebookTabs className="text-inherit w-4 h-4" /> },
            { name: "Competitors", icon: <Users className="text-inherit w-4 h-4" /> }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}

          <h2 className="text-gray-600 font-semibold">Collateral</h2>
          {[ 
            { name: "Quotes", icon: <BookKey className="text-inherit w-4 h-4" /> },
            { name: "Orders", icon: <ScrollText className="text-inherit w-4 h-4" /> },
            { name: "Invoices", icon: <ReceiptText className="text-inherit w-4 h-4" /> },
            { name: "Products", icon: <Box className="text-inherit w-4 h-4" /> },
            { name: "Sales Literature", icon: <Building2 className="text-inherit w-4 h-4" /> }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}

          <h2 className="text-gray-600 font-semibold">Marketing</h2>
          {[ 
            { name: "Marketing lists", icon: <Megaphone className="text-inherit w-4 h-4" /> },
            { name: "Quick Campaigns", icon: <Megaphone className="text-inherit w-4 h-4" /> }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}

        <h2 className="text-gray-600 font-semibold">Performance</h2>
          <div 
            className={`flex items-center gap-2 justify-between cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
              activeNav === "Sales" ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
            }`} 
            onClick={() => handleNavClick("Sales")}
          >
            <div className="flex items-center gap-2">
              <div className='bg-purple-600 text-gray-200 w-[30px] h-[30px] flex justify-center items-center'>S</div>
              <Link href="#" className="font-medium">Sales</Link>
            </div>
            <Code className="text-inherit w-4 h-4" />
          </div>
        </div>
      )}


   <div className="xl:hidden  w-full relative">
   <div className="flex items-center cursor-pointer hover:bg-gray-200 p-2 transition-all duration-300" onClick={toggleMobileMenu}>
        <Menu className="text-gray-600 w-4 h-4" />
    </div>
   <div className=" bg-gray-200 z-50   px-2 ">
    
    <div className={`  grid  grid-cols-3 gap-2  w-full ${mobileMenuOpen ? 'grid' : 'hidden'} xl:hidden`}>
        <div 
          className={`flex items-center gap-4 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${activeNav === "Home" ? "bg-white text-gray-600 border-l-4 border-[#00102A]" : ""}`} 
          onClick={() => handleNavClick("Home")}
        >
          <House className="text-inherit w-4 h-4" />
          <Link href="#" className="font-medium">Home</Link>
        </div>

       
        <div 
          className={`flex items-center gap-2 justify-between cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${activeNav === "Recent" ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""}`} 
          onClick={() => handleNavClick("Recent")}
        >
          <div className="flex items-center gap-2">
            <History className="text-inherit w-4 h-4" />
            <Link href="#" className="font-medium">Recent</Link>
          </div>
          {activeNav === "Recent" ? <ChevronUp className="text-inherit w-4 h-4" /> : <ChevronDown className="text-inherit w-4 h-4" />}
        </div>

        <div 
          className={`flex items-center gap-2 justify-between cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${activeNav === "Pinned" ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""}`} 
          onClick={() => handleNavClick("Pinned")}
        >
          <div className="flex items-center gap-2">
            <Pin className="text-inherit w-4 h-4" />
            <Link href="#" className="font-medium">Pinned</Link>
          </div>
          {activeNav === "Pinned" ? <ChevronUp className="text-inherit w-4 h-4" /> : <ChevronDown className="text-inherit w-4 h-4" />}
        </div>

       
     <div>
     <h2 className="text-gray-900 font-semibold">My Work</h2>
        {[ 
          { name: "Sales accelerator", icon: <Rocket className="w-4 h-4 md:flex hidden text-inherit" /> },
          { name: "Dashboards", icon: <FoldVertical className="w-4 h-4  md:flex hidden text-inherit" /> },
          { name: "Activites", icon: <ClipboardPen className="w-4 h-4  md:flex hidden text-inherit" /> },
        ].map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""}`}
            onClick={() => handleNavClick(item.name)}
          >
            {item.icon}
            <Link href="#" className="font-medium">{item.name}</Link>
          </div>
        ))}
     </div>

        
      <div>
      <h2 className="text-gray-900 font-semibold">Customers</h2>
          {[ 
        { name: "Accounts", icon: <Layers className="text-inherit md:flex hidden w-4 h-4" /> },
        { name: "Contact", icon: <User className="text-inherit md:flex hidden w-4 h-4" /> },
        { name: "Agent Skill", icon: <User className="text-inherit md:flex hidden w-4 h-4" /> }
      ].map((item) => (
        <div
          key={item.name}
          className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
            activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
          }`}
          onClick={() => handleNavClick(item.name)}
        >
          {item.icon}
          <Link href="#" className="font-medium">{item.name}</Link>
        </div>
      ))}
      </div>


      <div>
      <h2 className="text-gray-900 font-semibold">Sales</h2>
          {[ 
            { name: "Leads", icon: <Phone className="text-inherit w-4 h-4 md:flex hidden" /> },
            { name: "Opportunities", icon: <NotebookTabs className="text-inherit md:flex hidden w-4 h-4" /> },
            { name: "Competitors", icon: <Users className="text-inherit md:flex hidden w-4 h-4" /> }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}
      </div>

      <div>
        <h2 className="text-gray-900 font-semibold">Collateral</h2>
          {[ 
            { name: "Quotes", icon: <BookKey className="text-inherit w-4 h-4 md:flex hidden" /> },
            { name: "Orders", icon: <ScrollText className="text-inherit w-4 h-4 md:flex hidden" /> },
            { name: "Invoices", icon: <ReceiptText className="text-inherit w-4 h-4 md:flex hidden" /> },
            { name: "Products", icon: <Box className="text-inherit w-4 h-4 md:flex hidden" /> },
            { name: "Sales Literature", icon: <Building2 className="text-inherit w-4 h-4 md:flex hidden" /> }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}
        </div>

         <div>
         <h2 className="text-gray-900 font-semibold">Marketing</h2>
          {[ 
            { name: "Marketing lists", icon: <Megaphone className="text-inherit w-4 h-4 md:flex hidden" /> },
            { name: "Quick Campaigns", icon: <Megaphone className="text-inherit w-4 h-4 md:flex hidden" /> }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
                activeNav === item.name ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              <Link href="#" className="font-medium">{item.name}</Link>
            </div>
          ))}

         </div>
         
        <div>
        <h2 className="text-gray-900 font-semibold">Performance</h2>
          <div 
            className={`flex items-center gap-2 justify-between cursor-pointer hover:text-gray-800 hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ${
              activeNav === "Sales" ? "bg-white text-gray-900 border-l-4 border-[#00102A]" : ""
            }`} 
            onClick={() => handleNavClick("Sales")}
          >
            <div className="flex items-center gap-2">
              <div className='bg-purple-600 text-gray-200 w-[30px] h-[30px] flex justify-center items-center'>S</div>
              <Link href="#" className="font-medium">Sales</Link>
            </div>
            <Code className="text-inherit w-4 h-4" />
          </div>
        </div>

      </div>
     </div>
   </div>

{isModalOpen && <AgentModal closeModal={closeModal} />}
    </div>
  );
};

export default NavBar;
