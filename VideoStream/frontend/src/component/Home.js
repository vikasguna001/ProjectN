import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import axios from "axios";
import { useParams } from "react-router-dom";
import LiveStreamData from "./LiveStream.videourls.json";

function Home() {
  const Id = useParams();
  const [VideoUrl, setVideoUrl] = useState([]);
  const GetVideo = () => {
    // axios.get(`http://localhost:5000/Video_GetData?Id=1`).then((res) => {
      axios.get(`https://videostream-spol.onrender.com/Video_GetData?Id=1`).then((res) => {
      setVideoUrl(res.data.data);
    });
  };

  useEffect(() => {
    GetVideo();
  }, []);
  return (
    <>
      {/* <ReactHlsPlayer
        src={LiveStreamData[0].Video_Url}
        autoPlay={false}
        controls={true}
        width="100%"
        height="900px"
      /> */}
      {VideoUrl.map((item, i) => {
        return (
          <>
            <ReactHlsPlayer
              src={item.Video_Url}
              autoPlay={false}
              controls={true}
              width="100%"
              height="900px"
              key={i}
            />
          </>
        );
      })}
    </>
  );
}
export default Home;
