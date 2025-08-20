import React, { useEffect, useState, useRef } from "react";
import "../Traler/index.css";
import { FaSyncAlt, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function TrailerGet() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://kinotime.world/api/trailerget?lang=uz");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching trailer:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);


  const handleWaiting = () => setLoading(true);
  const handleCanPlay = () => setLoading(false);
  const handlePlaying = () => setLoading(false);


  const handleEnded = () => {
    fetchData();
  };

  return (
    <div className="player-container">
      <div className="player-video">
        {loading && <div className="loading-spinner"></div>}
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
        />
      
      
        <div className="icon-left" onClick={fetchData}>
          <FaSyncAlt />
        </div>
        <div className="icon-right" onClick={() => setMuted(!muted)}>
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </div>
      </div>

     
      {data && (
        <div className="player-info">
          <h2>{data.title}</h2>
          <div className="meta">
            <span>{data.genres?.join(", ")}</span>
            <span>• {data.year}</span>
          </div>
          <div className="ratings">
            <span className="imdb">IMDb {data.voteAverage || "-"}</span>
          </div>
          <p className="overview">{data.overview}</p>
        </div>
      )}
    </div>
  );
}
