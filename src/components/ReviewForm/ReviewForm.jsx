import React, { useState } from "react";
import "./ReviewForm.scss";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";

function CommentForm({commentNum, handleOnSubmit}) {

  const [comment, setComment] = useState("");

  //clear text field and prevent default behaviour after submitting
  const handleSubmit = (event) => {
    event.preventDefault();
    handleOnSubmit(event)
    setComment("")
  };

  return (
    <>
      <div className="conversation">
        <p className="conversation__comment-number">
          {commentNum.comments.length} Comments
        </p>
      </div>
      <section className="conversation__wrapper">
        <img className="conversation__avatar" src={Avatar} alt="avatar" />
        <form className="conversation__form" onSubmit={handleSubmit}>
          <div className="conversation__title-box-container">
            <label className="conversation__title">join the conversation</label>
            <textarea
              className="conversation__box"
              placeholder="Add a new comment"
              name="comment"
              id="comment"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button className="conversation__button" type="submit">
            comment
          </button>
        </form>
      </section>
    </>
  );
}

export default CommentForm;