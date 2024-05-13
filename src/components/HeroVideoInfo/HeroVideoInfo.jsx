import "./HeroVideoInfo.scss";
// import { timeStampConverter } from "../../Utilities/TimeConverter";
const MainVideoInfo = function ({ activeVideo }) {
  return (
    <>
      <div className="main-info">
        <h1 className="main-info__header">{activeVideo.title}</h1>
        <div className="main-info__container">
          <div className="main-info__channel-date">
            <p className="main-info__item main-info__item--bold">
              By {activeVideo.channel}
            </p>
            {/* <p className="main-info__date">
              {timeStampConverter(activeVideo.timestamp)}
            </p> */}
          </div>
          <div className="main-info__wrapper">
            <p className="main-info__views">{activeVideo.views}</p>
            <p className="main-info__likes">{activeVideo.likes}</p>
          </div>
        </div>
      </div>
      <div className="main-info__description">
        <p>{activeVideo.description}</p>
      </div>
    </>
  );
};

export default MainVideoInfo;