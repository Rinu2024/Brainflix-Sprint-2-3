import "./ReviewItem.scss";
// import { timeStampConverter } from "../../Utilities/TimeConverter";

const CommentItem = function ({
  name,
  time,
  comment,
  videoId,
  handleOnClickDelete,
}) {
  return (
    <li className="conversation__item">
      {/* <button
        className="conversation__delete-btn"
        onClick={() => {
          handleOnClickDelete(videoId);
        }}
      >
        <span className="conversation__delete-btn-vertical">delete</span>
      </button> */}
      <img
        className="conversation__comment-avatar"
        src="https://via.placeholder.com/150/e1e1e1/e1e1e1.jpg"
        alt="user-avatar"
      />
      <div className="conversation__container">
        <div className="conversation__name-date">
          <p className="conversation__name">{name}</p>
          {/* <p className="conversation__date">{timeStampConverter(time)}</p> */}
        </div>
        <p className="conversation__comment">{comment}</p>
      </div>
    </li>
  );
};

export default CommentItem;