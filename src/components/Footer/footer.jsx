import { TelegramIcon, TelephoneIcon } from '../../assets/icons/index'

const Footer = () => {
  return (
    <div className="bg-[#1D1F1E] h-[460px] mt-[365px]">
      <div className="containers flex justify-between">
        <div className="pt-[60px] flex gap-[70px]">
          <div className="flex flex-col gap-[10px]">
            <span className="text-white font-bold text-[18px]">Biz haqimizda</span>
            <ul className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
              <li className="hover:text-white duration-300">Kontaktlar</li>
              <li className="hover:text-white duration-300">Qo'llab-quvvatlash</li>
              <li className="hover:text-white duration-300">Tariflar</li>
              <li className="hover:text-white duration-300">Hamkorlar</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-white font-bold text-[18px]">Katalog</span>
            <div className="flex gap-[70px]">
              <ul className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
                <li className="hover:text-white duration-300">TV</li>
                <li className="hover:text-white duration-300">Filmlar</li>
                <li className="hover:text-white duration-300">Seriallar</li>
                <li className="hover:text-white duration-300">Multfilmlar</li>
              </ul>
              <ul className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
                <li className="hover:text-white duration-300">Anime</li>
                <li className="hover:text-white duration-300">Live</li>
                <li className="hover:text-white duration-300">Uz video</li>
                <li className="hover:text-white duration-300">iTrack.uz</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-[60px] flex gap-[70px]">
          <div className="flex flex-col gap-[6px]">
            <span className="text-white font-bold text-[18px]">Qo'llab-quvvatlash</span>
            <div>
              <button className="text-white font-bold text-[18px] w-[190px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px]">
                <img src={TelegramIcon} alt="Telegram icon" width={20} height={20} /> 
                <span>Chatga yozish</span>
              </button>
            </div>
            <div>
              <button className="text-white font-bold text-[18px] w-[190px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px]">
                <img src={TelephoneIcon} alt="Telegram icon" width={20} height={20} /> 
                <span>71-202-4-202</span>
              </button>
            </div>
          </div>
          <div>
            <span>Ilovalar</span>
            <div>
              <button className="text-white font-bold text-[18px] w-[190px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col">
                <span className="font-normal text-[10px]">Доступно в</span>
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
