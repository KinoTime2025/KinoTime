
import { useState } from "react";
import { SearchSvg, PromocodIcon, NotificationIcon, RegisterIcon } from '../../assets/icons'
import { SiteLogo } from '../../assets/images'

function Header() {
const langs = ["O‘zbekcha", "Русский", "English"];
const [selected, setSelected] = useState("O‘zbekcha");
const [open, setOpen] = useState(false);

  return (
    <div className='bg-[#212222] pl-[1%] flex gap-[20%]'>
      <div>	
        <ul className="text-[#868787] cursor-pointer text-center pt-10 font-bold p-7 text-[16px] flex gap-[17px]">
          <img src={SiteLogo} alt="" width={66} height={33} />	
          <li className="hover:text-white pl-4 duration-300">Bosh sahifa</li>
          <li className="hover:text-white duration-300">TV</li>
          <li className="hover:text-white duration-300">Filmlar</li>
          <li className="hover:text-white duration-300">Seriallar</li>
          <li className="hover:text-white duration-300">Multfilmlar</li>
          <li className="hover:text-white duration-300">Anime</li>
          <li className="hover:text-white duration-300">Jonli efir</li>
          <li className="hover:text-white duration-300">Tariflar</li>
        </ul>
      </div>

      <div className='flex gap-3 items-center justify-end cursor-pointer'>
        <button className="cursor-pointer flex justify-center rounded-[12px] items-center w-[60px] h-[60px] bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white">
          <SearchSvg/>
        </button> 

        <button className="cursor-pointer flex justify-center rounded-[12px] items-center w-[60px] h-[60px] bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white">
          <PromocodIcon/>
        </button> 

        <button className="cursor-pointer flex justify-center rounded-[12px] items-center w-[60px] h-[60px] bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white">
          <NotificationIcon/>
        </button> 

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center rounded-[12px] items-center w-[60px] h-[60px] bg-[#2a2a29] hover:bg-[#373837] text-white"
          >
            {selected === "O‘zbekcha" ? "UZ" : selected === "Русский" ? "RU" : "EN"}
          </button>
          {open && (
            <div className="absolute right-0 mt-2 bg-[#2a2a29] rounded-[8px] overflow-hidden">
              {langs.map((l) => (
                <div
                  key={l}
                  onClick={() => { setSelected(l); setOpen(false); }}
                  className="px-4 py-2 text-white hover:bg-[#373837] cursor-pointer"
                >
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="cursor-pointer flex justify-center rounded-[12px] items-center w-[60px] h-[60px] bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white">
          <RegisterIcon/>
        </button> 
      </div>
    </div>
  )
}

export default Header