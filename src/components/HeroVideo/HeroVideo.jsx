import "./HeroVideo.scss";

const MainVideo = function ({ poster }) {}
  return (
    <section>
      <video className="main-video" poster={poster} controls></video>
    </section>
  );
};
export default MainVideo;