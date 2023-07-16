import React, { useState, useEffect, useCallback } from 'react';
import CommentSection from './Comments';

const VideoPage = (props) => {
  console.log('props in videopage', props)
  const [currentVideo, setCurrentVideo] = useState(props.currentCourse.chapters[0].link);
  const[currentChapter, setCurrentChapter]=useState("")

  const handleVideoClick = (chapter) => {
    setCurrentVideo(chapter.url);
    setCurrentChapter(chapter)
  };


  const VideoBox = () => {
    return (
      <video style={{ width: '100%' }} controls>
        <source src={currentVideo} type="video/mp4" />
      </video>
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '70%' }}>
        {/* Render video component */}
        <VideoBox />
        <div className="description">
          <h2>Video Title</h2>
          <p>Video description goes here...</p>
        </div>

        <RatingsTab />

          <div className="comments">
      <CommentSection
        courseId={props.currentCourse._id} // Replace with the actual course ID
        chapterName={currentChapter} // Replace with the actual chapter nam
      

        // comments={comments}
        // userComment={userComment}
        // handleCommentChange={handleCommentChange}
        // handleCommentSubmit={handleCommentSubmit}
      />
    </div>
    

      </div>
      <div style={{ width: '30%', backgroundColor: '#f1f1f1' }}>
        {/* Render video list */}
        <ul>
          {props.currentCourse &&
            props.currentCourse.chapters.map((chapter, index) => (
              <li
                key={index}
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => handleVideoClick(chapter)}
              >
                <img src={chapter.thumbnail} alt="Video Thumbnail" style={{ width: '100px', height: 'auto' }} />
                <div style={{ marginLeft: '10px' }}>
                  <h4>{chapter.title}</h4>
                  <p>{chapter.description}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const StarRating = React.memo(({ value, onChange }) => {
  const handleClick = (rating) => {
    onChange(rating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((rating) => (
        <span
          key={rating}
          onClick={() => handleClick(rating)}
          style={{ cursor: 'pointer', color: rating <= value ? 'gold' : 'gray', fontSize: "24px" }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
});

const RatingsTab = () => {
  const [ratings, setRatings] = useState({
    chapterContent: 0,
  });

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  return (
    <div className="ratings">
      <h3>Rate this video:</h3>
      <ul>
         <StarRating value={ratings.chapterContent} onChange={(value) => handleRatingChange('chapterContent', value)} />

      </ul>
    </div>
  );
};

export default VideoPage;
