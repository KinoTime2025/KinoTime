import { useEffect, useRef, useState } from "react"
import { ImdbIcon, ItvIcon, KinopoiskIcon, RefreshIcon, VolumeOfIcon, VolumeOnIcon } from '../../assets/icons'

export default function TrailerGet() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://kinotime.world/api/trailerget?lang=uz")
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.error("Error fetching trailer:", err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
    }
  }, [muted])


  const handleWaiting = () => setLoading(true)
  const handleCanPlay = () => setLoading(false)
  const handlePlaying = () => setLoading(false)


  const handleEnded = () => {
    fetchData()
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="player-container relative bg-[#000] w-[1477px] h-[646px] text-white rounded-[15px] overflow-hidden">
        <div className="player-video relative w-full h-full  bg-black">
          {loading && <div className="loading-spinner w-[60px] h-[60px] border-[#ffffff33] absolute"></div>}
          <video
            ref={videoRef}
            src={data ? "https://kinotime.world/" + data.trailer : ""}
            autoPlay
            muted={muted}
            controls={false}
            onWaiting={handleWaiting}
            onCanPlay={handleCanPlay}
            onPlaying={handlePlaying}
            onEnded={handleEnded}
            className='absolute top-0 left-0 w-full h-full object-cover'
          />


          <div className="absolute top-2 left-2 text-2xl cursor-pointer mt-[20px] ml-[20px] bg-[#00000033] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center" onClick={fetchData}>
            <RefreshIcon />
          </div>

          <div className="absolute top-2 right-2 text-2xl cursor-pointer mt-[20px] mr-[20px] bg-[#00000033] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center" onClick={() => setMuted(!muted)}>
            {muted ? <VolumeOfIcon /> : <VolumeOnIcon />}
          </div>
        </div>


        {data && (
          <div className="player-info absolute bottom-0 left-0 w-full p-[20] ml-[20px]">
            <h2 className="m-0 font-bold text-[20px] mb-[15px] sm:text-[32px] md:text-[50px] lg:text-[70px]">{data.title}</h2>
            <div className="meta text-[14px] text-[#bbb] mt-[5px] ml-0"></div>

            <div className="ratings mt-[10px] ml-0 flex gap-[10px] mb-[15px]">
              <span className="flex gap-[5px] text-[18px] items-center">
                <ImdbIcon /> {data.voteAverage || "-"}
              </span>
              <span className="flex">
                <KinopoiskIcon />  {data.KinoPoiskAverage || "-"}
              </span>
              <span className="flex">
                <ItvIcon /> {data.itvkAverage || "-"}
              </span>
            </div>
            <p className="overview font-medium text-[22px] leading-[1.5] text-[#ddd] mb-[20px] w-full sm:text-[24px] md:text-[26px] lg:text-[28px] sm:w-[600px] md:w-[800px] lg:w-[1200px] line-clamp-2">{data.overview}</p>
          </div>
        )}
      </div>
    </div>
  )
}
