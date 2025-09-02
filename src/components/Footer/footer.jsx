import { AppGallery, AppleIcon, FacebookPage, GallaxyStore, GoogleIcon, InstagramPage, SmartTv, TelegramIcon, TelegramPage, TelephoneIcon, YoutubePage } from '../../assets/icons/index'
import { TVPrefix } from '../../assets/images'

const Footer = () => {
  return (
    <div className="bg-[#1D1F1E] mt-[435px]">
      <div className="containers lg:flex lg:justify-between lg:gap-[70px]">

        <div className="lg:pt-[60px] lg:flex lg:items-center lg:gap-[100px] md:flex md:gap-[100px] md:mb-[60px] md:pt-[40px] sm:flex sm:gap-[100px] sm:mb-[60px] sm:pt-[40px]">
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
            <div className="flex gap-[70px] md:gap-[130px]">
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

        <div className="lg:mt-[60px] lg:flex  lg:gap-[50px] lg:pt-[10px] md:flex md:flex-col md:gap-[25px] sm:flex sm:flex-col sm:gap-[25px]">

          <div className="flex flex-col gap-[8px]">
            <span className="text-white font-bold text-[18px]">Qo'llab-quvvatlash</span>
            <button className="text-white font-bold text-[18px] w-[195px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px] cursor-pointer hover:bg-[#1213] duration-300">
              <TelegramIcon />
              <span>Chatga yozish</span>
            </button>
            <button className="text-white font-bold text-[18px] w-[195px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px] cursor-pointer hover:bg-[#1213] duration-300">
              <TelephoneIcon />
              <span>71-202-4-202</span>
            </button>
          </div>

          <div className="gap-[50px] lg:flex">

            <div className="flex flex-col gap-[8px]">
              <span className="text-white font-bold text-[18px]">Ilovalar</span>

              <div className="flex gap-[10px] md:flex md:gap-[15px] sm:flex sm:gap-[15px]">
                <div className="lg:flex lg:flex-col lg:gap-[6px] md:flex md:flex-col md:gap-[6px] sm:flex sm:flex-col sm:gap-[6px]">
                  <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <AppleIcon />
                    </div>
                  </button>

                  <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <SmartTv />
                    </div>
                  </button>

                  <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <GoogleIcon />
                    </div>
                  </button>
                </div>

                <div className="lg:flex lg:flex-col lg:gap-[6px] md:flex md:flex-col md:gap-[6px] sm:flex sm:flex-col sm:gap-[6px]">
                  <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <AppGallery />
                    </div>
                  </button>

                  <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <GallaxyStore />
                    </div>
                  </button>

                  <button className="text-white bg-[#52b038] font-bold text-[18px] w-[145px] h-[50px] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <img src={TVPrefix} alt="Logo" width={90} height={90} />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:mt-[20px] sm:mt-[20px]">
              <span className="text-white font-bold text-[18px] mb-[6px]">Ijtimoiy tarmoqlar</span>

              <div className="lg:flex lg:flex-col gap-[6px] md:flex md:flex-[20px] md:mt-[8px]  sm:flex sm:flex-[20px] sm:mt-[8px]">
                <div className="flex gap-[10px]">
                  <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[10px]">
                      <TelegramPage />
                    </div>
                  </button>

                  <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[10px]">
                      <InstagramPage />
                    </div>
                  </button>
                </div>

                <div className="flex gap-[10px]">
                  <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[10px]">
                      <FacebookPage />
                    </div>
                  </button>

                  <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[10px]">
                      <YoutubePage />
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="lg:mt-[90px] lg:pb-[30px] md:mt-[40px] md:pb-[30px] sm:mt-[40px] sm:pb-[30px]">
        <span className="flex w-full h-[1px] bg-[#2e2f2f]"></span>
        <div className="containers lg:flex lg:justify-between !mt-[35px] lg:w-[1200px] md:flex md:flex-col md:gap-[15px] sm:flex sm:flex-col sm:gap-[15px]">
          <div>
            <p className="text-[#8e8e8d] font-normal ">© 2015 - 2025 iTV (LLC ALPHAZET TECHNOLOGIES).v1.44.0</p>
          </div>
          <div className="text-[#8e8e8d] flex gap-[30px]">
            <option value="Uzbek">O'zbekcha</option>
            <option value="Russian">Русский</option>
            <option value="English">English</option>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer