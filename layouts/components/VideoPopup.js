import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";
import { LiteYoutubeEmbed } from "../../node_modules/react-lite-yt-embed/dist/index";
import ImageFallback from "./ImageFallback";

function VideoPopup({ id, thumbnail, width = 700, height = 394 }) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="animate relative  flex overflow-hidden rounded-2xl">
      {showPopup ? (
        <div>
          <LiteYoutubeEmbed id={id} defaultPlay={true} />
        </div>
      ) : (
        <div className="relative inline-block w-full">
          <ImageFallback
            className="w-full"
            src={thumbnail}
            width={width}
            height={height}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default VideoPopup;
