import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";
import MainVideo from "../../components/HeroVideo/HeroVideo";
import MainVideoInfo from "../../components/HeroVideoInfo/HeroVideoInfo";
import CommentForm from "../../components/ReviewForm/ReviewForm";
import CommentList from "../../components/ReviewList/ReviewList";
import VideoList from "../../components/VideoCollect/VideoCollect";


export const api = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "?api_key=4290d88d-0039-4421-b736-53e27c313a3c";

function HomePage() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isNewVideoSelected, setIsNewVideoSelected] = useState(false);
  const { videoId } = useParams();

  //To render items once
  useEffect(() => {
    getVideos();
  }, []);

  //To get the video list
  function getVideos() {
    axios
      .get(`${api}/videos${apiKey}`)
      .then((response) => {
        setVideoList(response.data);
        setIsNewVideoSelected(true);
      })
      .catch(() => {});
  }

  //To get the selected video details
  const getVideo = useCallback((videoId) => {
    axios
      .get(`${api}/videos/${videoId}${apiKey}`)
      .then((res) => {
        setSelectedVideo(res.data);
      })
      .catch(() => {});
  }, []);

  //Window scrolling for video lists
  const handleVideoClick = useCallback(() => {
    setIsNewVideoSelected(true);
  }, []);
  useEffect(() => {
    if (isNewVideoSelected) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsNewVideoSelected(false);
    }
  }, [isNewVideoSelected]);

  //To fetch video details based on id
  useEffect(() => {
    let id = videoId || videoList[0]?.id;
    if (id) {
      getVideo(id);
    }
  }, [videoList, getVideo, videoId]);

  //To comment submit
  const handleOnSubmit = (event) => {

    //New Comment object
    const newComment = {
      name: "Nigel",
      comment: event.target.comment.value,
    };

    //Error message for empty text box
    if (event.target.comment.value !== "") {
      axios
        .post(`${api}/videos/${selectedVideo.id}/comments${apiKey}`, newComment)
        .then(() => {
          getVideo(selectedVideo.id);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter your comment");
    }
  };

  //Delete function
  const handleOnClickDelete = function (commentId) {
    axios
      .delete(
        `${api}/videos/${selectedVideo.id}/comments/${commentId}${apiKey}`
      )
      .then(() => {
        getVideo(selectedVideo.id);
      })
      .catch((error) => {});
  };

  return (
    <>
      {selectedVideo && <MainVideo poster={selectedVideo.image} />}
      <div className="app-container">
        <div className="app-wrapper">
          {selectedVideo && <MainVideoInfo activeVideo={selectedVideo} />}
          {selectedVideo && (
            <CommentForm
              commentNum={selectedVideo}
              handleOnSubmit={handleOnSubmit}
            />
          )}
          {selectedVideo && (
            <CommentList
              commentArr={selectedVideo.comments.sort(
                (a, b) => b.timestamp - a.timestamp
              )}
              handleOnClickDelete={handleOnClickDelete}
            />
          )}
        </div>
        {selectedVideo && videoList && (
          <VideoList
            videoData={videoList}
            id={selectedVideo.id}
            onClick={handleVideoClick}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;