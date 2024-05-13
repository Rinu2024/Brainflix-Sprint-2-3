import "./VideoCollect.scss";
import VideoItems from "../VideoDetails/VideoDetails";

function VideoList({ videoData, id, onClick }) {
  return (
    <section className="video">
      <div className="video__container">
        <h2 className="video__header">Next Videos</h2>
        <ul className="video__list">
          {videoData
            .filter((video) => video.id !== id)
            .map((video) => (
                <VideoItems
                  key={video.id}
                  filtered={video}
                  id={video.id}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                  onClick={onClick}
                />
            ))}
        </ul>
      </div>
    </section>
  );
}
export default VideoList;