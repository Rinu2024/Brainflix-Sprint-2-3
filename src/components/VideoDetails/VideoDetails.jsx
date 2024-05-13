import "./VideoDetails.scss";
import { Link } from "react-router-dom";

function VideoItem({ title, channel, image, filtered, onClick }) {
  return (
    <li className="video__list-item" onClick={onClick}>
      <Link key={filtered.id} to={`/videos/${filtered.id}`}>
        <img className="video__img" src={image} alt="video-list-item" />
        <div className="video__container">
          <p className="video__title">{title}</p>
          <p className="video__channel">{channel}</p>
        </div>
      </Link>
    </li>
  );
}

export default VideoItem;