import React, { useState } from 'react';

const CommentSection = ( props) => {
  console.log('props in comment', props)
  const [userComment, setUserComment] = useState('');

  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  const handleSubmit = () => {
    const commentData = {
      comment: userComment,
      courseId: 'your-course-id', // Replace with the actual course ID
      chapterName: 'your-chapter-name', // Replace with the actual chapter name
      userDetails: {
        // Replace with the actual user details
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    };

    setUserComment('');
  };


  return (
    <div className="comments">
      <h3>Comments:</h3>
      {/* <div className="comment-list">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div> */}
      <div className="comment-input">
        <textarea
          value={userComment}
          onChange={handleCommentChange}
          rows={3}
          style={{ width: '100%' }}
          placeholder="Enter your comment"
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CommentSection;
